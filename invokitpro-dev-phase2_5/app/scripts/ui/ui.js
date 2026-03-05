/* ─── MODAL HELPERS (Phase 2.5 a11y upgrade) ─── */
const _modalStack = [];
let _lastFocus = null;

function _focusFirst(modal){
  const focusable = modal.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
  for(const el of focusable){
    if(!el.disabled && el.offsetParent !== null){
      try{ el.focus({preventScroll:true}); }catch(e){}
      return;
    }
  }
  modal.setAttribute('tabindex','-1');
  try{ modal.focus({preventScroll:true}); }catch(e){}
}

function openM(id){
  const m = $(id);
  if(!m) return;
  _lastFocus = document.activeElement;
  m.classList.add('on');
  m.setAttribute('role','dialog');
  m.setAttribute('aria-modal','true');
  if(!_modalStack.includes(id)) _modalStack.push(id);
  setTimeout(()=>_focusFirst(m), 0);
}

function closeM(id){
  const m = $(id);
  if(!m) return;
  m.classList.remove('on');
  const i = _modalStack.lastIndexOf(id);
  if(i>=0) _modalStack.splice(i,1);
  // restore focus
  if(_lastFocus && typeof _lastFocus.focus === 'function'){
    try{ _lastFocus.focus({preventScroll:true}); }catch(e){}
  }
}

document.addEventListener('keydown', (e)=>{
  // ESC closes top-most modal
  if(e.key === 'Escape'){
    const top = _modalStack[_modalStack.length-1];
    if(top && top !== 'm-ob'){ // keep onboarding from accidental close
      e.preventDefault();
      closeM(top);
    }
  }
  // Basic focus trap
  if(e.key === 'Tab'){
    const top = _modalStack[_modalStack.length-1];
    if(!top) return;
    const modal = $(top);
    if(!modal || !modal.classList.contains('on')) return;
    const focusable = Array.from(modal.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'))
      .filter(el=>!el.disabled && el.offsetParent !== null);
    if(focusable.length<2) return;
    const first = focusable[0];
    const last  = focusable[focusable.length-1];
    if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }
}, true);

// Overlay click-to-close (except onboarding)
document.querySelectorAll('.overlay').forEach(o => o.addEventListener('click', e => {
  if(e.target===o && o.id!=='m-ob') closeM(o.id);
}));

function confirm2(title, msg, cb) {
  $('conf-title').textContent=title; $('conf-msg').textContent=msg;
  $('conf-ok').onclick=()=>{ closeM('m-confirm'); cb(); };
  openM('m-confirm');
}

/* ─── COUNTS (FIX #3: cnt-inv element now exists in HTML, no longer silently fails) ─── */
async function updateCounts() {
  const [invs, rcts, clis] = await Promise.all([dbAll('invoices'),dbAll('receipts'),dbAll('clients')]);
  const cntInv=$('cnt-inv'); if(cntInv) cntInv.textContent=invs.length;
  const cntRct=$('cnt-rct'); if(cntRct) cntRct.textContent=rcts.length;
  const cntCli=$('cnt-cli'); if(cntCli) cntCli.textContent=clis.length;
  const cntRctSub=$('cnt-rct-sub'); if(cntRctSub) cntRctSub.textContent=rcts.length;
}

/* ─── TOAST (FIX #4: targets id='toast-wrap' not class 'twrap') ─── */
function toast(msg, type='ok') {
  const t = document.createElement('div');
  t.className=`toast ${type}`; t.textContent=msg;
  $('toast-wrap').appendChild(t);
  setTimeout(()=>t.remove(), 2800);
}
