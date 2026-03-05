// ─────────────────────────────────────────────────────────────
// Editor dirty-state: prevent accidental data loss
// ─────────────────────────────────────────────────────────────
let __dirty = false;
function setDirty(v){
  __dirty = !!v;
  document.body.classList.toggle('is-dirty', __dirty);
}
function markDirty(){ setDirty(true); }

window.addEventListener('beforeunload', (e) => {
  if(!__dirty) return;
  e.preventDefault();
  e.returnValue = '';
});

// Mark dirty on any input/change inside editor form panel
document.addEventListener('input', (e) => {
  const ef = document.getElementById('ef');
  if(!ef) return;
  if(ef.contains(e.target)) markDirty();
}, true);
document.addEventListener('change', (e) => {
  const ef = document.getElementById('ef');
  if(!ef) return;
  if(ef.contains(e.target)) markDirty();
}, true);


/* ── InvoKit Pro PWA Bootstrap ── */
(function() {
  // 1. Inline manifest via blob URL
  const manifest = '{\n  "name": "InvoKit Pro",\n  "short_name": "InvoKit Pro",\n  "description": "Professional invoicing for small businesses. Works offline.",\n  "start_url": "/",\n  "display": "standalone",\n  "background_color": "#0f2447",\n  "theme_color": "#0f2447",\n  "orientation": "any",\n  "icons": [\n    { "src": "data:image/png;base64,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", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },\n    { "src": "data:image/png;base64,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", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }\n  ]\n}';
  const mBlob = new Blob([manifest], {type:'application/manifest+json'});
  const mUrl  = URL.createObjectURL(mBlob);
  const mLink = document.createElement('link');
  mLink.rel  = 'manifest'; mLink.href = mUrl;
  document.head.appendChild(mLink);

  // 2. Apple touch icon — use logo data URI
  const appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
  if (appleIcon) appleIcon.href = 'data:image/png;base64,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';

  // 3. Register inline service worker via blob URL
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    const swCode = "\nconst CACHE = 'invokit-pro-v2';\nconst SHELL = [self.location.pathname.replace('sw.js','') || '/'];\n\nself.addEventListener('install', e => {\n  e.waitUntil(\n    caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())\n  );\n});\n\nself.addEventListener('activate', e => {\n  e.waitUntil(\n    caches.keys().then(keys =>\n      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))\n    ).then(() => self.clients.claim())\n  );\n});\n\nself.addEventListener('fetch', e => {\n  if (e.request.method !== 'GET') return;\n  e.respondWith(\n    caches.match(e.request).then(cached => {\n      if (cached) return cached;\n      return fetch(e.request).then(resp => {\n        if (!resp || resp.status !== 200 || resp.type === 'opaque') return resp;\n        const clone = resp.clone();\n        caches.open(CACHE).then(c => c.put(e.request, clone));\n        return resp;\n      }).catch(() => caches.match(SHELL[0]));\n    })\n  );\n});\n";
    const swBlob = new Blob([swCode], {type:'text/javascript'});
    const swUrl  = URL.createObjectURL(swBlob);
    navigator.serviceWorker.register(swUrl, {scope:'./'} )
      .then(r => console.log('[InvoKit] SW registered (inline blob) — offline caching active'))
      .catch(e => console.warn('[InvoKit] SW registration failed:', e));
  }
})();



/* ════════════════════════════════════════════════════════
   INVOKIT PRO v2.0
   All 15 bugs corrected. See comments marked FIX #N.
════════════════════════════════════════════════════════ */

/* ─── CURRENCY ─── */
/* ── Currency master list — single source of truth for all dropdowns ── */
const CURRENCIES = [
  { code:'GBP', symbol:'£',    locale:'en-GB', name:'British Pound'       },
  { code:'USD', symbol:'$',    locale:'en-US', name:'US Dollar'           },
  { code:'EUR', symbol:'€',    locale:'de-DE', name:'Euro'                },
  { code:'NGN', symbol:'₦',    locale:'en-NG', name:'Nigerian Naira'      },
  { code:'GHS', symbol:'₵',    locale:'en-GH', name:'Ghana Cedi'          },
  { code:'KES', symbol:'KSh',  locale:'sw-KE', name:'Kenyan Shilling'     },
  { code:'ZAR', symbol:'R',    locale:'en-ZA', name:'South African Rand'  },
  { code:'CAD', symbol:'CA$',  locale:'en-CA', name:'Canadian Dollar'     },
  { code:'AUD', symbol:'A$',   locale:'en-AU', name:'Australian Dollar'   }
];

/* CURS — lookup map derived from CURRENCIES (used by fmt/fmtS) */
const CURS = Object.fromEntries(
  CURRENCIES.map(c => [c.code, {s:c.symbol, l:c.locale}])
);

/**
 * buildCurrencySelect(selectEl, opts)
 * Populates a <select> with CURRENCIES options exactly once.
 * opts.placeholder — if set, prepends an empty "Choose…" option
 * opts.selected    — pre-selects this code
 * Guards against double-population via dataset.populated flag.
 */
function buildCurrencySelect(selectEl, opts = {}) {
  if (!selectEl) return;
  if (selectEl.dataset.populated === '1') {
    // Already built — just update selected value if requested
    if (opts.selected) selectEl.value = opts.selected;
    return;
  }
  selectEl.innerHTML = '';
  if (opts.placeholder) {
    const ph = document.createElement('option');
    ph.value = ''; ph.textContent = opts.placeholder;
    selectEl.appendChild(ph);
  }
  CURRENCIES.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.code;
    opt.textContent = `${c.code} (${c.symbol}) — ${c.name}`;
    selectEl.appendChild(opt);
  });
  selectEl.dataset.populated = '1';
  if (opts.selected) selectEl.value = opts.selected;
};
function fmt(n, c='GBP') {
  const d = CURS[c] || CURS[c.toUpperCase()] || CURS.GBP;
  return d.s + Math.abs(n).toLocaleString(d.l, {minimumFractionDigits:2, maximumFractionDigits:2});
}

/* FIX #1 + #6: fmtS now has its closing brace, and getDefaultCurrency is correctly at global scope */
function fmtS(n, c='GBP') {
  const d = CURS[c] || CURS[c.toUpperCase()] || CURS.GBP;
  if (n >= 1e6) return d.s + (n/1e6).toFixed(1) + 'M';
  if (n >= 1e3) return d.s + (n/1e3).toFixed(0) + 'K';
  return d.s + Math.round(n).toLocaleString();
} // FIX #1: This closing brace was MISSING in the original — it trapped getDefaultCurrency inside fmtS

/* FIX #6: Now correctly at global scope, accessible from renderItems() and anywhere else */
function getDefaultCurrency() {
  const sel = document.getElementById('s-cur');
  if (sel && sel.value) return sel.value;
  if (_settings && _settings.cur) return _settings.cur;
  return 'GBP';
}

/* ─── INVOICE NUMBERING ─── */
let _numCfg = {pfx:'INV', sep:'-', pad:4, start:1};
const lsGet = k => parseInt(localStorage.getItem('bk_'+k)||'0');
const lsSet = (k,v) => localStorage.setItem('bk_'+k, v);
function peekNum() {
  // Shows what the NEXT invoice number will be — does NOT increment
  const cur = lsGet('invN');
  const next = Math.max(_numCfg.start, cur + 1);
  return _numCfg.pfx + _numCfg.sep + String(next).padStart(_numCfg.pad, '0');
}
function genNum() {
  // Called ONLY on Save — increments the counter
  const cur = lsGet('invN');
  const next = Math.max(_numCfg.start, cur + 1);
  lsSet('invN', next);
  return _numCfg.pfx + _numCfg.sep + String(next).padStart(_numCfg.pad, '0');
}
function updateNumPreview() {
  const el = document.getElementById('num-preview');
  if (el) el.textContent = _numCfg.pfx + _numCfg.sep + String(_numCfg.start).padStart(_numCfg.pad, '0');
}

/* ─── DOM HELPERS ─── */
const $ = id => document.getElementById(id);
const gv = id => ($( id)||{}).value||'';
const sv = (id,v) => { const e=$(id); if(e && v!=null) e.value = v||''; };
const eh = s => String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');


/* ─── INLINE VALIDATION UI (Phase 2.5) ─── */
function _ivGetMsgEl(inputEl){
  if(!inputEl) return null;
  let msg = inputEl.parentElement?.querySelector(':scope > .iv-err');
  if(!msg){
    msg = document.createElement('div');
    msg.className = 'iv-err';
    inputEl.parentElement?.appendChild(msg);
  }
  return msg;
}
function showInlineError(inputEl, msg){
  if(!inputEl) return;
  const m = _ivGetMsgEl(inputEl);
  if(m){ m.textContent = msg || ''; }
  inputEl.classList.add('iv-bad');
  // Make sure user can see it
  inputEl.scrollIntoView({block:'center', behavior:'smooth'});
  setTimeout(()=>{ try{
    // Phase 2.5: inline validation clear + accessibility labels
    wireInlineClear(document);
    autoAriaLabels();
 inputEl.focus({preventScroll:true}); }catch(e){} }, 120);
}
function clearInlineError(inputEl){
  if(!inputEl) return;
  inputEl.classList.remove('iv-bad');
  const m = inputEl.parentElement?.querySelector(':scope > .iv-err');
  if(m) m.textContent = '';
}
function wireInlineClear(scope=document){
  scope.querySelectorAll('input, textarea, select').forEach(el=>{
    el.addEventListener('input', ()=>clearInlineError(el), {passive:true});
    el.addEventListener('change', ()=>clearInlineError(el), {passive:true});
  });
}


function autoAriaLabels(){
  // Add aria-label to icon-only buttons/divs when missing.
  document.querySelectorAll('button, [role="button"], .btn-icon').forEach(el=>{
    if(el.hasAttribute('aria-label')) return;
    const txt = (el.getAttribute('title') || el.getAttribute('data-label') || el.textContent || '').trim();
    // Ignore if it already has meaningful text (normal buttons)
    const iconOnly = txt.length <= 2 || /^[✕×✖❌✅🔍⬇⬆➕➖🗑️]+$/.test(txt);
    if(!iconOnly) return;
    // Try infer from nearby context
    let label = el.getAttribute('title') || el.getAttribute('data-label');
    if(!label){
      const cls = el.className || '';
      if(/close|x|dismiss/.test(cls)) label='Close';
      else if(/print/.test(cls)) label='Print';
      else if(/save/.test(cls)) label='Save';
      else if(/del|trash|remove/.test(cls)) label='Delete';
      else if(/add|plus/.test(cls)) label='Add';
      else label='Action';
    }
    el.setAttribute('aria-label', label);
  });
}


/* ─── CUSTOM DATE PICKER ─── */
const DPS = {};
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const WDAYS  = ['Su','Mo','Tu','We','Th','Fr','Sa'];

function initDP(calId, inputId, onChangeFn) {
  const n = new Date();
  DPS[calId] = {y: n.getFullYear(), m: n.getMonth(), sel: null, inputId, onChangeFn};
  renderDP(calId);
}
function renderDP(calId) {
  const s = DPS[calId], cal = $(calId);
  if (!cal) return;
  const firstDay = new Date(s.y, s.m, 1).getDay();
  const daysInM  = new Date(s.y, s.m+1, 0).getDate();
  const today    = new Date();
  let cells = '';
  for (let i=0; i<firstDay; i++) cells += '<div class="dp-day"></div>';
  for (let d=1; d<=daysInM; d++) {
    const iT = today.getFullYear()===s.y && today.getMonth()===s.m && today.getDate()===d;
    const iS = s.sel && s.sel.getFullYear()===s.y && s.sel.getMonth()===s.m && s.sel.getDate()===d;
    cells += `<div class="dp-day${iT?' today':''}${iS?' sel':''}" onclick="dpPick('${calId}',${s.y},${s.m},${d})">${d}</div>`;
  }
  cal.innerHTML = `
    <div class="dp-hdr">
      <button onclick="dpMove('${calId}',-1);event.stopPropagation()">‹</button>
      <span class="dp-title">${MONTHS[s.m]} ${s.y}</span>
      <button onclick="dpMove('${calId}',1);event.stopPropagation()">›</button>
    </div>
    <div class="dp-wd">${WDAYS.map(d=>`<span>${d}</span>`).join('')}</div>
    <div class="dp-grid">${cells}</div>`;
}
function dpMove(id, dir) {
  const s = DPS[id]; s.m += dir;
  if (s.m > 11) { s.m = 0; s.y++; }
  if (s.m < 0)  { s.m = 11; s.y--; }
  renderDP(id);
}
function dpPick(id, y, m, d) {
  const s = DPS[id]; s.sel = new Date(y, m, d);
  const str = d + ' ' + MONTHS[m].slice(0,3) + ' ' + y;
  sv(s.inputId, str); $(id).classList.remove('on'); renderDP(id);
  if (s.onChangeFn) s.onChangeFn(s.sel, str);
  rd();
}
function dpSetDate(id, val) {
  if (!val) return;
  const s = DPS[id]; if (!s) return;
  let d;
  if (val instanceof Date) { d = val; }
  else {
    const p = String(val).match(/(\d+)\s+(\w+)\s+(\d{4})/);
    if (!p) return;
    const mi = MONTHS.findIndex(mn => mn.startsWith(p[2]));
    if (mi < 0) return;
    d = new Date(parseInt(p[3]), mi, parseInt(p[1]));
  }
  s.sel = d; s.y = d.getFullYear(); s.m = d.getMonth();
  sv(s.inputId, d.getDate() + ' ' + MONTHS[d.getMonth()].slice(0,3) + ' ' + d.getFullYear());
  renderDP(id);
}
function toggleDP(id) {
  document.querySelectorAll('.dp-cal').forEach(c => { if (c.id !== id) c.classList.remove('on'); });
  $(id)?.classList.toggle('on');
}
document.addEventListener('click', e => {
  if (!e.target.closest('.dp-wrap')) document.querySelectorAll('.dp-cal').forEach(c => c.classList.remove('on'));
});

/* ─── APP STATE ─── */
let eState = { id: null, logo: null, docTheme: 'blue', layout: 1, rows: [{desc:'',qty:1,price:0,tax:0}] };

/* ─── FAST CACHES (Phase 2.5) ───
   Keeps autocomplete snappy by avoiding repeated IndexedDB reads.
   Invalidate when items/clients change or after restore.
*/
const _cache = {
  items: null,
  clients: null,
  itemsAt: 0,
  clientsAt: 0,
  ttlMs: 60_000 // 60s
};
async function getItemsCached(force=false){
  const now = Date.now();
  if(!force && _cache.items && (now - _cache.itemsAt) < _cache.ttlMs) return _cache.items;
  _cache.items = await dbAll('items');
  _cache.itemsAt = now;
  return _cache.items;
}
async function getClientsCached(force=false){
  const now = Date.now();
  if(!force && _cache.clients && (now - _cache.clientsAt) < _cache.ttlMs) return _cache.clients;
  _cache.clients = await dbAll('clients');
  _cache.clientsAt = now;
  return _cache.clients;
}
function invalidateCache(kind='all'){
  if(kind==='items' || kind==='all'){ _cache.items=null; _cache.itemsAt=0; }
  if(kind==='clients' || kind==='all'){ _cache.clients=null; _cache.clientsAt=0; }
}


let editClientId = null, editItemId = null;
let _settings = {};

/* ─── NAVIGATION ─── */
function toggleSidebar(force){
  const open = (force===undefined) ? !document.body.classList.contains('sb-open') : !!force;
  document.body.classList.toggle('sb-open', open);
}
window.addEventListener('keydown', e => { if(e.key==='Escape') toggleSidebar(false); });
window.addEventListener('resize',  () => { if(window.innerWidth>920) toggleSidebar(false); });

/* ── One-time backup data-loss warning ── */
async function _checkBackupWarning() {
  // Only show once per browser install
  if (localStorage.getItem('ik_backup_warned')) return;
  // Only show if they actually have data to lose
  const invs = await dbAll('invoices');
  if (!invs || invs.length < 1) return;
  // Show a prominent inline banner in Settings backup section
  const sec = document.querySelector('.bk-sec');
  if (!sec) return;
  // Don't add twice
  if (document.getElementById('bk-warn-banner')) return;
  const banner = document.createElement('div');
  banner.id = 'bk-warn-banner';
  banner.style.cssText = 'background:#fffbeb;border:1.5px solid #d97706;border-radius:8px;padding:12px 14px;margin-bottom:12px;display:flex;align-items:flex-start;gap:10px;';
  banner.innerHTML = `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#d97706" stroke-width="2" style="flex-shrink:0;margin-top:1px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    <div style="flex:1;">
      <div style="font-size:.82rem;font-weight:700;color:#92400e;margin-bottom:3px;">Back up your data regularly</div>
      <div style="font-size:.76rem;color:#78350f;line-height:1.55;">
        You have <strong>${invs.length} invoice${invs.length===1?'':'s'}</strong> stored in this browser.
        Clearing browser data or switching devices will erase everything permanently.
        Export a backup now to keep your data safe.
      </div>
      <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
        <button onclick="doBackup();localStorage.setItem('ik_backup_warned','1');document.getElementById('bk-warn-banner').remove();"
          style="padding:6px 14px;background:#d97706;color:#fff;border:none;border-radius:6px;font-size:.76rem;font-weight:700;cursor:pointer;font-family:inherit;">
          ⬇ Export Backup Now
        </button>
        <button onclick="localStorage.setItem('ik_backup_warned','1');document.getElementById('bk-warn-banner').remove();"
          style="padding:6px 12px;background:none;border:1px solid #d97706;color:#92400e;border-radius:6px;font-size:.74rem;cursor:pointer;font-family:inherit;">
          I understand, dismiss
        </button>
      </div>
    </div>`;
  sec.insertBefore(banner, sec.firstChild);
}

function go(id) {
  // Dirty-state guard: if leaving editor with unsaved changes, confirm
  const cur = document.querySelector('.screen.on')?.id || '';
  if(__dirty && cur === 's-editor' && id !== 's-editor'){
    const ok = confirm('You have unsaved changes in the editor. Leave without saving?');
    if(!ok) return;
  }

  document.querySelectorAll('.screen, .sflex').forEach(el => {
    el.style.display = 'none'; el.classList.remove('on');
  });
  if (id === 'editor') {
    const editor = document.getElementById('s-editor');
    if (editor) { editor.style.display = 'flex'; editor.classList.add('on'); setTimeout(scaleDocPreview, 150); }
    document.querySelectorAll('.sbi').forEach(s => s.classList.remove('on'));
    if (window.innerWidth <= 920) toggleSidebar(false);
    return;
  }
  const targetScreen = document.getElementById('s-' + id);
  if (targetScreen) { targetScreen.style.display = 'block'; targetScreen.classList.add('on'); }
  document.querySelectorAll('.sbi').forEach(s => s.classList.remove('on'));
  const sidebarBtn = document.getElementById('sbi-' + id);
  if (sidebarBtn) sidebarBtn.classList.add('on');
  if (id === 'dash')     refreshDash();
  if (id === 'invoices') renderInvoices();
  if (id === 'clients')  renderClients();
  if (id === 'items')    renderItems();
  if (id === 'receipts') renderReceipts();
  if (id === 'settings') { loadSettings(); _checkBackupWarning(); }
  if (window.innerWidth <= 920) toggleSidebar(false);
}

/* ── Getting Started sidebar visibility ─────────────────────────
   Called on init, after onboarding complete, and after full reset.
   Hidden once onboarding is done; shown again if data is cleared.
──────────────────────────────────────────────────────────────── */
function _updateGettingStarted() {
  const el = document.getElementById('sbi-getting-started');
  if (!el) return;
  const done = localStorage.getItem('ik_onboarded') === '1';
  if (done) {
    el.classList.add('gs-hidden');
    el.setAttribute('aria-hidden', 'true');
  } else {
    el.classList.remove('gs-hidden');
    el.removeAttribute('aria-hidden');
  }
}

/* ─── THEMES ─── */
function setDefaultDocTheme(t, btn) {
  _settings.docTheme = t; saveSetting();
  document.querySelectorAll('.tpill[data-at]').forEach(p => p.classList.toggle('on', p.dataset.at === t));
  const sel = $('s-doctheme'); if (sel) sel.value = t;
}
const themeDefaults = {
  blue:    {p:'#1a3a6b', a:'#e8a020'},
  emerald: {p:'#005c37', a:'#f5c518'},
  obsidian:{p:'#111111', a:'#f5c518'},
  pearl:   {p:'#3d3530', a:'#c9a84c'},
};
function setDocTheme(t, btn) {
  eState.docTheme = t;
  document.querySelectorAll('.tpill').forEach(p => p.classList.toggle('on', p.dataset.t===t));
  const d = themeDefaults[t] || themeDefaults.blue;
  sv('col-p', d.p); sv('col-a', d.a);
  applyDocColors(); rd();
}
function setLayout(n) {
  eState.layout = n;
  document.querySelectorAll('.lpill').forEach(p => p.classList.toggle('on', +p.dataset.l===n));
  rd();
}
function applyDocColors() {
  const p = gv('col-p'), a = gv('col-a');
  $('sw-p-bg').style.background = p; $('sw-a-bg').style.background = a;
  const doc = $('doc');
  doc.style.setProperty('--dP', p); doc.style.setProperty('--dA', a);
}

/* ─── LOGO HANDLING ─── */
function applyLogoUI(data, imgId, txtId, rmvId) {
  if (data) { $(imgId).src=data; $(imgId).style.display='block'; $(txtId).style.display='none'; $(rmvId).style.display='block'; }
  else { $(imgId).style.display='none'; $(txtId).style.display='block'; $(rmvId).style.display='none'; }
}
function readFileTo(file, cb) {
  const r = new FileReader(); r.onload = e => cb(e.target.result); r.readAsDataURL(file);
}
function handleLogo(e) {
  const f = e.target.files[0]; if (!f) return;
  readFileTo(f, async d => {
    eState.logo = d;
    applyLogoUI(d,'logo-img','logo-txt-wrap','logo-rmv');
    rd();
    // Persist logo to settings so it appears everywhere
    _settings.logo = d;
    try { await saveSetting(); applyLogoUI(d,'s-logo-img','s-logo-txt','s-logo-rmv'); } catch(e) {}
  });
}
function removeLogo(e) {
  e.stopPropagation(); eState.logo = null;
  applyLogoUI(null,'logo-img','logo-txt-wrap','logo-rmv');
  const inp = $('logo-zone') && $('logo-zone').querySelector('input');
  if (inp) inp.value = '';
  rd();
  // Sync removal to settings
  _settings.logo = null;
  try { saveSetting(); applyLogoUI(null,'s-logo-img','s-logo-txt','s-logo-rmv'); } catch(e) {}
}
function handleSettingsLogo(e) {
  const f = e.target.files[0]; if (!f) return;
  readFileTo(f, async d => {
    _settings.logo = d; await saveSetting();
    applyLogoUI(d,'s-logo-img','s-logo-txt','s-logo-rmv');
    toast('Default logo saved ✓','ok');
  });
}
function removeSettingsLogo(e) {
  e.preventDefault();
  e.stopPropagation();
  _settings.logo = null;
  saveSetting();
  applyLogoUI(null, 's-logo-img', 's-logo-txt', 's-logo-rmv');
  // Clear the file input so picking the same file again still fires onchange
  const fi = document.getElementById('s-logo-file');
  if (fi) fi.value = '';
  toast('Default logo removed', 'in');
}
function handleObLogo(e) {
  const f = e.target.files[0]; if (!f) return;
  readFileTo(f, d => { _obLogo = d; applyLogoUI(d,'ob-logo-img','ob-logo-txt','ob-logo-rmv'); });
}
function removeObLogo(e) {
  e.stopPropagation(); _obLogo = null;
  applyLogoUI(null,'ob-logo-img','ob-logo-txt','ob-logo-rmv');
  $('lz-ob').querySelector('input').value = '';
}

/* ─── LINE ITEMS ─── */
function renderRows() {
  const c = $('item-rows'); c.innerHTML = '';
  eState.rows.forEach((row, i) => {
    const d = document.createElement('div'); d.className = 'ir';
    d.innerHTML = `
      <div style="position:relative">
        <input type="text" placeholder="Item description" value="${eh(row.desc)}"
          maxlength="150"
          oninput="eState.rows[${i}].desc=this.value;clearLineItemsError();rd();showIAC(${i},this.value)"
          onfocus="showIAC(${i},this.value)" onblur="setTimeout(()=>hideIAC(${i}),180)">
        <div class="acd" id="iac-${i}"></div>
      </div>
      <input type="number" value="${row.qty}" min="1" step="1"
        oninput="eState.rows[${i}].qty=Math.max(1,parseInt(this.value)||1);rd()">
      <input type="number" value="${row.price}" min="0" step="0.01" placeholder="0.00"
        oninput="eState.rows[${i}].price=parseFloat(this.value)||0;rd()">
      <button class="ir-del" onclick="delRow(${i})">✕</button>`;
    c.appendChild(d);
  });
}
function addRow()  { clearLineItemsError(); eState.rows.push({desc:'',qty:1,price:0,tax:0}); renderRows(); rd(); }
function delRow(i) { clearLineItemsError(); eState.rows.splice(i,1); renderRows(); rd(); }


function showLineItemsError(msg){
  const wrap = $('item-rows');
  if(!wrap) return;
  let e = $('item-rows-err');
  if(!e){
    e = document.createElement('div');
    e.id = 'item-rows-err';
    e.className = 'iv-err iv-err-block';
    wrap.parentElement?.insertBefore(e, wrap.nextSibling);
  }
  e.textContent = msg || '';
  wrap.scrollIntoView({block:'center', behavior:'smooth'});
}
function clearLineItemsError(){
  const e = $('item-rows-err');
  if(e) e.textContent = '';
}

async function showIAC(idx, val) {
  const drop = $('iac-'+idx);
  if (!val) { drop.classList.remove('on'); return; }
  const all = await getItemsCached();
  const cur = gv('e-cur') || 'GBP';
  const m = all.filter(it => it.name.toLowerCase().includes(val.toLowerCase())).slice(0,6);
  if (!m.length) { drop.classList.remove('on'); return; }
  drop.innerHTML = m.map(it => `
    <div class="aci" onclick="applyIAC(${idx},'${eh(it.name)}',${it.price||0})">
      <strong>${eh(it.name)}</strong>
      <span>${fmt(it.price||0, cur)}${it.desc ? ' · '+eh(it.desc) : ''}</span>
    </div>`).join('');
  drop.classList.add('on');
}
function hideIAC(idx) { $('iac-'+idx)?.classList.remove('on'); }
function applyIAC(idx, name, price) {
  const real = name.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
  eState.rows[idx] = {desc:real, qty:eState.rows[idx].qty||1, price, tax:0};
  renderRows(); rd();
}

/* ─── CLIENT AUTOCOMPLETE ─── */
async function cAC(val) {
  const drop = $('c-drop');
  if (!val) { drop.classList.remove('on'); return; }
  const all = await getClientsCached();
  const m = all.filter(c => c.name.toLowerCase().includes(val.toLowerCase())).slice(0,6);
  if (!m.length) { drop.classList.remove('on'); return; }
  drop.innerHTML = m.map(c => `
    <div class="aci" onclick="fillClient(${c.id})">
      <strong>${eh(c.name)}</strong>
      <span>${c.email||''}${c.phone?' · '+c.phone:''}</span>
    </div>`).join('');
  drop.classList.add('on');
}
document.addEventListener('click', e => { if (!e.target.closest('.acw')) $('c-drop')?.classList.remove('on'); });
async function fillClient(id) {
  const c = await dbGet('clients', id); if (!c) return;
  sv('e-cname',c.name); sv('e-caddr',c.address||'');
  sv('e-cphone',c.phone||''); sv('e-cemail',c.email||'');
  if (c.currency) sv('e-cur', c.currency);
  $('c-drop').classList.remove('on'); rd();
}
async function saveCurrentClient() {
  const name = gv('e-cname'); if (!name) { toast('Enter a client name first','er'); return; }
  const all = await dbAll('clients');
  if (all.find(c => c.name.toLowerCase()===name.toLowerCase())) { toast('Client already saved','er'); return; }
  await dbPut('clients', {name, email:gv('e-cemail'), phone:gv('e-cphone'), address:gv('e-caddr'), country:'', currency:gv('e-cur')});
  await updateCounts(); toast('Client saved ✓','ok');
}

/* ─── RENDER INVOICE DOCUMENT ─── */
function _bizBlock(bizName, bizTag, bizAddr, bizPh, bizEm, bizReg, nameClass, addrClass) {
  // Returns stacked business identity HTML
  const nc = nameClass || 'biz-name';
  const ac = addrClass || '';
  let html = '';
  if (bizName) html += `<div class="${nc} biz-name">${eh(bizName)}</div>`;
  if (bizTag)  html += `<div class="biz-tag ${ac}">${eh(bizTag)}</div>`;
  if (bizAddr) html += `<div class="biz-addr ${ac}">${eh(bizAddr).replace(/\n/g,'<br>')}</div>`;
  if (bizPh)   html += `<div class="biz-phone ${ac}">${eh(bizPh)}</div>`;
  if (bizEm)   html += `<div class="biz-email ${ac}">${eh(bizEm)}</div>`;
  if (bizReg)  html += `<div class="biz-reg ${ac}">Reg: ${eh(bizReg)}</div>`;
  return `<div class="biz-block">${html}</div>`;
}


// ─────────────────────────────────────────────────────────────
// Performance: throttle rd() rendering to 1/frame to avoid lag on rapid typing
// ─────────────────────────────────────────────────────────────
let __rdRAF = 0;
function rd(docLabel){
  if(__rdRAF) cancelAnimationFrame(__rdRAF);
  __rdRAF = requestAnimationFrame(()=>{ __rdRAF = 0; _rdNow(docLabel); });
}

function _rdNow(docLabel) {
  // docLabel defaults to 'Invoice' — pass 'RECEIPT' to render a receipt header
  const label = docLabel || 'Invoice';
  const t = eState.docTheme, doc = $('doc');
  const lay = eState.layout || 1;
  doc.className = `dt-${t} lay${lay}`;
  applyDocColors();

  const cur     = gv('e-cur') || 'GBP';
  const bizName = gv('e-bname') || 'Your Business Name';
  const bizTag  = gv('e-btag')||'', bizAddr = gv('e-baddr')||'', bizPh = gv('e-bphone')||'', bizEm = gv('e-bemail')||'', bizReg = gv('e-breg')||'';
  const invNum  = gv('e-num') || 'INV-0001';
  const d1 = gv('e-d1')||'—', d2 = gv('e-d2')||'—';
  const terms = gv('e-terms')||'', status = gv('e-status')||'';
  const cName = gv('e-cname')||'Client Name', cAddr = gv('e-caddr')||'', cPh = gv('e-cphone')||'', cEm = gv('e-cemail')||'';
  const disc = parseFloat(gv('e-disc'))||0, vat = parseFloat(gv('e-vat'))||0;
  const vatOn = $('e-vaton')?.checked === true;
  const bank = gv('e-bank')||'', aname = gv('e-aname')||'', anum = gv('e-anum')||'', sort = gv('e-sort')||'', notes = gv('e-notes')||'';

  const init = bizName.trim()[0]?.toUpperCase() || 'B';
  const iStyleMap = {
    blue:    'font-size:1.5rem;font-weight:900;color:rgba(255,255,255,.42);',
    emerald: 'font-size:1.5rem;font-weight:900;color:rgba(255,255,255,.4);',
    obsidian:'font-size:1.4rem;font-weight:800;color:rgba(255,255,255,.22);',
    pearl:   'font-size:2.2rem;font-weight:300;color:#3d3530;',
  };
  const logoH = eState.logo
    ? `<img src="${eState.logo}" alt="${eh(bizName)}" style="max-width:100%;max-height:100%;object-fit:contain;">`
    : `<span style="${iStyleMap[t]||iStyleMap.blue}line-height:1;">${init}</span>`;

  const stH = ['paid','overdue'].includes(status)
    ? `<div class="dstamp st-${status}">${status.toUpperCase()}</div>` : '';

  let sub = 0;
  // Only count and render rows that have content (desc or non-zero price)
  const calced = eState.rows
    .filter(r => r.desc.trim() !== '' || r.price > 0)
    .map(r => { const line = r.qty * r.price; sub += line; return {...r, line}; });
  const discAmt = sub * disc/100;
  const after   = sub - discAmt;
  const vatAmt  = vatOn ? after * vat/100 : 0;
  const total   = after + vatAmt;

  const itemRows = calced.map(r => `
    <tr>
      <td>${eh(r.desc)||'<span style="color:#ddd">—</span>'}</td>
      <td class="r mono">${r.qty}</td>
      <td class="r mono">${fmt(r.price,cur)}</td>
      <td class="r mono">${fmt(r.line,cur)}</td>
    </tr>`).join('');

  const discRow = disc>0 ? `<div class="dtrow"><span class="tk">Discount (${disc}%)</span><span class="tv">-${fmt(discAmt,cur)}</span></div>` : '';
  const vatRow  = vatOn&&vat>0 ? `<div class="dtrow"><span class="tk">Tax (${vat}%)</span><span class="tv">${fmt(vatAmt,cur)}</span></div>` : '';
  const totalsHTML = `<div class="dtot">
    <div class="dtrow"><span class="tk">Subtotal</span><span class="tv">${fmt(sub,cur)}</span></div>
    ${discRow}${vatRow}
    <div class="dgrand"><span class="gk">Total Due</span><span class="gv">${fmt(total,cur)}</span></div>
  </div>`;
  const paymentHTML = bank||aname||anum ? `
    <div class="dflbl">Payment Details</div>
    ${bank  ?`<div class="dbrow"><span class="dbk">Bank:</span><span class="dbv">${eh(bank)}</span></div>`:''}
    ${aname ?`<div class="dbrow"><span class="dbk">Acct Name:</span><span class="dbv">${eh(aname)}</span></div>`:''}
    ${anum  ?`<div class="dbrow"><span class="dbk">Acct No.:</span><span class="dbv">${eh(anum)}</span></div>`:''}
    ${sort  ?`<div class="dbrow"><span class="dbk">Sort/IBAN:</span><span class="dbv">${eh(sort)}</span></div>`:''}
  ` : `<div class="dflbl">Contact</div><div style="font-size:.78rem;color:#aaa;">${eh(bizEm)}</div>`;

  if      (lay===1) _rdClassic (t,logoH,stH,bizName,bizTag,bizAddr,bizPh,bizEm,bizReg,invNum,d1,d2,terms,cName,cAddr,cPh,cEm,itemRows,totalsHTML,paymentHTML,notes,label);
  else if (lay===2) _rdSplit   (t,logoH,stH,bizName,bizTag,bizAddr,bizPh,bizEm,bizReg,invNum,d1,d2,terms,cName,cAddr,cPh,cEm,itemRows,totalsHTML,paymentHTML,notes,label);
  else if (lay===3) _rdMinimal (t,logoH,stH,bizName,bizTag,bizAddr,bizPh,bizEm,bizReg,invNum,d1,d2,terms,cName,cAddr,cPh,cEm,itemRows,totalsHTML,paymentHTML,notes,label);
  else if (lay===4) _rdBold    (t,logoH,stH,bizName,bizTag,bizAddr,bizPh,bizEm,bizReg,invNum,d1,d2,terms,cName,cAddr,cPh,cEm,itemRows,totalsHTML,paymentHTML,notes,label);

  requestAnimationFrame(scaleDocPreview);
}

/* ── LAYOUT 1 — CLASSIC ── */
function _rdClassic(t,logoH,stH,bizName,bizTag,bizAddr,bizPh,bizEm,bizReg,invNum,d1,d2,terms,cName,cAddr,cPh,cEm,itemRows,totalsHTML,paymentHTML,notes,label) {
  $('dh').innerHTML = `
    <div class="dlb">${logoH}</div>
    <div class="dbi">
      ${_bizBlock(bizName,bizTag,bizAddr,bizPh,bizEm,'','dbn','dbc')}
    </div>
    <div class="dbd"><div class="dtw">${label}</div><div class="dtn">${eh(invNum)}</div></div>${stH}`;
  $('ds').className = t==='obsidian' ? '' : 'ds';
  $('dbody').innerHTML = `
    <div class="dmeta">
      <div>
        <div class="d-lbl">Bill To</div>
        <div class="dcn">${eh(cName)}</div>
        <div class="dcd">${eh(cAddr.split('\n').join('<br>'))}${cPh?'<br>'+eh(cPh):''}${cEm?'<br>'+eh(cEm):''}</div>
      </div>
      <div class="ddate-block">
        <div class="drow"><span class="dk">Invoice No.</span><span class="dv">${eh(invNum)}</span></div>
        <div class="drow"><span class="dk">Issue Date</span><span class="dv">${eh(d1)}</span></div>
        <div class="drow"><span class="dk">Due Date</span><span class="dv">${eh(d2)}</span></div>
        ${terms?`<div class="drow"><span class="dk">Terms</span><span class="dv">${eh(terms)}</span></div>`:''}
      </div>
    </div>
    <table class="dit"><thead><tr>
      <th>Description</th><th class="r">Qty</th><th class="r">Unit Price</th><th class="r">Amount</th>
    </tr></thead><tbody>${itemRows}</tbody></table>
    <div class="dtw-wrap">${totalsHTML}</div>
    <div class="dfoot"><div>${paymentHTML}</div><div><div class="dflbl">Notes</div><div class="dnotes">${eh(notes)}</div></div></div>`;
  $('dbot').innerHTML = `<div class="dty">Thank you for your business!</div>${bizReg?`<div class="dreg">Reg. No. ${eh(bizReg)}</div>`:''}`;
}

/* ── LAYOUT 2 — SPLIT (FIX #6: class names corrected to match CSS) ── */
function _rdSplit(t,logoH,stH,bizName,bizTag,bizAddr,bizPh,bizEm,bizReg,invNum,d1,d2,terms,cName,cAddr,cPh,cEm,itemRows,totalsHTML,paymentHTML,notes,label) {
  $('dh').innerHTML = '';
  $('ds').className = '';
  $('dbody').innerHTML = `
    <div class="l2-wrap">
      <div class="l2-side">
        <div class="l2-logo-box">${logoH}</div>
        ${_bizBlock(bizName,bizTag,bizAddr,bizPh,bizEm,'','l2-bname','l2-binfo')}
        <div class="l2-divider"></div>
        <div class="l2-mlabel">Invoice No.</div><div class="l2-mval">${eh(invNum)}</div>
        <div class="l2-mlabel">Issue Date</div><div class="l2-mval">${eh(d1)}</div>
        <div class="l2-mlabel">Due Date</div><div class="l2-mval">${eh(d2)}</div>
        ${terms?`<div class="l2-mlabel">Terms</div><div class="l2-mval">${eh(terms)}</div>`:''}
        <div class="l2-divider"></div>
        <div class="l2-mlabel">Bill To</div>
        <div class="l2-cname">${eh(cName)}</div>
        <div class="l2-binfo">${eh(cAddr).replace(/\n/g,'<br>')}${cPh?'<br>'+eh(cPh):''}${cEm?'<br>'+eh(cEm):''}</div>
        ${stH}
      </div>
      <div class="l2-main">
        <div class="l2-invword">${label.toUpperCase()}</div>
        <table class="dit"><thead><tr>
          <th>Description</th><th class="r">Qty</th><th class="r">Price</th><th class="r">Amount</th>
        </tr></thead><tbody>${itemRows}</tbody></table>
        <div class="dtw-wrap">${totalsHTML}</div>
        <div class="l2-footer"><div>${paymentHTML}</div><div><div class="dflbl">Notes</div><div class="dnotes">${eh(notes)}</div></div></div>
        <div class="l2-thanks">Thank you for your business!${bizReg?' · Reg. '+eh(bizReg):''}</div>
      </div>
    </div>`;
  $('dbot').innerHTML = '';
}

/* ── LAYOUT 3 — MINIMAL (FIX #7: class names corrected to match CSS) ── */
function _rdMinimal(t,logoH,stH,bizName,bizTag,bizAddr,bizPh,bizEm,bizReg,invNum,d1,d2,terms,cName,cAddr,cPh,cEm,itemRows,totalsHTML,paymentHTML,notes,label) {
  // Layout 3 — Modern Premium (Navy/Gold)
  $('dh').innerHTML = '';
  $('ds').className = '';
  $('dbody').innerHTML = `
    <div class="l3-hero">
      <div class="l3-biz-col">
        <div class="l3-logo-box">${logoH}</div>
        <div class="l3-biz-text">
          ${_bizBlock(bizName,bizTag,bizAddr,bizPh,bizEm,'','l3-bname','l3-bcontact')}
        </div>
      </div>
      <div class="l3-inv-col">
        <div class="l3-invlabel">${label.toUpperCase()}</div>
        <div class="l3-invnum">${eh(invNum)}</div>
        <div class="l3-invdate">
          Issued: ${eh(d1)}<br>Due: ${eh(d2)}
          ${terms?`<br>Terms: ${eh(terms)}`:''}
        </div>
        ${stH}
      </div>
    </div>
    <div class="l3-gold-bar"></div>
    <div class="l3-body">
      <div class="l3-meta-row">
        <div>
          <div class="l3-billto-lbl">Bill To</div>
          <div class="l3-cname">${eh(cName)}</div>
          <div class="l3-cinfo">${eh(cAddr).replace(/\n/g,'<br>')}${cPh?'<br>'+eh(cPh):''}${cEm?'<br>'+eh(cEm):''}</div>
        </div>
        <div class="l3-dates-block">
          <div class="l3-drow"><span class="l3-dk">Invoice No.</span><span class="l3-dv">${eh(invNum)}</span></div>
          <div class="l3-drow"><span class="l3-dk">Issue Date</span><span class="l3-dv">${eh(d1)}</span></div>
          <div class="l3-drow"><span class="l3-dk">Due Date</span><span class="l3-dv">${eh(d2)}</span></div>
          ${terms?`<div class="l3-drow"><span class="l3-dk">Terms</span><span class="l3-dv">${eh(terms)}</span></div>`:''}
        </div>
      </div>
      <div style="margin-bottom:16px;">
        <table class="dit"><thead><tr>
          <th>Description</th><th class="r">Qty</th><th class="r">Unit Price</th><th class="r">Amount</th>
        </tr></thead><tbody>${itemRows}</tbody></table>
      </div>
      <div class="l3-totals-row">${totalsHTML}</div>
      <div class="l3-foot-row">
        <div>${paymentHTML}</div>
        <div><div class="dflbl">Notes</div><div class="dnotes">${eh(notes)}</div></div>
      </div>
    </div>`;
  $('dbot').innerHTML = `
    <div class="l3-bot-bar">
      <span class="l3-thanks">Thank you for your business!</span>
      <span class="l3-reg">${bizReg?'Reg. No. '+eh(bizReg):''}</span>
    </div>`;
}

/* ── LAYOUT 4 — BOLD (FIX #8: class names corrected to match CSS) ── */
function _rdBold(t,logoH,stH,bizName,bizTag,bizAddr,bizPh,bizEm,bizReg,invNum,d1,d2,terms,cName,cAddr,cPh,cEm,itemRows,totalsHTML,paymentHTML,notes,label) {
  // Layout 4 — Classic Corporate
  $('dh').innerHTML = '';
  $('ds').className = '';
  $('dbody').innerHTML = `
    <div class="l4-corp-head">
      <div class="l4-corp-left">
        <div class="l4-corp-logo">${logoH}</div>
        <div>
          ${_bizBlock(bizName,bizTag,bizAddr,bizPh,bizEm,'','l4-corp-bname','l4-corp-bcontact')}
        </div>
      </div>
      <div class="l4-corp-right">
        <div class="l4-corp-doctitle">${label.toUpperCase()}</div>
        <div class="l4-corp-num">${eh(invNum)}</div>
        <div class="l4-corp-dates">Issued: ${eh(d1)}<br>Due: ${eh(d2)}</div>
        ${stH}
      </div>
    </div>
    <div class="l4-corp-meta">
      <div>
        <div class="l4-corp-billto-lbl">Bill To</div>
        <div class="l4-corp-cname">${eh(cName)}</div>
        <div class="l4-corp-cinfo">${eh(cAddr).replace(/\n/g,'<br>')}${cPh?'<br>'+eh(cPh):''}${cEm?'<br>'+eh(cEm):''}</div>
      </div>
      ${terms?`<div class="l4-corp-terms">
        <div class="l4-corp-terms-lbl">Payment Terms</div>
        <div class="l4-corp-terms-val">${eh(terms)}</div>
      </div>`:''}
    </div>
    <div class="l4-corp-body">
      <table class="dit" style="margin-bottom:14px;"><thead><tr>
        <th>Description</th><th class="r">Qty</th><th class="r">Unit Price</th><th class="r">Amount</th>
      </tr></thead><tbody>${itemRows}</tbody></table>
      <div class="l4-corp-totals">${totalsHTML}</div>
    </div>
    <div class="l4-corp-footer">
      <div>${paymentHTML}</div>
      <div><div class="dflbl">Notes</div><div class="dnotes">${eh(notes)}</div></div>
    </div>`;
  $('dbot').innerHTML = `
    <div class="l4-corp-bot">
      <span class="l4-corp-thanks">Thank you for your business</span>
      <span class="l4-corp-reg">${bizReg?'Reg. No. '+eh(bizReg):''}</span>
    </div>`;
}

/* ─── OPEN NEW INVOICE ─── */
async function openNewInvoice() {
  setDirty(false);
  eState.id = null; eState.rows = [{desc:'',qty:1,price:0,tax:0}];
  eState.docTheme = _settings.docTheme || localStorage.getItem('bk_docTheme') || 'blue';
  const s = _settings;
  sv('e-bname',s.name||''); sv('e-btag',s.tag||''); sv('e-baddr',s.addr||'');
  sv('e-bphone',s.phone||''); sv('e-bemail',s.email||''); sv('e-breg',s.reg||'');
  sv('e-bank',s.bank||''); sv('e-aname',s.aname||''); sv('e-anum',s.anum||''); sv('e-sort',s.sort||'');
  sv('e-notes',s.notes||''); sv('e-vat',s.vat||'7.5'); sv('e-terms',s.terms||'Net 30 days');
  buildCurrencySelect($('e-cur'), { selected: s.cur||'GBP' });
  sv('e-disc','0'); sv('e-status','draft');
  sv('e-vat', _settings.vat||'0');
  const _vaton = document.getElementById('e-vaton'); if(_vaton) _vaton.checked = false;
  sv('e-cname',''); sv('e-caddr',''); sv('e-cphone',''); sv('e-cemail','');
  sv('e-num', peekNum()); // display only — counter increments on Save
  eState.logo = s.logo || null;
  eState.layout = _settings.layout || 1;
  applyLogoUI(eState.logo,'logo-img','logo-txt-wrap','logo-rmv');
  document.querySelectorAll('.lpill').forEach(p => p.classList.toggle('on', +p.dataset.l===eState.layout));
  const today = new Date(), due = new Date(today); due.setDate(due.getDate()+30);
  dpSetDate('dp1', today); dpSetDate('dp2', due);
  if ($('e-vaton')) $('e-vaton').checked = true;
  document.querySelectorAll('.tpill').forEach(p => p.classList.toggle('on', p.dataset.t===eState.docTheme));
  const td = themeDefaults[eState.docTheme] || themeDefaults.blue;
  sv('col-p', td.p); sv('col-a', td.a);
  renderRows(); rd(); go('editor');
}

/* ─── SAVE INVOICE ─── */
async function saveInvoice() {
  // For new invoices, commit the invoice number now (increment counter)
  let num = gv('e-num');
  if (!eState.id) {
    // This is a new invoice — assign and lock the number now
    num = genNum();
    sv('e-num', num);
  }
  if (!num) { toast('Enter an invoice number','er'); showInlineError($('e-num'), 'Invoice number is required.'); return; }
  const cn  = gv('e-cname'); if (!cn) { toast('Client name is required','er'); showInlineError($('e-cname'), 'Client name is required.'); return; }
  const hasRow = eState.rows.some(r => (r.desc||'').trim() !== '');
  if (!hasRow) { toast('Add at least one line item','er'); showLineItemsError('Add at least one line item (description).'); return; }
  const btn = document.querySelector('.editor-btns .btn-p');
  const orig = btn ? btn.textContent : '';
  if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
  try {
    const cur = gv('e-cur'), vatOn = $('e-vaton')?.checked!==false;
    const disc = parseFloat(gv('e-disc'))||0, vat = 0;
    let sub = 0; eState.rows.forEach(r => sub += r.qty*r.price);
    const after = sub*(1-disc/100), total = after+(vatOn?after*vat/100:0);
    const inv = {
      num, clientName:cn, issueDate:gv('e-d1'), dueDate:gv('e-d2'),
      status:gv('e-status'), currency:cur, total,
      bizName:gv('e-bname'), bizTag:gv('e-btag'), bizAddr:gv('e-baddr'),
      bizPhone:gv('e-bphone'), bizEmail:gv('e-bemail'), bizReg:gv('e-breg'),
      cAddr:gv('e-caddr'), cPhone:gv('e-cphone'), cEmail:gv('e-cemail'),
      bank:gv('e-bank'), accName:gv('e-aname'), accNum:gv('e-anum'), sort:gv('e-sort'),
      notes:gv('e-notes'), terms:gv('e-terms'), discount:gv('e-disc'), vat:gv('e-vat'), vatOn,
      docTheme:eState.docTheme, layout:eState.layout, logo:eState.logo, colP:gv('col-p'), colA:gv('col-a'),
      rows:eState.rows, savedAt:Date.now()
    };
    if (eState.id) inv.id = eState.id;
    const nid = await dbPut('invoices', inv);
    if (!eState.id) {
      eState.id = typeof nid === 'number' ? nid : Number(nid);
      inv.id = eState.id;
      await dbPut('invoices', inv);
    }
    await updateCounts(); toast('Invoice saved ✓','ok');
  } catch(e) { toast('Save failed — please try again','er'); }
  finally { if (btn) { btn.disabled = false; btn.textContent = orig; } }

  setDirty(false);
}

/* ─── LOAD INVOICE ─── */
async function loadInvoice(id) {
  const key = (typeof id === 'string' && /^\d+$/.test(id)) ? Number(id) : id;
  const inv = await dbGet('invoices', key);
  if (!inv) { toast('Invoice not found','er'); return; }
  eState.id = key; eState.logo = inv.logo || _settings.logo || null;
  eState.rows = inv.rows||[]; eState.docTheme = inv.docTheme||'blue'; eState.layout = inv.layout||1;
  sv('e-bname',inv.bizName); sv('e-btag',inv.bizTag||''); sv('e-baddr',inv.bizAddr||'');
  sv('e-bphone',inv.bizPhone||''); sv('e-bemail',inv.bizEmail||''); sv('e-breg',inv.bizReg||'');
  sv('e-num',inv.num);
  buildCurrencySelect($('e-cur'), { selected: inv.currency||'GBP' }); sv('e-terms',inv.terms||'');
  sv('e-status',inv.status||'draft'); sv('e-disc',inv.discount||'0'); sv('e-vat',inv.vat||'0');
  sv('e-bank',inv.bank||''); sv('e-aname',inv.accName||''); sv('e-anum',inv.accNum||''); sv('e-sort',inv.sort||'');
  sv('e-notes',inv.notes||''); sv('e-cname',inv.clientName||''); sv('e-caddr',inv.cAddr||'');
  sv('e-cphone',inv.cPhone||''); sv('e-cemail',inv.cEmail||'');
  if ($('e-vaton')) $('e-vaton').checked = inv.vatOn !== false;
  sv('col-p', inv.colP||(themeDefaults[eState.docTheme]||themeDefaults.blue).p);
  sv('col-a', inv.colA||(themeDefaults[eState.docTheme]||themeDefaults.blue).a);
  dpSetDate('dp1', inv.issueDate||null); dpSetDate('dp2', inv.dueDate||null);
  applyLogoUI(eState.logo,'logo-img','logo-txt-wrap','logo-rmv');
  document.querySelectorAll('.tpill').forEach(p => p.classList.toggle('on', p.dataset.t===eState.docTheme));
  document.querySelectorAll('.lpill').forEach(p => p.classList.toggle('on', +p.dataset.l===eState.layout));
  renderRows(); rd(); go('editor');
}

async function deleteInvoice(id) {
  confirm2('Delete Invoice','Permanently delete this invoice?', async () => {
    await dbDel('invoices', id); await updateCounts();
    toast('Invoice deleted','er'); renderInvoices(); refreshDash();
  });
}
async function duplicateInvoice() {
  await saveInvoice(); eState.id = null; sv('e-num', peekNum()); // display only — counter increments on Save sv('e-status','draft'); rd();
  toast('Duplicated — now editing copy','in');
}
function resetDraft() { openNewInvoice(); toast('Draft reset ✓','in'); }

/* ─── PDF EXPORT ─── */
let _html2pdfReady = null;
function loadHtml2pdf() {
  if (_html2pdfReady) return _html2pdfReady;
  if (typeof window.html2pdf === 'function') { _html2pdfReady = Promise.resolve(); return _html2pdfReady; }
  _html2pdfReady = new Promise((resolve, reject) => {
    if (typeof window.html2pdf === 'function') { resolve(); return; }
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    s.onload  = () => resolve();
    s.onerror = () => { _html2pdfReady = null; reject(new Error('load_failed')); };
    document.head.appendChild(s);
  });
  return _html2pdfReady;
}

/* FIX #10: scaleDocPreview corrected — use $('doc').scrollHeight not querySelector inside scaler */
function scaleDocPreview() {
  const ep = $('ep'), scaler = $('doc-scaler'), docEl = $('doc');
  if (!ep || !scaler || !docEl) return;
  const availW = ep.clientWidth - 44;
  const scale  = Math.min(1, availW / 794);
  scaler.style.transform = `scale(${scale})`;
  scaler.style.height = (docEl.scrollHeight * scale) + 'px';
}
window.addEventListener('resize', scaleDocPreview);

function computeDocScale(docEl, targetH=1123) {
  if (!docEl) return 1;
  const h = Math.max(docEl.scrollHeight, docEl.getBoundingClientRect().height);
  return Math.max(0.72, Math.min(1, h > targetH ? (targetH / h) : 1));
}
function withTempPrintScale(scale, fn) {
  const root = document.documentElement;
  root.style.setProperty('--bk-print-scale', String(scale));
  try { return fn(); } finally { root.style.setProperty('--bk-print-scale',''); }
}

async function printInvoice() {
  const docEl = document.getElementById('doc');
  if (!docEl) { toast('Open an invoice to print','er'); return; }
  await saveInvoice();
  const scale = computeDocScale(docEl, 1123);
  document.documentElement.style.setProperty('--bk-print-scale', String(scale));
  const prevAfter = window.onafterprint;
  window.onafterprint = function(){
    document.documentElement.style.setProperty('--bk-print-scale','');
    if (typeof prevAfter === 'function') try{ prevAfter(); }catch(e){}
  };
  window.print();
}

async function loadInvoiceToEditor(id) {
  await loadInvoice(id);
  await new Promise(r => setTimeout(r, 50));
}
async function exportPDFById(id) {
  try { await loadInvoiceToEditor(id); } catch(e) { toast('Unable to open invoice','er'); return; }
  return exportPDF();
}
async function printInvoiceById(id) {
  try { await loadInvoiceToEditor(id); } catch(e) { toast('Unable to open invoice','er'); return; }
  return printInvoice();
}

async function exportPDF() {
  await saveInvoice();
  const rawNum   = gv('e-num')   || 'INV-0001';
  const rawName  = gv('e-cname') || 'Client';
  const dt       = new Date().toISOString().slice(0,10);
  const safeName = rawName.replace(/[^a-z0-9]/gi,'_').replace(/_+/g,'_').replace(/^_|_$/g,'');
  const safeNum  = rawNum.replace(/[^a-z0-9\-]/gi,'_');
  const filename = `${safeNum}_${safeName}_${dt}.pdf`;

  const docEl = document.getElementById('doc');
  if (!docEl) { toast('Invoice preview not found','er'); return; }

  // Build an isolated render clone — prevents shadow/layout bleed into the PDF
  const prevShadow = docEl.style.boxShadow;
  docEl.style.boxShadow = 'none';
  // Off-screen container — fixed at A4 width, no transforms (html2pdf handles scaling)
  const host = document.createElement('div');
  host.style.cssText = 'position:fixed;left:0;top:0;width:794px;height:auto;background:#fff;opacity:0;pointer-events:none;z-index:-1;overflow:visible;';
  const clone = docEl.cloneNode(true);
  clone.style.cssText = 'width:794px;min-height:0;height:auto;box-shadow:none;margin:0;padding:0;overflow:visible;transform:none;';
  host.appendChild(clone); document.body.appendChild(host);

  // ── PATH 1: html2pdf (requires internet — CDN) ──
  try {
    toast('Generating PDF…','in');
    await loadHtml2pdf();
    const opt = {
      margin: 0,
      filename,
      image: { type:'jpeg', quality:0.98 },
      // Use pixel-based A4 to avoid left-cropping/offset issues in some html2canvas renders
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        scrollX: 0,
        scrollY: 0,
        x: 0,
        y: 0,
        width: 794,
        windowWidth: 794
      },
      jsPDF: {
        unit: 'px',
        // A4 at 96dpi ≈ 794×1123px
        format: [794, 1123],
        orientation: 'portrait',
        compress: true
      },
      pagebreak: { mode:['avoid-all'], avoid:'.dbot,.dgrand,.dfoot,.doc-footer,.dtot,tr' }
    };
    await window.html2pdf().set(opt).from(clone).save();
    toast('PDF downloaded ✓','ok');
    return; // success — skip fallback
  } catch(err) {
    _html2pdfReady = null; // reset so next attempt retries CDN load
    console.info('[InvoKit] html2pdf unavailable (offline?), using print-to-PDF fallback.');
  } finally {
    docEl.style.boxShadow = prevShadow;
    try { host.remove(); } catch(e) {}
  }

  // ── PATH 2: Print-to-PDF (100% offline, works everywhere) ──
  // Opens a clean popup with the invoice pre-rendered and triggers the browser
  // print dialog. In Chrome/Edge/Firefox: choose "Save as PDF" as the printer.
  _printToPDF(filename, docEl);
}

function _printToPDF(filename, docEl) {
  // Clone the live doc — strip all app-shell styles, just the document
  const printClone = docEl.cloneNode(true);
  printClone.style.cssText = 'width:794px;min-height:0;height:auto;box-shadow:none;margin:0;padding:0;overflow:visible;';

  // Build a minimal, self-contained print page
  // IMPORTANT: CSS is a local constant — never use document.querySelectorAll('style')
  // which would inject all 15k chars of app-shell CSS and corrupt the layout
  const DOC_CSS = `/* ══ INVOICE DOCUMENT CANVAS ══ */
#doc{
  width:794px;min-height:1123px;background:#fff;
  font-size:16.333px; color:#111827;
  box-shadow:var(--shl);position:relative;overflow:hidden;
  display:flex;flex-direction:column;font-family:'Inter', system-ui, -apple-system, sans-serif;
  flex-shrink:0;
}

/* ── THEME: CORPORATE BLUE ── */
.dt-blue #dh{background:var(--dP,#1a3a6b);padding:34px 44px;display:flex;justify-content:space-between;align-items:flex-start;position:relative;overflow:hidden;}
.dt-blue #dh::before{content:'';position:absolute;top:-40px;right:-40px;width:190px;height:190px;border-radius:50%;background:rgba(255,255,255,.04);}
.dt-blue .dlb{width:68px;height:68px;background:rgba(255,255,255,.11);border-radius:8px;display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;}
.dt-blue .dlb img{max-width:100%;max-height:100%;object-fit:contain;}
.dt-blue .dli{font-family:Georgia,serif;font-size:1.745rem;font-weight:900;color:rgba(255,255,255,.4);}
.dt-blue .dbi{flex:1;padding-left:16px;color:#fff;}
.dt-blue .dbn{font-size:1.445rem;font-weight:700;line-height:1.1;letter-spacing:-.1px;}
.dt-blue .dbt{font-size:0.825rem;opacity:.6;margin-top:2px;}
.dt-blue .dbc{font-size:0.805rem;opacity:.62;margin-top:7px;line-height:1.75;}
.dt-blue .dbd{text-align:right;color:#fff;}
.dt-blue .dtw{font-size:1.995rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#e8a020;line-height:1;}
.dt-blue .dtn{font-size:0.855rem;opacity:.65;margin-top:4px;letter-spacing:.7px;font-family:'Courier New', Consolas,monospace;}
.dt-blue .ds{height:4px;background:linear-gradient(90deg,var(--dA,#e8a020), rgba(0,0,0,0));}

/* ── THEME: EMERALD ── */
.dt-emerald #dh{background:var(--dP,#005c37);padding:32px 42px;display:flex;justify-content:space-between;align-items:flex-start;}
.dt-emerald .dlb{width:68px;height:68px;background:rgba(255,255,255,.12);border-radius:8px;display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;}
.dt-emerald .dlb img{max-width:100%;max-height:100%;object-fit:contain;}
.dt-emerald .dli{font-family:Georgia,serif;font-size:1.745rem;font-weight:900;color:rgba(255,255,255,.4);}
.dt-emerald .dbi{flex:1;padding-left:16px;color:#fff;}
.dt-emerald .dbn{font-family:Georgia,serif;font-size:1.545rem;font-weight:700;line-height:1.1;}
.dt-emerald .dbt{font-size:0.815rem;opacity:.65;margin-top:2px;font-style:italic;}
.dt-emerald .dbc{font-size:0.805rem;opacity:.62;margin-top:7px;line-height:1.75;}
.dt-emerald .dbd{text-align:right;color:#fff;}
.dt-emerald .dtw{font-family:Georgia,serif;font-size:2.195rem;font-weight:900;letter-spacing:3px;text-transform:uppercase;color:#f5c518;line-height:1;}
.dt-emerald .dtn{font-size:0.855rem;opacity:.65;margin-top:4px;letter-spacing:.7px;}
.dt-emerald .ds{height:4px;background:linear-gradient(90deg,var(--dA,#f5c518), rgba(0,0,0,0));}

/* ── THEME: OBSIDIAN ── */
.dt-obsidian #dh{background:var(--dP,#0D0D0D);padding:32px 42px;display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #f5c518;}
.dt-obsidian .dlb{width:66px;height:66px;border:1.5px solid rgba(255,255,255,.1);border-radius:7px;display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;}
.dt-obsidian .dlb img{max-width:100%;max-height:100%;object-fit:contain;}
.dt-obsidian .dli{font-family:'Segoe UI', system-ui,sans-serif;font-size:1.645rem;font-weight:800;color:rgba(255,255,255,.22);}
.dt-obsidian .dbi{flex:1;padding-left:16px;color:#fff;}
.dt-obsidian .dbn{font-family:'Segoe UI', system-ui,sans-serif;font-size:1.445rem;font-weight:800;}
.dt-obsidian .dbt{font-size:0.815rem;color:rgba(255,255,255,.32);margin-top:2px;}
.dt-obsidian .dbc{font-size:0.805rem;color:rgba(255,255,255,.42);margin-top:7px;line-height:1.75;}
.dt-obsidian .dbd{text-align:right;}
.dt-obsidian .dtw{font-family:'Segoe UI', system-ui,sans-serif;font-size:2.395rem;font-weight:800;letter-spacing:5px;text-transform:uppercase;color:#f5c518;line-height:1;}
.dt-obsidian .dtn{font-size:0.835rem;color:rgba(255,255,255,.38);margin-top:4px;letter-spacing:.7px;font-family:'Courier New', Consolas,monospace;}
.dt-obsidian .ds{display:none;}

/* ── THEME: PEARL ── */
.dt-pearl #dh{background:var(--dP,#fff);padding:32px 42px 20px;display:flex;justify-content:space-between;align-items:flex-start;border-bottom:none;}
.dt-pearl .dlb{width:68px;height:68px;display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;}
.dt-pearl .dlb img{max-width:100%;max-height:100%;object-fit:contain;}
.dt-pearl .dli{font-size:2.895rem;font-weight:300;color:#3d3530;line-height:1;}
.dt-pearl .dbi{flex:1;padding-left:16px;color:#222;}
.dt-pearl .dbn{font-size:1.495rem;font-weight:600;line-height:1.1;letter-spacing:-.15px;}
.dt-pearl .dbt{font-size:0.825rem;color:#aaa;margin-top:2px;font-style:italic;}
.dt-pearl .dbc{font-size:0.805rem;color:#999;margin-top:7px;line-height:1.75;}
.dt-pearl .dbd{text-align:right;}
.dt-pearl .dtw{font-size:2.395rem;font-weight:300;letter-spacing:9px;text-transform:uppercase;color:#3d3530;line-height:1;font-style:italic;}
.dt-pearl .dtn{font-size:0.835rem;color:#bbb;margin-top:4px;letter-spacing:.7px;text-align:right;font-family:'Courier New', Consolas,monospace;}
.dt-pearl .ds{height:3px;background:var(--dA,#c9a84c);opacity:.65;}

/* ── DOCUMENT BODY (shared) ── */
.dbody{padding:24px 42px;flex:1;}
.dmeta{display:grid;grid-template-columns:1fr 1fr;gap:20px;padding-bottom:18px;border-bottom:1px solid #ebebeb;margin-bottom:18px;overflow:hidden;}
.d-lbl{font-size:0.705rem;letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:5px;}
.dt-blue .d-lbl,.dt-emerald .d-lbl{color:var(--dP,#1a3a6b);}
.dt-obsidian .d-lbl,.dt-pearl .d-lbl{color:#999;}
.dcn{font-size:1.095rem;font-weight:700;margin-bottom:3px;word-break:break-word;overflow-wrap:anywhere;max-width:100%;}
.dcd{font-size:0.995rem;color:#374151;line-height:1.65;font-weight:500;word-break:break-word;overflow-wrap:anywhere;max-width:100%;}
.ddate-block{text-align:right;}
.dmeta>div{min-width:0;overflow:hidden;word-break:break-word;overflow-wrap:anywhere;}
.drow{display:flex;justify-content:flex-end;gap:13px;margin-bottom:5px;font-size:0.995rem;overflow:hidden;}
.dk{color:#6b7280;font-size:0.815rem;text-transform:uppercase;letter-spacing:.6px;font-family:'Courier New', Consolas,monospace;font-weight:700;}
.dv{font-weight:800;min-width:60px;max-width:200px;text-align:right;font-family:'Courier New', Consolas,monospace;font-size:0.995rem;color:#111827;word-break:break-word;overflow-wrap:anywhere;}
.dit{width:100%;border-collapse:collapse;margin-bottom:16px;table-layout:fixed;}
.dt-blue .dit thead tr,.dt-emerald .dit thead tr{border-bottom:2px solid var(--dP,#1a3a6b);}
.dt-obsidian .dit thead tr{background:#0D0D0D;}
.dt-pearl .dit thead tr{border-bottom:1px solid #c9a84c;}
.dit th{font-size:0.695rem;text-transform:uppercase;letter-spacing:1.3px;font-weight:700;padding:7px 8px;text-align:left;}
.dt-blue .dit th,.dt-emerald .dit th{color:var(--dP,#1a3a6b);}
.dt-obsidian .dit th{color:rgba(255,255,255,.65);}
.dt-pearl .dit th{color:#c9a84c;}
.dit th.r,.dit td.r{text-align:right;}
.dit td{padding:9px 8px;font-size:1.045rem;color:#111827;border-bottom:1px solid #f0f0f0;vertical-align:top;font-weight:500;word-break:break-word;overflow-wrap:break-word;}
.dit td:nth-child(2),.dit th:nth-child(2){width:52px;}
.dit td:nth-child(3),.dit th:nth-child(3){width:100px;}
.dit td:nth-child(4),.dit th:nth-child(4){width:110px;}

.dit td.mono{font-family:'Courier New', Consolas,monospace;font-size:0.905rem;}
.dit tbody tr:nth-child(even) td{background:#fafafa;}
.dtw-wrap{display:flex;justify-content:flex-end;margin-bottom:18px;}
.dtot{width:270px;min-width:220px;}
.dtrow{display:flex;justify-content:space-between;align-items:center;padding:6px 0;font-size:1.015rem;border-bottom:1px solid #f0f0f0;flex-wrap:nowrap;}
.dtrow .tk{color:#6b7280;font-size:0.955rem;font-weight:700;white-space:nowrap;padding-right:12px;}
.dtrow .tv{font-family:'Courier New', Consolas,monospace;font-size:0.995rem;font-weight:800;color:#111827;text-align:right;white-space:nowrap;}
.dgrand{color:#fff;padding:11px 13px;border-radius:5px;margin-top:7px;display:flex;justify-content:space-between;align-items:center;}
.dt-blue .dgrand,.dt-emerald .dgrand{background:var(--dP,#1a3a6b);}
.dt-obsidian .dgrand{background:#0D0D0D;border-left:3px solid #f5c518;border-radius:4px;}
.dt-pearl .dgrand{background:#3d3530;}
.dgrand .gk{font-size:0.835rem;text-transform:uppercase;letter-spacing:1.2px;opacity:.88;font-weight:800;}
.dgrand .gv{font-family:'Courier New', Consolas,monospace;font-size:1.275rem;font-weight:900;color:#fff;}
.dt-pearl .dgrand .gv{color:#c9a84c;}
.dfoot{display:grid;grid-template-columns:1fr 1fr;gap:18px;padding-top:14px;border-top:1px solid #ebebeb;margin-bottom:20px;}
.dflbl{font-size:0.705rem;letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:6px;}
.dt-blue .dflbl,.dt-emerald .dflbl{color:var(--dP,#1a3a6b);}
.dt-obsidian .dflbl,.dt-pearl .dflbl{color:#aaa;}
.dbrow{display:flex;gap:6px;margin-bottom:3px;font-size:0.895rem;overflow:hidden;}
.dbk{color:#bbb;width:80px;flex-shrink:0;font-size:0.855rem;}
.dbv{font-weight:600;color:#333;font-family:'Courier New', Consolas,monospace;font-size:0.895rem;word-break:break-word;overflow-wrap:anywhere;min-width:0;flex:1;}
.dnotes{font-size:0.875rem;color:#aaa;line-height:1.65;}
.dbot{padding:16px 42px 20px;display:flex;justify-content:space-between;align-items:flex-end;border-top:1px solid #e5e7eb;margin-top:8px;gap:20px;}
.dt-blue .dbot,.dt-emerald .dbot{background:#f8f5ee;border-top:3px solid var(--dA,#e8a020);}
.dt-obsidian .dbot{background:#0D0D0D;border-top:none;}
.dt-pearl .dbot{background:#faf7f0;border-top:1px solid #ede8de;}
.dty{font-size:0.925rem;font-style:italic;color:#555;flex-shrink:0;}
.dt-blue .dty,.dt-emerald .dty{color:var(--dP,#1a3a6b);}
.dt-obsidian .dty{color:rgba(255,255,255,.38);font-family:'Segoe UI', system-ui,sans-serif;font-style:normal;font-size:0.875rem;}
.dt-pearl .dty{color:#3d3530;}
.dreg{font-size:0.72rem;color:#bbb;font-family:'Courier New', Consolas,monospace;text-align:right;flex-shrink:0;}
.dt-obsidian .dreg{color:rgba(255,255,255,.18);}
.dstamp{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-12deg);border:4px solid;padding:7px 18px;font-size:1.795rem;font-weight:900;letter-spacing:5px;text-transform:uppercase;opacity:.1;pointer-events:none;font-family:'Segoe UI', system-ui,sans-serif;white-space:nowrap;}
.st-paid{color:#059669;border-color:#059669;}
.st-overdue{color:#dc2626;border-color:#dc2626;}

/* ══ LAYOUT PICKER ══ */
.layout-picker{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;}
.lpill{display:flex;flex-direction:column;align-items:center;gap:5px;padding:8px 3px 7px;border:1.5px solid var(--bd2);border-radius:8px;background:var(--sur2);cursor:pointer;transition:.14s;color:var(--muted);font-family:'Inter',system-ui,sans-serif;width:100%;}
.lpill:hover{border-color:var(--P);color:var(--P);background:var(--sur);}
.lpill.on{border-color:var(--P);background:var(--P);color:#fff;}
.lpill span{font-size:.59rem;font-weight:600;letter-spacing:.3px;white-space:nowrap;}
.lp-svg{width:28px;height:35px;flex-shrink:0;}

/* ══ LAYOUT 2 — SPLIT (FIX #6, #7, #12: corrected class names + added background) ══ */
.l2-wrap{display:flex;min-height:auto;}
/* FIX #12: Added background:var(--dP,#1a3a6b) so sidebar gets theme colour */
.l2-side{width:210px;flex-shrink:0;padding:32px 20px;display:flex;flex-direction:column;position:relative;background:var(--dP,#1a3a6b);}
.l2-logo-box{width:52px;height:52px;border-radius:8px;background:rgba(255,255,255,.13);display:flex;align-items:center;justify-content:center;overflow:hidden;margin-bottom:14px;flex-shrink:0;}
.l2-logo-box img{max-width:100%;max-height:100%;object-fit:contain;}
.l2-bname{font-size:1rem;font-weight:800;color:#fff;line-height:1.2;margin-bottom:3px;}
.l2-btag{font-size:.66rem;color:rgba(255,255,255,.55);font-style:italic;margin-bottom:7px;}
.l2-binfo{font-size:.7rem;color:rgba(255,255,255,.5);line-height:1.85;white-space:normal;word-break:break-word;overflow-wrap:anywhere;}
.l2-divider{height:1px;background:rgba(255,255,255,.14);margin:14px 0;}
.l2-mlabel{font-size:.56rem;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,.38);font-weight:600;margin-bottom:2px;}
.l2-mval{font-size:.78rem;font-weight:700;color:rgba(255,255,255,.9);margin-bottom:10px;font-family:'Courier New',monospace;line-height:1.3;}
.l2-cname{font-size:.9rem;font-weight:700;color:#fff;margin-bottom:3px;line-height:1.25;word-break:break-word;overflow-wrap:anywhere;}
.l2-main{flex:1;padding:28px 28px 0;display:flex;flex-direction:column;min-width:0;}
.l2-invword{font-size:2.2rem;font-weight:900;letter-spacing:5px;text-transform:uppercase;color:var(--dP,#1a3a6b);line-height:1;text-align:right;margin-bottom:22px;}
.l2-footer{display:grid;grid-template-columns:1fr 1fr;gap:14px;padding-top:14px;border-top:1px solid #ebebeb;margin-bottom:14px;}
.l2-thanks{font-size:.71rem;font-style:italic;color:#ccc;text-align:center;padding:10px 0 4px;border-top:1px solid #f5f5f5;margin-top:4px;}

/* ══ LAYOUT 3 — MINIMAL (FIX #8: corrected class names to match CSS) ══ */
/* ── Layout 3: Modern Premium (Navy/Gold) ── */
.l3-hero{background:var(--dP,#1a3a6b);padding:40px 48px 32px;position:relative;overflow:hidden;display:flex;justify-content:space-between;align-items:flex-start;}
.l3-hero::after{content:'';position:absolute;bottom:-60px;right:-60px;width:220px;height:220px;border-radius:50%;background:rgba(255,255,255,.04);pointer-events:none;}
.l3-hero::before{content:'';position:absolute;top:-80px;left:140px;width:280px;height:280px;border-radius:50%;background:rgba(255,255,255,.03);pointer-events:none;}
.l3-logo-box{width:60px;height:60px;border-radius:10px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;margin-right:16px;}
.l3-biz-col{display:flex;align-items:flex-start;flex:1;}
.l3-biz-text{}
.l3-bname{font-size:1.15rem;font-weight:800;color:#fff;line-height:1.2;letter-spacing:-.2px;}
.l3-btag{font-size:.7rem;color:rgba(255,255,255,.55);margin-top:3px;font-style:italic;}
.l3-bcontact{font-size:.68rem;color:rgba(255,255,255,.45);margin-top:8px;line-height:1.85;}
.l3-inv-col{text-align:right;flex-shrink:0;}
.l3-invlabel{font-size:.6rem;letter-spacing:3px;text-transform:uppercase;color:var(--dA,#e8a020);font-weight:700;margin-bottom:6px;}
.l3-invnum{font-size:1.5rem;font-weight:900;color:#fff;letter-spacing:1px;line-height:1;}
.l3-invdate{font-size:.68rem;color:rgba(255,255,255,.45);margin-top:6px;font-family:'Courier New',monospace;line-height:1.9;}
.l3-gold-bar{height:3px;background:linear-gradient(90deg,var(--dA,#e8a020),rgba(232,160,32,.15));}
.l3-body{padding:28px 48px;}
.l3-meta-row{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px;gap:24px;}
.l3-billto-lbl{font-size:.58rem;letter-spacing:2.5px;text-transform:uppercase;color:var(--dP,#1a3a6b);font-weight:700;margin-bottom:6px;}
.l3-cname{font-size:1.05rem;font-weight:700;color:#111;margin-bottom:3px;word-break:break-word;overflow-wrap:anywhere;}
.l3-cinfo{font-size:.78rem;color:#888;line-height:1.7;word-break:break-word;overflow-wrap:anywhere;}
.l3-dates-block{text-align:right;}
.l3-drow{display:flex;justify-content:flex-end;gap:20px;margin-bottom:5px;}
.l3-dk{font-size:.63rem;color:#bbb;text-transform:uppercase;letter-spacing:.5px;}
.l3-dv{font-size:.78rem;font-weight:700;min-width:90px;text-align:right;font-family:'Courier New',monospace;}
.l3-totals-row{display:flex;justify-content:flex-end;margin-bottom:20px;}
.l3-foot-row{display:grid;grid-template-columns:1fr 1fr;gap:20px;padding-top:16px;border-top:2px solid #f0f0f0;}
.l3-bot-bar{display:flex;justify-content:space-between;align-items:center;padding:12px 48px;background:var(--dP,#1a3a6b);margin-top:auto;}
.l3-thanks{font-size:.72rem;font-style:italic;color:rgba(255,255,255,.55);}
.l3-reg{font-size:.62rem;color:rgba(255,255,255,.3);font-family:'Courier New',monospace;}

/* ── Layout 4: Classic Corporate ── */
.l4-corp-head{padding:36px 48px 28px;border-bottom:3px solid var(--dP,#1a3a6b);display:flex;justify-content:space-between;align-items:flex-start;}
.l4-corp-left{display:flex;align-items:flex-start;gap:16px;}
.l4-corp-logo{width:56px;height:56px;border-radius:6px;border:2px solid #eee;display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0;background:#f8f8f8;}
.l4-corp-bname{font-size:1.2rem;font-weight:800;color:#111;letter-spacing:-.3px;line-height:1.15;margin-bottom:3px;}
.l4-corp-btag{font-size:.7rem;color:#888;font-style:italic;margin-bottom:5px;}
.l4-corp-bcontact{font-size:.68rem;color:#aaa;line-height:1.85;}
.l4-corp-right{text-align:right;}
.l4-corp-doctitle{font-size:2rem;font-weight:900;letter-spacing:4px;text-transform:uppercase;color:var(--dP,#1a3a6b);line-height:1;margin-bottom:8px;}
.l4-corp-num{font-size:.78rem;font-weight:700;color:#555;letter-spacing:1px;font-family:'Courier New',monospace;}
.l4-corp-dates{font-size:.66rem;color:#bbb;margin-top:4px;font-family:'Courier New',monospace;line-height:1.9;}
.l4-corp-meta{display:flex;justify-content:space-between;align-items:flex-start;padding:18px 48px;background:#f9f9f9;border-bottom:1px solid #ebebeb;}
.l4-corp-billto-lbl{font-size:.57rem;letter-spacing:2.5px;text-transform:uppercase;font-weight:700;color:var(--dP,#1a3a6b);margin-bottom:6px;}
.l4-corp-cname{font-size:1rem;font-weight:700;margin-bottom:3px;word-break:break-word;overflow-wrap:anywhere;}
.l4-corp-cinfo{font-size:.77rem;color:#888;line-height:1.7;word-break:break-word;overflow-wrap:anywhere;}
.l4-corp-terms{text-align:right;}
.l4-corp-terms-lbl{font-size:.57rem;letter-spacing:2.5px;text-transform:uppercase;font-weight:700;color:#bbb;margin-bottom:6px;}
.l4-corp-terms-val{font-size:.82rem;font-weight:600;color:#555;}
.l4-corp-body{padding:24px 48px 20px;}
.l4-corp-totals{display:flex;justify-content:flex-end;margin-bottom:20px;}
.l4-corp-footer{display:grid;grid-template-columns:1fr 1fr;gap:24px;padding:18px 48px;border-top:1px solid #ebebeb;}
.l4-corp-bot{display:flex;justify-content:space-between;align-items:center;padding:12px 48px;border-top:3px solid var(--dP,#1a3a6b);margin-top:auto;}
.l4-corp-thanks{font-size:.75rem;font-weight:600;color:var(--dP,#1a3a6b);letter-spacing:.5px;text-transform:uppercase;}
.l4-corp-reg{font-size:.62rem;color:#ccc;font-family:'Courier New',monospace;}`;

  const printHTML = '<!DOCTYPE html>' +
    '<html lang="en"><head>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<title>InvoKit Pro v2.0 — Smart Business Toolkit (Offline)</title>' +
    '<style>' +
    '*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}' +
    'html,body{background:#fff;margin:0;padding:0;' +
    '-webkit-print-color-adjust:exact;print-color-adjust:exact;color-adjust:exact;}' +
    '@page{size:A4 portrait;margin:0;}' +
    DOC_CSS +
    /* Print-specific overrides — ensure clean A4 output */ (
    '@media print{' +
    '#controls{display:none!important;}' +
    '#doc{width:210mm!important;min-height:0!important;height:auto!important;' +
    'box-shadow:none!important;overflow:visible!important;}' +
    '*{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;}' +
    '}') +
    /* Screen chrome — preview bar above invoice */ (
    '@media screen{' +
    'body{display:flex;flex-direction:column;align-items:center;' +
    'background:#e5e7eb;min-height:100vh;padding:0;}' +
    '#controls{display:flex;align-items:center;gap:10px;' +
    'background:#1a3a6b;color:#fff;padding:14px 24px;width:794px;' +
    'font-family:Segoe UI,system-ui,sans-serif;font-size:.85rem;' +
    'border-radius:8px 8px 0 0;flex-shrink:0;}' +
    '#controls strong{margin-right:auto;font-size:.95rem;}' +
    '#ctrl-hint{font-size:.72rem;color:rgba(255,255,255,.6);margin-top:2px;}' +
    '#controls button{padding:8px 18px;border:none;border-radius:6px;cursor:pointer;' +
    'font-family:inherit;font-size:.82rem;font-weight:600;}' +
    '.btn-save{background:#e8a020;color:#111;}' +
    '.btn-close{background:rgba(255,255,255,.15);color:#fff;}' +
    '#doc-wrap{background:#fff;box-shadow:0 4px 32px rgba(0,0,0,.15);width:794px;}' +
    '}') +
    '</style></head><body>' +
    '<div id="controls">' +
    '<div><strong>\uD83D\uDCC4 ' + filename.replace('.pdf','') + '</strong>' +
    '<div id="ctrl-hint">In the print dialog \u2192 Destination \u2192 \"Save as PDF\"</div></div>' +
    '<button class="btn-save" onclick="window.print()">\u2B07 Save as PDF</button>' +
    '<button class="btn-close" onclick="window.close()">\u2715 Close</button>' +
    '</div>' +
    '<div id="doc-wrap">' + printClone.outerHTML + '</div>' +
    '<script>window.onload=function(){setTimeout(function(){window.print();},500);};<\/script>' +
    '</body></html>';

  const blob = new Blob([printHTML], {type:'text/html'});
  const url  = URL.createObjectURL(blob);
  const win  = window.open(url, '_blank', 'width=900,height=800,menubar=yes,toolbar=yes');

  if (!win) {
    toast('Pop-ups blocked. Please allow pop-ups and try again.','er');
  } else {
    toast('Print window opened — choose "Save as PDF" ✓','in');
  }
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

/* ─── DASHBOARD ─── */
/* ── Revenue reveal toggle ─────────────────────────────── */
let _revealRev = false; // hidden by default, resets on every dashboard visit

function toggleReveal() {
  _revealRev = !_revealRev;
  _applyRevealState();
}

function _applyRevealState() {
  const rev  = document.getElementById('ds-rev');
  const rev2 = document.getElementById('ds-rev2');
  const svg  = document.getElementById('rev-eye-svg');
  const btn  = document.getElementById('rev-eye');
  if (!rev) return;
  if (_revealRev) {
    rev.classList.remove('sv-masked');
    if (rev2) rev2.classList.remove('sv-masked');
    if (btn)  btn.style.color = 'var(--P)';
    if (svg)  svg.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'; // open eye
  } else {
    rev.classList.add('sv-masked');
    if (rev2) rev2.classList.add('sv-masked');
    if (btn)  btn.style.color = 'var(--muted)';
    if (svg)  svg.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'; // crossed eye
  }
}

async function refreshDash() {
  const invs = await dbAll('invoices'), clients = await dbAll('clients');
  const rev = {};
  invs.filter(i => ['paid','issued'].includes(i.status)).forEach(i => {
    const c = i.currency||'GBP'; rev[c] = (rev[c]||0) + (i.total||0);
  });
  const overdue = invs.filter(i => i.status==='overdue').length;
  const revKeys = Object.keys(rev);
  const dsInv=$('ds-inv'),dsRev=$('ds-rev'),dsRev2=$('ds-rev2'),dsOv=$('ds-ov'),dsCli=$('ds-cli');
  if (dsInv) dsInv.textContent = invs.length;
  if (dsOv)  dsOv.textContent  = overdue;
  if (dsCli) dsCli.textContent = clients.length;
  if (dsRev) {
    if (!revKeys.length) { dsRev.textContent='—'; if(dsRev2) dsRev2.textContent='No paid invoices yet'; }
    else if (revKeys.length===1) { const c=revKeys[0]; dsRev.textContent=fmtS(rev[c],c); if(dsRev2) dsRev2.textContent=fmt(rev[c],c)+' ('+c+')'; }
    else { dsRev.textContent=revKeys.length+' currencies'; if(dsRev2) dsRev2.textContent=revKeys.map(c=>fmtS(rev[c],c)+' '+c).join(' · '); }
  }
  await updateCounts();
  _revealRev = false; _applyRevealState(); // reset to hidden on each dashboard load
  const recent = [...invs].sort((a,b)=>b.savedAt-a.savedAt).slice(0,8);
  const dl = $('dash-inv-list');
  if (!recent.length) { dl.innerHTML=`<div style="padding:24px;text-align:center;font-size:.82rem;color:var(--muted);">No invoices yet. Create your first one!</div>`; return; }
  dl.innerHTML = recent.map(inv => {
    const c = CURS[inv.currency||'GBP']||CURS.NGN;
    return `<div onclick="loadInvoice(${JSON.stringify(inv.id)})" style="display:flex;align-items:center;gap:10px;padding:9px 14px;cursor:pointer;border-bottom:1px solid var(--bd);transition:background .1s;" onmouseover="this.style.background='var(--sur2)'" onmouseout="this.style.background=''">
      <div style="width:30px;height:30px;border-radius:6px;background:var(--sur3);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.78rem;color:var(--muted);flex-shrink:0;">${(inv.clientName||'?')[0].toUpperCase()}</div>
      <div style="flex:1;min-width:0;"><div style="font-size:.67rem;color:var(--muted);font-family:'Courier New',Consolas,monospace;">${eh(inv.num)}</div><div style="font-size:.84rem;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${eh(inv.clientName)}</div></div>
      <div style="text-align:right;flex-shrink:0;"><div style="font-size:.84rem;font-weight:700;font-family:'Courier New',Consolas,monospace;">${c.s}${(inv.total||0).toLocaleString(c.l,{maximumFractionDigits:0})}</div><span class="badge b-${inv.status||'draft'}">${inv.status||'draft'}</span></div>
    </div>`;
  }).join('');
}

/* ─── INVOICES LIST ─── */
async function markAsPaid(id) {
  const all = await dbAll('invoices');
  const inv = all.find(i => i.id === id || i.id === Number(id));
  if (!inv) { toast('Invoice not found','er'); return; }
  if (inv.status === 'paid') { toast('Already marked as paid','er'); return; }
  // Show modal with invoice info
  const c = CURS[inv.currency||'GBP']||CURS.NGN;
  document.getElementById('mp-inv-info').innerHTML =
    '<strong>' + eh(inv.num) + '</strong> &nbsp;·&nbsp; ' + eh(inv.clientName) +
    '<br><span style="color:var(--ok);font-weight:700;">' + c.s +
    (inv.total||0).toLocaleString(c.l,{minimumFractionDigits:2}) + '</span>';
  document.getElementById('mp-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('mp-confirm-btn').dataset.invId = id;
  openM('m-markpaid');
}
async function confirmMarkPaid() {
  const btn = document.getElementById('mp-confirm-btn');
  const id  = Number(btn.dataset.invId);
  const method = document.getElementById('mp-method').value;
  const date   = document.getElementById('mp-date').value;
  btn.disabled = true; btn.textContent = 'Saving…';
  try {
    const all = await dbAll('invoices');
    const inv = all.find(i => i.id === id);
    if (!inv) { toast('Invoice not found','er'); return; }
    inv.status = 'paid';
    inv.paidDate = date;
    inv.paidMethod = method;
    inv.savedAt = Date.now();
    await dbPut('invoices', inv);
    await updateCounts();
    renderInvoices();
    closeM('m-markpaid');
    toast('Invoice marked as paid ✓','ok');
  } catch(e) { toast('Failed — please try again','er'); }
  finally { btn.disabled = false; btn.textContent = '✓ Mark as Paid'; }
}
async function renderInvoices(search){
  dbAll('invoices').then(function(all){

    if(!Array.isArray(all)) all = [];

    const tbody = document.getElementById('inv-tbody');
    if(!tbody) return;

    // Get search value safely
    if(search === undefined){
      const s = document.getElementById('inv-search');
      search = s ? s.value : '';
    }

    const sfEl = document.getElementById('inv-status-f');
    const statusFilter = sfEl ? sfEl.value : '';

    // Filter by search
    if(search){
      const q = search.toLowerCase();
      all = all.filter(function(i){
        return (
          (i.num && String(i.num).toLowerCase().includes(q)) ||
          (i.clientName && String(i.clientName).toLowerCase().includes(q))
        );
      });
    }

    // Filter by status
    if(statusFilter){
      all = all.filter(function(i){
        return (i.status || 'draft') === statusFilter;
      });
    }

    // Sort newest first
    all.sort(function(a,b){
      return (b.savedAt || 0) - (a.savedAt || 0);
    });

    if(all.length === 0){
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align:center;padding:22px;color:var(--muted);font-size:.8rem;">
            No invoices found
          </td>
        </tr>`;
      return;
    }

    tbody.innerHTML = all.map(function(inv){

      const total = Number(inv.total || 0).toFixed(2);

      return `
        <tr>
          <td class="mono">${inv.num || ''}</td>
          <td>${inv.clientName || ''}</td>
          <td class="mono">${inv.issueDate || '—'}</td>
          <td class="mono">${inv.dueDate || '—'}</td>
          <td class="r mono">${total}</td>
          <td>
            <span class="badge b-${inv.status || 'draft'}">
              ${inv.status || 'draft'}
            </span>
          </td>
          <td>
            <button class="btn btn-o btn-xs"
              onclick="event.stopPropagation(); loadInvoice('${inv.id}')">
              Edit
            </button>
          </td>
        </tr>
      `;
    }).join('');

  }).catch(function(err){
    console.error("Invoice render error:", err);
  });
}

/* ─── CLIENTS ─── */
async function renderClients(search='') {
  let all = await dbAll('clients');
  if (search) all = all.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
  const tb = $('cli-tbody');
  if (!tb) return;
  if (!all.length) { tb.innerHTML=`<tr><td colspan="4" style="text-align:center;padding:22px;color:var(--muted);">No clients yet. Add your first client!</td></tr>`; return; }
  tb.innerHTML = all.map(c => `<tr>
    <td><strong>${eh(c.name)}</strong>${c._sample?` <span style="font-size:.59rem;color:var(--muted);background:var(--sur3);padding:1px 5px;border-radius:10px;">SAMPLE</span>`:''}</td>
    <td>${eh(c.email||'—')}</td>
    <td class="mono">${eh(c.phone||'—')}</td>
    <td><div style="display:flex;gap:4px;">
      <button class="btn btn-g btn-xs" onclick="openReceiptForClient(${c.id})" title="Create receipt for this client">💳 Paid</button>
      <button class="btn btn-o btn-xs" onclick="openClientModal(${c.id})">Edit</button>
      <button class="btn btn-d btn-xs" onclick="deleteClient(${c.id})">Del</button>
    </div></td>
  </tr>`).join('');
}
function openClientModal(id=null) {
  editClientId = id;
  const titleEl = $('cm-title'); if(titleEl) titleEl.textContent = id ? 'Edit Client' : 'Add Client';
  if (!id) {
    ['cm-name','cm-email','cm-phone','cm-addr','cm-notes'].forEach(f => sv(f,''));
  } else {
    dbGet('clients',id).then(c => {
      if(!c) return;
      sv('cm-name', c.name||'');
      sv('cm-email', c.email||'');
      sv('cm-phone', c.phone||'');
      sv('cm-addr',  c.address||'');
      sv('cm-notes', c.notes||'');
    });
  }
  openM('m-client');
}
async function saveClient() {
  const name = gv('cm-name'); if (!name) { toast('Name required','er'); return; }
  const btn = document.querySelector('#m-client .btn-p');
  const orig = btn ? btn.textContent : '';
  if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
  try {
    const obj = {name, email:gv('cm-email'), phone:gv('cm-phone'), address:gv('cm-addr'), notes:gv('cm-notes')};
    if (editClientId) obj.id = editClientId;
    else { const all = await dbAll('clients'); if(all.find(c=>c.name.toLowerCase()===name.toLowerCase())){toast('Client already exists','er'); if(btn){btn.disabled=false;btn.textContent=orig;} return;} }
    await dbPut('clients', obj);     invalidateCache('clients');
await updateCounts(); renderClients();
    closeM('m-client'); toast('Client saved ✓','ok');
  } catch(e) { toast('Save failed — please try again','er'); }
  finally { if (btn) { btn.disabled = false; btn.textContent = orig; } }
}
async function deleteClient(id) {
  confirm2('Delete Client','Remove this client?', async () => { await dbDel('clients',id); invalidateCache('clients'); await updateCounts(); renderClients(); toast('Deleted','er'); });
}

/* ─── ITEM LIBRARY ─── */
async function renderItems(search='') {
  let all = await dbAll('items');
  if (search) all = all.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));
  const tb = $('itm-tbody');
  if (!all.length) { tb.innerHTML=`<tr><td colspan="6" style="text-align:center;padding:22px;color:var(--muted);">No items yet.</td></tr>`; return; }
  /* FIX #5+#6: getDefaultCurrency() is now accessible because fmtS() closing brace is fixed */
  tb.innerHTML = all.map(it => `<tr>
    <td><strong>${eh(it.name)}</strong>${it.category?` <span style="font-size:.59rem;color:var(--muted);background:var(--sur3);padding:1px 5px;border-radius:10px;">${eh(it.category)}</span>`:''}
    ${it._sample?` <span style="font-size:.59rem;color:var(--muted);background:var(--sur3);padding:1px 5px;border-radius:10px;">SAMPLE</span>`:''}</td>
    <td>${eh(it.desc||'—')}</td>
    <td class="r mono">${fmt(it.price||0, getDefaultCurrency())}${it.unit?' / '+eh(it.unit):''}</td>
    <td><div style="display:flex;gap:4px;">
      <button class="btn btn-o btn-xs" onclick="openItemModal(${it.id})">Edit</button>
      <button class="btn btn-d btn-xs" onclick="deleteItem(${it.id})">Del</button>
    </div></td>
  </tr>`).join('');
}
function openItemModal(id=null) {
  editItemId = id; $('im-title').textContent = id ? 'Edit Item' : 'Add Item / Service';
  if (!id) {
    ['im-name','im-desc','im-price','im-category','im-notes'].forEach(f => sv(f,''));
    const u = document.getElementById('im-unit'); if(u) u.value = '';
  } else {
    dbGet('items',id).then(it => {
      if(!it) return;
      sv('im-name', it.name); sv('im-desc', it.desc||'');
      sv('im-price', it.price||''); sv('im-category', it.category||'');
      sv('im-notes', it.notes||'');
      const u = document.getElementById('im-unit'); if(u) u.value = it.unit||'';
    });
  }
  openM('m-item');
}
async function saveItem() {
  const nameInput = document.getElementById('im-name');
  if (!nameInput) { toast('Item form not found','er'); return; }
  const name = nameInput.value.trim();
  if (!name) { toast('Item name is required','er'); return; }
  const btn = document.querySelector('#m-item .btn-p');
  const orig = btn ? btn.textContent : '';
  if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
  try {
    const obj = {
      name, desc: document.getElementById('im-desc')?.value.trim() || '',
      price:    parseFloat(document.getElementById('im-price')?.value) || 0,
      unit:     document.getElementById('im-unit')?.value || '',
      category: document.getElementById('im-category')?.value.trim() || '',
      notes:    document.getElementById('im-notes')?.value.trim() || ''
    };
    if (editItemId) obj.id = editItemId;
    await dbPut('items', obj);
        invalidateCache('items');
await renderItems();
    closeM('m-item'); toast('Item saved ✓','ok');
  } catch(e) { toast('Save failed — please try again','er'); }
  finally { if (btn) { btn.disabled = false; btn.textContent = orig; } }
}
async function deleteItem(id) {
  confirm2('Delete Item','Remove this item?', async () => { await dbDel('items',id); invalidateCache('items'); renderItems(); toast('Deleted','er'); });
}

/* ─── SETTINGS ─── */
async function getSetting() { const all = await dbAll('settings'); return all.length ? all[all.length-1] : {}; }
async function saveSetting() {
  const btn = document.querySelector('#s-settings .btn-p');
  const orig = btn ? btn.textContent : '';
  if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
  try {
    const existing = await getSetting();
    const obj = {
      name:gv('s-name'), tag:gv('s-tag'), reg:gv('s-reg'), addr:gv('s-addr'),
      email:gv('s-email'), phone:gv('s-phone'), web:gv('s-web'),
      bank:gv('s-bank'), aname:gv('s-aname'), anum:gv('s-anum'), sort:gv('s-sort'),
      cur:gv('s-cur'), vat:gv('s-vat'), terms:gv('s-terms'), notes:gv('s-notes'),
      pfx:(gv('s-pfx')||'INV').toUpperCase(), sep:gv('s-sep')!==undefined?gv('s-sep'):'-',
      pad:gv('s-pad')||'4', start:gv('s-start')||'1',
      logo:_settings.logo||null, docTheme:gv('s-doctheme')||_settings.docTheme||'blue'
    };
    if (existing.id) obj.id = existing.id;
    await dbPut('settings', obj); _settings = obj;
    _numCfg = {pfx:obj.pfx, sep:obj.sep, pad:parseInt(obj.pad)||4, start:parseInt(obj.start)||1};
    updateNumPreview();
    toast('Settings saved ✓','ok');
    // Sync locked fields in invoice editor immediately
    buildCurrencySelect($('e-cur'),   { selected: obj.cur||'GBP' });
    buildCurrencySelect($('rct-cur'), { selected: obj.cur||'GBP' });
    const _ebn = document.getElementById('e-bname'); if (_ebn) _ebn.value = obj.name||'';
    const _ebt = document.getElementById('e-btag');  if (_ebt) _ebt.value = obj.tag||'';
    const _eba = document.getElementById('e-baddr'); if (_eba) _eba.value = obj.addr||'';
    const _ebp = document.getElementById('e-bphone'); if (_ebp) _ebp.value = obj.phone||'';
    const _ebe = document.getElementById('e-bemail'); if (_ebe) _ebe.value = obj.email||'';
    const _ebr = document.getElementById('e-breg'); if (_ebr) _ebr.value = obj.reg||'';
    if (obj.logo) { eState.logo = obj.logo; applyLogoUI(obj.logo,'logo-img','logo-txt-wrap','logo-rmv'); }
    else if (!obj.logo && eState.logo) { eState.logo = null; applyLogoUI(null,'logo-img','logo-txt-wrap','logo-rmv'); }
    rd();
  } catch(e) { toast('Save failed — please try again','er'); }
  finally { if (btn) { btn.disabled = false; btn.textContent = orig; } }
}
async function loadSettings() {
  const s = await getSetting(); _settings = s;
  sv('s-name',s.name); sv('s-tag',s.tag); sv('s-reg',s.reg); sv('s-addr',s.addr);
  sv('s-email',s.email); sv('s-phone',s.phone); sv('s-web',s.web);
  sv('s-bank',s.bank); sv('s-aname',s.aname); sv('s-anum',s.anum); sv('s-sort',s.sort);
  buildCurrencySelect($('s-cur'), { selected: s.cur||'GBP' });
  sv('s-vat',s.vat||'7.5');
  sv('s-terms',s.terms||'Payment due within 30 days'); sv('s-notes',s.notes);
  sv('s-pfx',s.pfx||'INV'); sv('s-sep',s.sep!==undefined?s.sep:'-');
  sv('s-pad',s.pad||'4'); sv('s-start',s.start||'1');
  _numCfg = {pfx:(s.pfx||'INV').toUpperCase(), sep:s.sep!==undefined?s.sep:'-', pad:parseInt(s.pad)||4, start:parseInt(s.start)||1};
  updateNumPreview();
  applyLogoUI(s.logo||null,'s-logo-img','s-logo-txt','s-logo-rmv');
  const dt = s.docTheme||'blue';
  const sel = $('s-doctheme'); if(sel) sel.value=dt;
  document.querySelectorAll('.tpill[data-at]').forEach(p => p.classList.toggle('on', p.dataset.at===dt));
  _restoreNameLock();
}

/* ─── BACKUP & RESTORE ─── */
async function doBackup() {
  const [invoices,clients,items,settings,receipts] = await Promise.all([dbAll('invoices'),dbAll('clients'),dbAll('items'),dbAll('settings'),dbAll('receipts')]);
  const data = {_v:'2.0',_ts:Date.now(),counters:{invN:lsGet('invN'),rctN:lsGet('rctN')},invoices,clients,items,settings,receipts};
  const blob = new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const url = URL.createObjectURL(blob), a = document.createElement('a');
  a.href=url; a.download=`invokit_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click(); URL.revokeObjectURL(url); toast('Backup downloaded ✓','ok');
}
async function exportCSV(type) {
  const data = await dbAll(type);
  if (!data.length) { toast('No ' + type + ' to export','er'); return; }
  let headers, rows;
  if (type === 'clients') {
    headers = ['Name','Email','Phone','Address','Country','Currency'];
    rows = data.map(c => [c.name,c.email||'',c.phone||'',c.address||'',c.country||'',c.currency||'']);
  } else if (type === 'items') {
    headers = ['Name','Description','Default Price','Tax %'];
    rows = data.map(i => [i.name,i.desc||'',i.price||0,i.tax||0]);
  } else if (type === 'invoices') {
    headers = ['Invoice #','Client','Issue Date','Due Date','Total','Currency','Status'];
    rows = data.map(i => [i.num,i.clientName,i.issueDate||'',i.dueDate||'',i.total||0,i.currency||'',i.status||'draft']);
  } else if (type === 'receipts') {
    headers = ['Receipt #','Client','Date','Amount','Currency','Payment Method','Notes'];
    rows = data.map(r => [r.num,r.clientName,r.issueDate||'',r.amount||0,r.currency||'',r.paymentMethod||'',r.notes||'']);
  }
  const csv = [headers, ...rows].map(r => r.map(v => '"' + String(v||'').replace(/"/g,'""') + '"').join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = type + '_export_' + new Date().toISOString().slice(0,10) + '.csv';
  a.click(); URL.revokeObjectURL(url);
  toast(type.charAt(0).toUpperCase()+type.slice(1)+' exported ✓','ok');
}

async function doRestore(e) {
  const file = e.target.files[0]; if (!file) return;
  let data;
  try { data = JSON.parse(await file.text()); }
  catch { toast('Invalid JSON file','er'); e.target.value=''; return; }
  const invs = data.invoices || data.invs || [];
  if (!Array.isArray(invs)) { toast('Not a valid InvoKit backup file','er'); e.target.value=''; return; }
  confirm2('Restore Backup',
    `Replace ALL current data with backup?\n${invs.length} invoices · ${data.clients?.length||0} clients · ${data.items?.length||0} items\nThis cannot be undone.`,
    async () => {
      await Promise.all([dbClear('invoices'),dbClear('clients'),dbClear('items'),dbClear('settings')]);
      for (const i of invs)               await dbPut('invoices',i);
      for (const c of (data.clients||[])) await dbPut('clients',c);
      for (const it of (data.items||[])) await dbPut('items',it);
      for (const s of (data.settings||[])) await dbPut('settings',s);
      for (const r of (data.receipts||[])) await dbPut('receipts',r);
      if (data.counters?.invN != null) lsSet('invN', data.counters.invN);
      if (data.counters?.rctN != null) lsSet('rctN', data.counters.rctN);
      _settings = await getSetting(); await updateCounts();
      toast(`Restored ✓ — ${invs.length} invoices loaded`,'ok'); refreshDash();
    }
  );
  e.target.value = '';
}

/* ─── RESET ─── */
function resetDraftOnly() { openNewInvoice(); toast('Draft reset — form cleared','in'); }
function openResetAllModal() { sv('del-confirm-input',''); const btn=$('del-confirm-btn'); if(btn) btn.disabled=true; openM('m-reset-all'); }
function checkDelConfirm() { const btn=$('del-confirm-btn'); if(btn) btn.disabled=(gv('del-confirm-input')!=='DELETE'); }
async function executeResetAll() {
  closeM('m-reset-all');
  // FIX: Added 'receipts' to the clear list — was missing, making receipts impossible to reset
  await Promise.all([dbClear('invoices'),dbClear('clients'),dbClear('items'),dbClear('settings'),dbClear('receipts')]);
  // FIX: Added 'rctN' to clear receipt counter too
  ['invN','rctN','docTheme','onboarded'].forEach(k => localStorage.removeItem('bk_'+k));
  _settings={}; _numCfg={pfx:'INV',sep:'-',pad:4,start:1};
  eState.id=null; eState.logo=null; eState.rows=[{desc:'',qty:1,price:0,tax:0}];
  await updateCounts(); toast('All data cleared','er'); go('dash');
  _updateGettingStarted(); // reset clears ik_onboarded — show Getting Started again
  setTimeout(() => openOnboarding(), 400);
}

/* ─── SAMPLE DATA ─── */
const SAMPLES = {
  ng:{
    clients:[
      {name:'Chukwuemeka Holdings Ltd',email:'info@chukwuemeka.ng',phone:'+234 801 234 5678',address:'12 Broad Street, Lagos Island, Lagos',country:'Nigeria',currency:'NGN',_sample:true},
      {name:'Fatima Musa Ventures',email:'fatima@fmventures.ng',phone:'+234 705 987 6543',address:'Plot 5, Maitama District, Abuja',country:'Nigeria',currency:'NGN',_sample:true},
    ],
    items:[
      {name:'Consulting Services',desc:'Business advisory per hour',price:50000,tax:7.5,_sample:true},
      {name:'Logo & Brand Design',desc:'Full identity package',price:180000,tax:7.5,_sample:true},
      {name:'Website Development',desc:'Custom business website',price:350000,tax:7.5,_sample:true}
    ]
  },
  uk:{
    clients:[
      {name:'Harrington & Sons Ltd',email:'accounts@harrington.co.uk',phone:'+44 207 123 4567',address:'47 Baker Street, London W1U 8EJ',country:'United Kingdom',currency:'GBP',_sample:true},
      {name:'Edinburgh Digital Co.',email:'hello@edinburghdigital.co.uk',phone:'+44 131 987 6543',address:'25 Royal Mile, Edinburgh EH1 1TG',country:'United Kingdom',currency:'GBP',_sample:true},
    ],
    items:[
      {name:'Consultancy (per day)',desc:'Professional advisory',price:650,tax:20,_sample:true},
      {name:'Brand Identity Design',desc:'Logo, colours, typography',price:1800,tax:20,_sample:true},
      {name:'SEO & Content Package',desc:'Monthly retainer',price:950,tax:20,_sample:true}
    ]
  }
};
async function loadSampleData(region) {
  const s = SAMPLES[region]; if (!s) return;
  for (const c of s.clients) await dbPut('clients',c);
  for (const it of s.items)  await dbPut('items',it);
  await updateCounts(); toast(`${'🌍'} sample data loaded ✓`,'ok');
}
async function clearSampleData() {
  const clients = await dbAll('clients'), items = await dbAll('items');
  for (const c  of clients.filter(x=>x._sample)) await dbDel('clients',c.id);
  for (const it of items.filter(x=>x._sample))   await dbDel('items',it.id);
  await updateCounts(); toast('Sample data cleared','in');
}

/* ─── ONBOARDING ─── */
// function openOnboarding replaced

// function skipOnboarding replaced
function skipOnboarding() { /* disabled — onboarding must be completed */ }

function confirmClear(type) {
  if (type==='draft') resetDraftOnly();
  else if (type==='all') openResetAllModal();
}

function togglePreview(){
  const root = document.body;
  const on = root.classList.toggle('preview-mode');

  // Update button label wherever it exists
  const b1 = document.getElementById('btn-preview');
  const b2 = document.getElementById('btn-preview-main');
  [b1,b2].forEach(btn=>{
    if(!btn) return;
    btn.textContent = on ? '↩ Back to Edit' : '👁 Preview';
    btn.title = on ? 'Return to editor' : 'Preview (A4) — opens focus mode';
  });

  // Ensure preview is visible and positioned correctly
  const ep = document.getElementById('ep');
  const ef = document.getElementById('ef');

  if(on){
    if(ep) { ep.style.display = 'flex'; ep.scrollTop = 0; }
    if(ef) { /* hidden by CSS in preview-mode, keep safe */ }
    // bring preview into view (prevents "tiny at top" confusion)
    setTimeout(()=>{ try{ ep && ep.scrollIntoView({behavior:'smooth', block:'start'}); }catch(e){} }, 0);
  }else{
    if(ep) ep.style.display = ''; // revert to CSS control
    setTimeout(()=>{ try{ ef && ef.scrollIntoView({behavior:'smooth', block:'start'}); }catch(e){} }, 0);
  }
  // Ensure the doc is centered/scaled correctly after layout change
  try{ requestAnimationFrame(()=>{ if(typeof fitDoc==='function') fitDoc(); }); }catch(e){}
}

function soonModule(name){
  toast(`${name} module is coming soon — included in the Smart Business Toolkit roadmap.`, 'ok');
}

/* ─── RECEIPTS ─── */
let currentReceipt = null;
// openNewReceipt — replaced

// async function saveReceipt — replaced

// async function renderReceipts — replaced

async function deleteReceipt(id) {
  confirm2('Delete Receipt', 'Permanently delete this receipt?', async () => {
    await dbDel('receipts', id);
    await updateCounts();
    renderReceipts();
    toast('Receipt deleted', 'er');
  });
}

/* FIX BUG 1: exportReceiptPDF — rd() was called AFTER setting .dtw text, which
   re-rendered the DOM and created fresh elements with hardcoded "Invoice" text,
   discarding the "RECEIPT" changes. Fix: pass a docLabel into rd() so the label
   is baked into the render itself, not patched onto detached elements after. */
async function exportReceiptPDF(num) {
  const receipts = await dbAll('receipts');
  const receipt = receipts.find(r => r.num === num);
  if (!receipt) { toast('Receipt not found','er'); return; }

  // Snapshot ALL editor state that will be temporarily overwritten
  const savedNum    = gv('e-num');
  const savedClient = gv('e-cname');
  const savedStatus = gv('e-status');
  const savedCur    = gv('e-cur');
  const savedVatOn  = $('e-vaton')?.checked;
  const savedDisc   = gv('e-disc');
  const savedRows   = JSON.parse(JSON.stringify(eState.rows)); // deep copy
  const savedLogo   = eState.logo;

  try {
    // Inject business profile from settings so receipt always shows correct business info
    const s = _settings;
    sv('e-bname',  s.name  || '');
    sv('e-btag',   s.tag   || '');
    sv('e-baddr',  s.addr  || '');
    sv('e-bphone', s.phone || '');
    sv('e-bemail', s.email || '');
    sv('e-breg',   s.reg   || '');
    sv('e-bank',   s.bank  || '');
    sv('e-aname',  s.aname || '');
    sv('e-anum',   s.anum  || '');
    sv('e-sort',   s.sort  || '');
    if (s.logo) { eState.logo = s.logo; } // ensure logo shows on receipt
    // Inject receipt header values
    sv('e-num',    receipt.num);
    sv('e-cname',  receipt.payerName || receipt.clientName || '');
    sv('e-status', 'paid');
    sv('e-cur',    receipt.currency || _settings.cur || 'GBP');
    sv('e-disc',   '0');
    if ($('e-vaton')) $('e-vaton').checked = false; // receipts don't show VAT breakdown

    // FIX: Inject the receipt amount as a line item so the total is correct.
    // Without this eState.rows still held whatever the editor had (often zero/empty).
    const desc = receipt.description
      ? receipt.description
      : (receipt.paymentMethod ? `Payment received — ${receipt.paymentMethod}` : (receipt.notes || 'Payment received'));
    eState.rows = [{ desc, qty: 1, price: receipt.amount, tax: 0 }];
    renderRows();

    // Render as RECEIPT (label baked into all layout functions)
    rd('RECEIPT');

    await exportPDF();
  } finally {
    // Always restore the editor to its previous state
    sv('e-num',    savedNum);
    sv('e-cname',  savedClient);
    sv('e-status', savedStatus);
    sv('e-cur',    savedCur);
    sv('e-disc',   savedDisc);
    if ($('e-vaton')) $('e-vaton').checked = savedVatOn;
    eState.rows = savedRows;
    eState.logo = savedLogo;
    renderRows();
    rd(); // re-render as Invoice
  }
}

/* ─── INIT ─── */
async function init() {
  // Always initialise the DB first so it is ready regardless of licence state.
  // The lock screen (z-index 9999) blocks all UI interaction until a valid
  // key is entered — no need to gate DB init behind the licence check.
  await initDB();
  _settings = await getSetting();
  _numCfg = {
    pfx:(_settings.pfx||'INV').toUpperCase(),
    sep:_settings.sep!==undefined?_settings.sep:'-',
    pad:parseInt(_settings.pad)||4, start:parseInt(_settings.start)||1
  };
  // ── Populate all currency dropdowns once from CURRENCIES master list ──
  buildCurrencySelect($('s-cur'),   { selected: _settings.cur||'GBP' });
  buildCurrencySelect($('e-cur'),   { selected: _settings.cur||'GBP' });
  buildCurrencySelect($('ob-cur'),  { placeholder: 'Choose currency…', selected: _settings.cur||'' });
  buildCurrencySelect($('rct-cur'), { selected: _settings.cur||'GBP' });
  // Sync Getting Started visibility on every app boot
  _updateGettingStarted();
  initDP('dp1','e-d1', (d,str) => { const due=new Date(d); due.setDate(due.getDate()+30); dpSetDate('dp2',due); });
  initDP('dp2','e-d2');
  sv('e-bname',_settings.name||''); sv('e-btag',_settings.tag||''); sv('e-baddr',_settings.addr||'');
  sv('e-bphone',_settings.phone||''); sv('e-bemail',_settings.email||''); sv('e-breg',_settings.reg||'');
  sv('e-bank',_settings.bank||''); sv('e-aname',_settings.aname||''); sv('e-anum',_settings.anum||''); sv('e-sort',_settings.sort||'');
  sv('e-notes',_settings.notes||''); sv('e-terms',_settings.terms||'Net 30 days');
  buildCurrencySelect($('e-cur'), { selected: _settings.cur||'GBP' });
  sv('e-disc','0'); sv('e-status','draft');
  sv('e-vat', _settings.vat||'0');
  const _vaton = document.getElementById('e-vaton'); if(_vaton) _vaton.checked = false;
  sv('e-num', _settings.pfx+(_settings.sep!==undefined?_settings.sep:'-')+peekNum());
  const td = themeDefaults[eState.docTheme]||themeDefaults.blue;
  sv('col-p',td.p); sv('col-a',td.a);
  if($('sw-p-bg')) $('sw-p-bg').style.background=td.p;
  if($('sw-a-bg')) $('sw-a-bg').style.background=td.a;
  renderRows(); rd();
  document.querySelectorAll('.screen,.sflex').forEach(el=>{el.style.display='none';el.classList.remove('on');});
  // Run licence check AFTER app is fully ready.
  // Lock screen covers UI — if no licence found, user sees lock screen over the app.
  // If licence found (meta tag or localStorage), app opens normally.
  const _lic = await bkpBoot();
  // body is now visible (revealed by bkpApplyLicence or _bkpShowLock)
  if (_lic) {
    go('dash');
    const _ob = localStorage.getItem('ik_onboarded');
    if (!_ob || !_settings.name || !_settings.cur) {
      setTimeout(() => openOnboarding(), 400);
    }
  }
  // If not licensed, lock screen is showing — do nothing
}

/* ─── WINDOW EXPORTS ─── */
window.go=go; window.openOnboarding=openOnboarding; window._updateGettingStarted=_updateGettingStarted; window.openNewInvoice=openNewInvoice;
window.doBackup=doBackup; window.doRestore=doRestore; window.saveSetting=saveSetting;
window.setDefaultDocTheme=setDefaultDocTheme; window.setDocTheme=setDocTheme; window.setLayout=setLayout;
window.exportPDF=exportPDF; window.saveInvoice=saveInvoice; window.loadInvoice=loadInvoice;
window.deleteInvoice=deleteInvoice; window.duplicateInvoice=duplicateInvoice; window.resetDraft=resetDraft;
window.resetDraftOnly=resetDraftOnly; window.openClientModal=openClientModal; window.saveClient=saveClient;
window.deleteClient=deleteClient; window.openItemModal=openItemModal; window.saveItem=saveItem;
window.deleteItem=deleteItem; window.openResetAllModal=openResetAllModal; window.executeResetAll=executeResetAll;
window.checkDelConfirm=checkDelConfirm; window.openM=openM; window.closeM=closeM;
window.obNavigate=obNavigate; window.rctSetMode=rctSetMode; window.rctSelectClient=rctSelectClient; window.openReceiptForClient=openReceiptForClient; window.openNewReceipt=openNewReceipt; window.openReceiptFromInvoice=openReceiptFromInvoice; window.pwaInstall=pwaInstall; window.skipOnboarding=skipOnboarding;
window.loadSampleData=loadSampleData; window.clearSampleData=clearSampleData; window.confirmClear=confirmClear;
window.addRow=addRow; window.delRow=delRow; window.applyIAC=applyIAC; window.fillClient=fillClient;
window.saveCurrentClient=saveCurrentClient; window.handleLogo=handleLogo; window.removeLogo=removeLogo;
window.handleSettingsLogo=handleSettingsLogo; window.removeSettingsLogo=removeSettingsLogo;
window.handleObLogo=handleObLogo; window.removeObLogo=removeObLogo;
window.toggleDP=toggleDP; window.dpMove=dpMove; window.dpPick=dpPick; window.showIAC=showIAC;
window.rd=rd; window.applyDocColors=applyDocColors; window.scaleDocPreview=scaleDocPreview;
window.updateNumPreview=updateNumPreview; window.renderClients=renderClients;
window.renderInvoices=renderInvoices; window.cAC=cAC; window.renderItems=renderItems;
window.openNewReceipt=openNewReceipt; window.openReceiptFromInvoice=openReceiptFromInvoice; window.saveReceipt=saveReceipt;
window.renderReceipts=renderReceipts; window.exportReceiptPDF=exportReceiptPDF;
window.deleteReceipt=deleteReceipt;
window.printInvoice=printInvoice; window.exportPDFById=exportPDFById; window.printInvoiceById=printInvoiceById;
window._printToPDF=_printToPDF;
window.toggleSidebar=toggleSidebar;


/* ═══════════════════════════════════════════════
   PWA — SERVICE WORKER + INSTALL PROMPT
═══════════════════════════════════════════════ */

// Service worker registration — enables offline use and installability
// Service worker via inline script tag injection — blob: URLs are blocked by browsers
// for SW registration. The only way to register a SW from a single HTML file is to
// write a <script> tag with id into the page and point the SW at that script's src,
// but that also doesn't work. The correct approach for a file:// / single-file app
// is to skip the SW entirely and rely on IndexedDB for persistence (already done).
// We keep the install prompt and PWA manifest — those work without a SW in many browsers.
// Uncomment and deploy to a real server with a separate sw.js for full offline caching.
/* SW registered inline via PWA bootstrap script in <head> */
if (location.protocol === 'file:') {
  console.log('[InvoKit] Running as local file — SW not available (requires HTTPS). Data is safely stored in IndexedDB.');
}

// Capture the native browser install prompt
let _pwaPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  _pwaPrompt = e;
  const btn = document.getElementById('pwa-install-btn');
  if (btn) btn.style.display = 'inline-flex';
});

window.addEventListener('appinstalled', () => {
  _pwaPrompt = null;
  const btn = document.getElementById('pwa-install-btn');
  if (btn) btn.style.display = 'none';
  toast('InvoKit Pro installed! ✓', 'ok');
});

window.pwsInstall = async function() {
  if (_pwaPrompt) {
    _pwaPrompt.prompt();
    const { outcome } = await _pwaPrompt.userChoice;
    if (outcome === 'accepted') { _pwaPrompt = null; document.getElementById('pwa-install-btn').style.display = 'none'; }
  } else {
    // Fallback — show manual instructions
    showPwaManualBanner();
  }
};

// iOS Safari does not fire beforeinstallprompt — show a manual banner instead
function isIosSafari() {
  const ua = navigator.userAgent;
  return /iphone|ipad|ipod/i.test(ua) && /safari/i.test(ua) && !/crios|fxios|opios/i.test(ua);
}
function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
}

function showPwaManualBanner() {
  if (document.getElementById('pwa-banner')) return;
  const isIos = isIosSafari();
  const banner = document.createElement('div');
  banner.id = 'pwa-banner';
  banner.style.cssText = `
    position:fixed;bottom:0;left:0;right:0;z-index:3000;
    background:#0f2447;color:#fff;padding:14px 18px 18px;
    box-shadow:0 -4px 24px rgba(0,0,0,.35);
    display:flex;align-items:flex-start;gap:14px;
    font-family:'Segoe UI',system-ui,sans-serif;
    border-top:3px solid #e8a020;
  `;
  const icon = `<div style="width:44px;height:44px;background:#e8a020;border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:1.1rem;color:#0f2447;flex-shrink:0;">BK</div>`;
  const iosMsg = `Tap the <strong>Share</strong> button (⎋) then <strong>"Add to Home Screen"</strong> to install InvoKit Pro.`;
  const androidMsg = `Tap your browser's <strong>menu (⋮)</strong> then <strong>"Add to Home screen"</strong> or <strong>"Install app"</strong>.`;
  banner.innerHTML = `
    ${icon}
    <div style="flex:1;">
      <div style="font-weight:700;font-size:.95rem;margin-bottom:4px;">Install InvoKit Pro</div>
      <div style="font-size:.8rem;color:rgba(255,255,255,.75);line-height:1.55;">${isIos ? iosMsg : androidMsg}</div>
    </div>
    <button onclick="document.getElementById('pwa-banner').remove()" style="background:none;border:none;color:rgba(255,255,255,.5);font-size:1.2rem;cursor:pointer;padding:2px 6px;flex-shrink:0;">×</button>`;
  document.body.appendChild(banner);
}

// On iOS Safari, show the install banner once (after 5 seconds) if not already installed
if (isIosSafari() && !isStandalone() && !sessionStorage.getItem('bk_ios_banner_shown')) {
  sessionStorage.setItem('bk_ios_banner_shown', '1');
  setTimeout(showPwaManualBanner, 5000);
}

window.showPwaManualBanner = showPwaManualBanner;

function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

function sendSupportWhatsApp() {
  const name    = document.getElementById('sup-name').value.trim();
  const type    = document.getElementById('sup-type').value;
  const msg     = document.getElementById('sup-msg').value.trim();
  if (!msg) { toast('Please enter a message','er'); return; }
  const typeLabels = { general:'General Question', bug:'Bug Report', feature:'Feature Request', billing:'Licence / Billing' };
  const text = encodeURIComponent(
    'Hi InvoKit Pro Support 👋\n' +
    'Name: ' + (name || 'Not provided') + '\n' +
    'Type: ' + typeLabels[type] + '\n\n' +
    msg
  );
  window.open('https://wa.me/447310211892?text=' + text, '_blank');
  document.getElementById('sup-status').textContent = 'Opening WhatsApp…';
  setTimeout(() => document.getElementById('sup-status').textContent = '', 3000);
}

function _showIOSInstallHint() {
  // Only show on iOS Safari, only if not already installed as PWA
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isStandalone = window.navigator.standalone === true;
  const alreadyShown = localStorage.getItem('invokitpro_ios_hint_shown');
  if (!isIOS || !isSafari || isStandalone || alreadyShown) return;
  localStorage.setItem('invokitpro_ios_hint_shown', '1');
  const banner = document.getElementById('ios-install-banner');
  if (banner) banner.style.display = 'flex';
}

function _dismissIOSBanner() {
  const banner = document.getElementById('ios-install-banner');
  if (banner) banner.style.display = 'none';
}

// ════════════════════════════════════════════
//  ONBOARDING — v2.0
// ════════════════════════════════════════════
let _obLogo = null;

function openOnboarding() {
  _obStep = 0;
  _obLogo = _settings.logo || null;
  const lic = window._bkpLicence;

  // Ensure ob-cur is populated before we set its value
  buildCurrencySelect(document.getElementById('ob-cur'), {
    placeholder: 'Choose currency…',
    selected: _settings.cur || ''
  });

  // Lock business name from licence
  const el = document.getElementById('ob-bname');
  if (el && lic && lic.o) el.value = lic.o;

  // Pre-fill any existing settings
  const prefill = {
    'ob-tag':   _settings.tag   || '',
    'ob-cur':   _settings.cur   || '',
    'ob-email': _settings.email || (lic && lic.e) || '',
    'ob-phone': _settings.phone || '',
    'ob-addr':  _settings.addr  || '',
    'ob-reg':   _settings.reg   || '',
    'ob-bank':  _settings.bank  || '',
    'ob-aname': _settings.aname || '',
    'ob-anum':  _settings.anum  || '',
    'ob-sort':  _settings.sort  || '',
  };
  Object.entries(prefill).forEach(([id, val]) => {
    const e = document.getElementById(id);
    if (e && val) e.value = val;
  });
  if (_settings.logo) _obShowLogo(_settings.logo);

  _obRender();
  const modal = document.getElementById('m-ob');
  if (modal) { modal.classList.add('on'); modal.style.display = 'flex'; }
}

function _obRender() {
  const s0 = document.getElementById('ob-s0');
  const s1 = document.getElementById('ob-s1');
  if (s0) s0.style.display = _obStep === 0 ? 'block' : 'none';
  if (s1) s1.style.display = _obStep === 1 ? 'block' : 'none';

  const stepNum = document.getElementById('ob-step-num');
  if (stepNum) stepNum.textContent = _obStep + 1;

  const dot0 = document.getElementById('ob-dot-0');
  const dot1 = document.getElementById('ob-dot-1');
  if (dot0) dot0.style.background = 'var(--' + (_obStep === 0 ? 'P' : 'ok,#059669') + ')';
  if (dot1) dot1.style.background = _obStep === 1 ? 'var(--P)' : 'var(--bd)';

  const titleEl = document.getElementById('ob-title');
  if (titleEl) titleEl.textContent = _obStep === 0
    ? '👋 Set Up Your Business Profile'
    : '🏦 Bank Details + Logo';

  const back = document.getElementById('ob-back-btn');
  if (back) back.style.display = _obStep > 0 ? 'inline-flex' : 'none';

  const next = document.getElementById('ob-next-btn');
  if (next) next.textContent = _obStep === 1 ? '🚀 Start Invoicing' : 'Next →';

  // Clear errors
  ['ob-err-0','ob-err-1'].forEach(id => {
    const e = document.getElementById(id);
    if (e) e.textContent = '';
  });
}

function _obVal0() {
  const required = [
    { id: 'ob-bname', label: 'Business Name' },
    { id: 'ob-tag',   label: 'Tagline / Type' },
    { id: 'ob-cur',   label: 'Currency' },
    { id: 'ob-email', label: 'Email' },
    { id: 'ob-phone', label: 'Phone' },
    { id: 'ob-addr',  label: 'Address' },
  ];
  const err = document.getElementById('ob-err-0');
  for (const f of required) {
    const el = document.getElementById(f.id);
    if (!el || !el.value.trim()) {
      if (err) err.textContent = '⚠️ ' + f.label + ' is required.';
      if (el) el.focus();
      return false;
    }
  }
  const email = (document.getElementById('ob-email') || {}).value || '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    if (err) err.textContent = '⚠️ Please enter a valid email address.';
    document.getElementById('ob-email').focus();
    return false;
  }
  return true;
}

function _obVal1() {
  const required = [
    { id: 'ob-bank',  label: 'Bank Name' },
    { id: 'ob-aname', label: 'Account Name' },
    { id: 'ob-anum',  label: 'Account Number' },
  ];
  const err = document.getElementById('ob-err-1');
  for (const f of required) {
    const el = document.getElementById(f.id);
    if (!el || !el.value.trim()) {
      if (err) err.textContent = '⚠️ ' + f.label + ' is required.';
      if (el) el.focus();
      return false;
    }
  }
  return true;
}

async function _obSave() {
  const g = id => (document.getElementById(id) || {}).value || '';
  if (typeof _enforceFirstTimeOrgRegistrationFromOnboarding === 'function') { if (!_enforceFirstTimeOrgRegistrationFromOnboarding()) return; }
  const obj = {
    name:  g('ob-bname'), tag:   g('ob-tag'),   email: g('ob-email'),
    phone: g('ob-phone'), addr:  g('ob-addr'),   reg:   g('ob-reg'),
    cur:   g('ob-cur'),   bank:  g('ob-bank'),   aname: g('ob-aname'),
    anum:  g('ob-anum'),  sort:  g('ob-sort'),
    logo:  _obLogo || _settings.logo || null,
    web: _settings.web||'', vat: _settings.vat||'',
    terms: _settings.terms||'', notes: _settings.notes||'',
    pfx: (_settings.pfx||'INV').toUpperCase(),
    sep: _settings.sep !== undefined ? _settings.sep : '-',
    pad: _settings.pad||'4', start: _settings.start||'1',
    docTheme: _settings.docTheme||'blue',
  };
  const existing = await getSetting();
  if (existing && existing.id) obj.id = existing.id;
  await dbPut('settings', obj);
  _settings = obj;
  _numCfg = { pfx:obj.pfx, sep:obj.sep, pad:parseInt(obj.pad)||4, start:parseInt(obj.start)||1 };

  // Sync to settings page
  buildCurrencySelect($('s-cur'), { selected: obj.cur||'GBP' });
  buildCurrencySelect($('e-cur'), { selected: obj.cur||'GBP' });
  [['s-name',obj.name],['s-tag',obj.tag],['s-email',obj.email],['s-phone',obj.phone],
   ['s-addr',obj.addr],['s-reg',obj.reg],['s-cur',obj.cur],['s-bank',obj.bank],
   ['s-aname',obj.aname],['s-anum',obj.anum],['s-sort',obj.sort]
  ].forEach(([id,v]) => { const e=document.getElementById(id); if(e) e.value=v||''; });
  // Sync locked editor fields too
  [['e-bname',obj.name],['e-btag',obj.tag],['e-baddr',obj.addr],
   ['e-bphone',obj.phone],['e-bemail',obj.email],['e-breg',obj.reg]
  ].forEach(([id,v]) => { const e=document.getElementById(id); if(e) e.value=v||''; });

  if (obj.logo && typeof applyLogoUI==='function') {
    applyLogoUI(obj.logo,'s-logo-img','s-logo-txt','s-logo-rmv');
    applyLogoUI(obj.logo,'logo-img','logo-txt-wrap','logo-rmv');
    if (typeof eState !== 'undefined') eState.logo = obj.logo;
  }
  // Also sync logo preview in onboarding modal if still open
  if (obj.logo) {
    const obImg = document.getElementById('ob-logo-img');
    const obPrev = document.getElementById('ob-logo-preview');
    if (obImg && obPrev) { obImg.src = obj.logo; obPrev.style.display = 'flex'; }
  }

  localStorage.setItem('ik_onboarded','1');
  _updateGettingStarted(); // hide 'Getting Started' now that setup is complete
  if (typeof _updateBizNameDisplay==='function') _updateBizNameDisplay();
  if (typeof _restoreNameLock==='function') _restoreNameLock();

  // Close modal completely
  const modal = document.getElementById('m-ob');
  if (modal) { modal.classList.remove('on'); modal.style.display='none'; }

  go('dash');
  setTimeout(() => { if(typeof toast==='function') toast('Welcome, '+obj.name+'! ✓','ok'); }, 400);
}

async function obNavigate(dir) {
  if (dir === 1) {
    if (_obStep === 0) {
      if (!_obVal0()) return;
      _obStep = 1;
      _obRender();
    } else {
      if (!_obVal1()) return;
      const btn = document.getElementById('ob-next-btn');
      if (btn) { btn.disabled=true; btn.textContent='Setting up…'; }
      try {
        await _obSave();
      } catch(err) {
        console.error('Onboarding save error:', err);
        const e = document.getElementById('ob-err-1');
        if (e) e.textContent = '⚠️ Save failed — please try again.';
        if (btn) { btn.disabled=false; btn.textContent='🚀 Start Invoicing'; }
      }
    }
  } else if (dir === -1 && _obStep > 0) {
    _obStep--;
    _obRender();
  }
}

function obLogoPreview(evt) {
  const file = evt.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => { _obLogo = e.target.result; _obShowLogo(e.target.result); };
  reader.readAsDataURL(file);
}
function _obShowLogo(url) {
  const p = document.getElementById('ob-logo-preview');
  const img = document.getElementById('ob-logo-img');
  if (p && img) { img.src=url; p.style.display='flex'; }
}
function obLogoRemove() {
  _obLogo = null;
  const p = document.getElementById('ob-logo-preview');
  const inp = document.getElementById('ob-logo-inp');
  if (p) p.style.display='none';
  if (inp) inp.value='';
}


// ── PWA Install ───────────────────────────────────────────────────────────────
let _deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  _deferredInstallPrompt = e;
  const btn = document.getElementById('pwa-install-btn');
  if (btn) btn.style.display = 'inline-flex';
});

window.addEventListener('appinstalled', () => {
  _deferredInstallPrompt = null;
  const btn = document.getElementById('pwa-install-btn');
  if (btn) btn.style.display = 'none';
  if (typeof toast === 'function') toast('InvoKit Pro installed ✓', 'ok');
});

function pwaInstall() {
  if (!_deferredInstallPrompt) return;
  _deferredInstallPrompt.prompt();
  _deferredInstallPrompt.userChoice.then(result => {
    if (result.outcome === 'accepted') {
      _deferredInstallPrompt = null;
      const btn = document.getElementById('pwa-install-btn');
      if (btn) btn.style.display = 'none';
    }
  });
}

// ════════════════════════════════════════════════════════════════
//  RECEIPT MODULE — v2.0
// ════════════════════════════════════════════════════════════════

function rctSetMode(mode) {
  const clientBtn  = document.getElementById('rct-mode-client');
  const walkinBtn  = document.getElementById('rct-mode-walkin');
  const clientFld  = document.getElementById('rct-field-client');
  const walkinFld  = document.getElementById('rct-field-walkin');
  const modeInp    = document.getElementById('rct-mode-val');
  if (!clientBtn) return;
  if (mode === 'client') {
    clientBtn.style.background = 'var(--P)'; clientBtn.style.color = '#fff';
    walkinBtn.style.background = 'var(--sur2)'; walkinBtn.style.color = 'var(--ink2)';
    if (clientFld) clientFld.style.display = 'block';
    if (walkinFld) walkinFld.style.display = 'none';
  } else {
    walkinBtn.style.background = 'var(--P)'; walkinBtn.style.color = '#fff';
    clientBtn.style.background = 'var(--sur2)'; clientBtn.style.color = 'var(--ink2)';
    if (clientFld) clientFld.style.display = 'none';
    if (walkinFld) walkinFld.style.display = 'block';
  }
  if (modeInp) modeInp.value = mode;
}

async function rctClientSearch(val) {
  const dd = document.getElementById('rct-client-dropdown');
  if (!dd) return;
  if (!val || val.length < 1) { dd.style.display = 'none'; return; }
  const all = await dbAll('clients');
  const matches = all.filter(c => c.name.toLowerCase().includes(val.toLowerCase())).slice(0, 6);
  if (!matches.length) { dd.style.display = 'none'; return; }
  dd.innerHTML = matches.map(c =>
    `<div onclick="rctSelectClient(${c.id},'${eh(c.name)}')"
      style="padding:8px 12px;cursor:pointer;font-size:.85rem;border-bottom:1px solid var(--bd);"
      onmouseover="this.style.background='var(--sur2)'" onmouseout="this.style.background=''">${eh(c.name)}${c.phone ? ` <span style="color:var(--muted);font-size:.75rem;">· ${eh(c.phone)}</span>` : ''}</div>`
  ).join('');
  dd.style.display = 'block';
}

function rctSelectClient(id, name) {
  const inp = document.getElementById('rct-client');
  const cid = document.getElementById('rct-client-id');
  const dd  = document.getElementById('rct-client-dropdown');
  if (inp) inp.value = name;
  if (cid) cid.value = id;
  if (dd)  dd.style.display = 'none';
}

function openNewReceipt() {
  setDirty(false);
  currentReceipt = null;
  const rctNum = 'RCT-' + String(Math.max(1, lsGet('rctN') + 1)).padStart(4,'0');
  const _s = (id, val) => { const e = document.getElementById(id); if(e) e.value = val||''; };
  _s('rct-num',    rctNum);
  _s('rct-client', '');
  _s('rct-client-id', '');
  _s('rct-payer',  '');
  _s('rct-payer-phone', '');
  _s('rct-desc',   '');
  _s('rct-amount', '');
  buildCurrencySelect(document.getElementById('rct-cur'), { selected: _settings.cur||'GBP' });
  // rct-cur value is set by buildCurrencySelect above
  _s('rct-method', 'Bank Transfer');
  _s('rct-date',   new Date().toISOString().split('T')[0]);
  _s('rct-notes',  '');
  rctSetMode('client');
  openM('m-receipt');
}

async function openReceiptForClient(clientId) {
  // "Mark Paid" from client row — pre-fill receipt with client details
  currentReceipt = null;
  const client = await dbGet('clients', clientId);
  if (!client) { openNewReceipt(); return; }
  const rctNum = 'RCT-' + String(Math.max(1, lsGet('rctN') + 1)).padStart(4,'0');
  const _s = (id, val) => { const e = document.getElementById(id); if(e) e.value = val||''; };
  _s('rct-num',       rctNum);
  _s('rct-client',    client.name);
  _s('rct-client-id', clientId);
  _s('rct-payer',     '');
  _s('rct-payer-phone','');
  _s('rct-desc',      '');
  _s('rct-amount',    '');
  _s('rct-cur',       _settings.cur || 'GBP');
  _s('rct-method',    'Bank Transfer');
  _s('rct-date',      new Date().toISOString().split('T')[0]);
  _s('rct-notes',     '');
  rctSetMode('client');
  openM('m-receipt');
}

async function saveReceipt() {
  const mode    = (document.getElementById('rct-mode-val')||{}).value || 'client';
  const desc    = (document.getElementById('rct-desc')||{}).value?.trim() || '';
  const amount  = parseFloat((document.getElementById('rct-amount')||{}).value) || 0;
  const date    = (document.getElementById('rct-date')||{}).value || '';
  const method  = (document.getElementById('rct-method')||{}).value || 'Bank Transfer';
  const cur     = (document.getElementById('rct-cur')||{}).value || _settings.cur || 'GBP';
  const notes   = (document.getElementById('rct-notes')||{}).value?.trim() || '';
  const rctNum  = (document.getElementById('rct-num')||{}).value ||
                  'RCT-' + String(Math.max(1, lsGet('rctN') + 1)).padStart(4,'0');

  // Validation
  if (!desc) { toast('Description is required — what is this payment for?', 'er'); return; }
  if (amount <= 0) { toast('Amount must be greater than 0', 'er'); return; }

  let payerName = '';
  let payerPhone = '';
  let clientId = null;

  if (mode === 'walkin') {
    payerName = (document.getElementById('rct-payer')||{}).value?.trim() || '';
    payerPhone = (document.getElementById('rct-payer-phone')||{}).value?.trim() || '';
    if (!payerName) { toast('Payer name is required for walk-in receipts', 'er'); return; }
  } else {
    payerName  = (document.getElementById('rct-client')||{}).value?.trim() || '';
    clientId   = parseInt((document.getElementById('rct-client-id')||{}).value) || null; if (isNaN(clientId)) clientId = null;
  }

  const obj = {
    num: rctNum, payerName, payerPhone, clientId,
    description: desc, amount, currency: cur,
    paymentMethod: method, issueDate: date, notes,
    type: mode, savedAt: Date.now()
  };

  const btn = document.querySelector('#m-receipt .btn-a');
  const orig = btn ? btn.textContent : '';
  if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }

  try {
    if (currentReceipt && currentReceipt.id) obj.id = currentReceipt.id;
    await dbPut('receipts', obj);
    if (!currentReceipt) {
      lsSet('rctN', lsGet('rctN') + 1);
    }
    await renderReceipts();
    await updateCounts();
    closeM('m-receipt');
    toast('Receipt saved ✓', 'ok');
  } catch(e) {
    console.error('saveReceipt error:', e);
    const msg = e && e.message ? e.message : String(e);
    toast('Save failed: ' + msg.slice(0,60), 'er');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = orig; }
  }

  setDirty(false);
}

function printReceipt() {
  const sel = document.querySelector('#rct-tbody tr.sel, #rct-tbody tr.selected');
  const first = document.querySelector('#rct-tbody tr[data-id]');
  const row = sel || first;
  if (!row) { toast('Select a receipt to print', 'er'); return; }
  const id = row.dataset.id;
  if (!id) { toast('No receipt found', 'er'); return; }
  (async () => {
    const r = await dbGet('receipts', id);
    if (!r) { toast('Receipt not found', 'er'); return; }
    const cur = r.cur || _settings.cur || 'GBP';
    const logo = r.logo || _settings.logo || '';
    const bname = r.bname || _settings.name || 'Business';
    const logoHTML = logo ? `<img src="${logo}" style="height:48px;max-width:120px;object-fit:contain;">` 
                           : `<div style="font-weight:800;font-size:1.1rem;color:#1a3a6b;">${bname}</div>`;
    const rows = (r.items||[]).map(it => {
      const qty = it.qty||1, price = it.price||0, amount = qty*price;
      return `<tr><td>${it.desc||''}</td><td>${qty}</td><td>${fmt(price,cur)}</td><td style="text-align:right;">${fmt(amount,cur)}</td></tr>`;
    }).join('');
    const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
    <title>InvoKit Pro v2.0 — Smart Business Toolkit (Offline)</title>
    <style>
      @page{size:A4 portrait;margin:18mm 20mm;}
      body{font-family:Inter,system-ui,sans-serif;font-size:13px;color:#111;margin:0;}
      .head{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:14px;border-bottom:2px solid #1a3a6b;margin-bottom:20px;}
      .title{font-size:22px;font-weight:800;letter-spacing:2px;color:#1a3a6b;text-transform:uppercase;}
      .sub{font-size:.78rem;color:#888;margin-top:3px;}
      table{width:100%;border-collapse:collapse;margin-top:12px;}
      th{background:#f5f7fa;padding:8px 10px;text-align:left;font-size:.72rem;text-transform:uppercase;letter-spacing:.8px;color:#555;border-bottom:1px solid #ddd;}
      td{padding:9px 10px;border-bottom:1px solid #eee;font-size:.88rem;}
      .tot td{font-weight:700;border-top:2px solid #1a3a6b;border-bottom:none;font-size:.95rem;}
      .meta{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:18px;}
      .ml{font-size:.7rem;text-transform:uppercase;letter-spacing:1px;color:#999;margin-bottom:3px;}
      .mv{font-weight:600;}
      .footer{margin-top:28px;font-size:.7rem;color:#aaa;text-align:center;border-top:1px solid #eee;padding-top:8px;}
    </style></head><body>
    <div class="head">
      <div>${logoHTML}</div>
      <div style="text-align:right;">
        <div class="title">Receipt</div>
        <div class="sub">${r.num||''}</div>
        <div class="sub">Date: ${r.date||''}</div>
      </div>
    </div>
    <div class="meta">
      <div><div class="ml">Received From</div><div class="mv">${r.clientName||r.client||''}</div></div>
      <div><div class="ml">Payment Method</div><div class="mv">${r.method||''}</div></div>
    </div>
    <table>
      <thead><tr><th>Description</th><th>Qty</th><th>Unit Price</th><th style="text-align:right;">Amount</th></tr></thead>
      <tbody>${rows}<tr class="tot"><td colspan="3">Total Received</td><td style="text-align:right;">${fmt(r.total||0,cur)}</td></tr></tbody>
    </table>
    ${r.notes?`<div style="margin-top:14px;font-size:.82rem;color:#555;"><strong>Notes:</strong> ${r.notes}</div>`:''}
    <div class="footer">© 2025 Creovate Glocal Ltd. All rights reserved. RC: 9174160 · getinvokitpro.com</div>
    </body></html>`;
    const win = window.open('','_blank');
    if (!win) { toast('Allow popups to print', 'er'); return; }
    win.document.write(html);
    win.document.close();
    setTimeout(() => { win.print(); }, 450);
  })();
}


async function renderReceipts() {
  const receipts = await dbAll('receipts');
  receipts.sort((a,b) => b.savedAt - a.savedAt);
  const tbody = document.getElementById('rct-tbody');
  if (!tbody) return;
  if (!receipts.length) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--muted);">No receipts yet. Record your first payment!</td></tr>';
    return;
  }
  const cur = _settings.cur || 'GBP';
  tbody.innerHTML = receipts.map(r => {
    const sym = (CURS[r.currency||cur]||CURS[cur]||{s:'£'}).s;
    const name = r.payerName || r.clientName || '—';
    const desc = r.description || r.notes || '—';
    return `<tr data-id="${r.id}" onclick="selectReceiptRow(this)">
      <td class="mono">${eh(r.num||'—')}</td>
      <td><strong>${eh(name)}</strong>${r.type==='walkin'?` <span style="font-size:.65rem;color:var(--muted);background:var(--sur3);padding:1px 4px;border-radius:8px;">walk-in</span>`:''}</td>
      <td style="font-size:.8rem;color:var(--ink2);">${eh(desc)}</td>
      <td class="mono">${eh(r.issueDate||'—')}</td>
      <td class="r mono">${sym}${(r.amount||0).toLocaleString('en-US',{minimumFractionDigits:2})}</td>
      <td><div style="display:flex;gap:4px;">
        <button class="btn btn-o btn-xs" onclick="exportReceiptPDF('${eh(r.num||'')}')">PDF</button>
        <button class="btn btn-d btn-xs" onclick="deleteReceipt(${r.id})">Del</button>
      </div></td>
    </tr>`;
  }).join('');
}


function selectReceiptRow(tr){
  try{
    document.querySelectorAll('#rct-tbody tr').forEach(r=>r.classList.remove('sel','selected'));
    tr.classList.add('sel');
  }catch(e){}
}

async function openReceiptFromInvoice(invId) {
  const inv = await dbGet('invoices', invId);
  if (!inv) { openNewReceipt(); return; }
  currentReceipt = null;
  const rctNum = 'RCT-' + String(Math.max(1, lsGet('rctN') + 1)).padStart(4,'0');
  const _s = (id, val) => { const e = document.getElementById(id); if(e) e.value = val||''; };
  _s('rct-num',       rctNum);
  _s('rct-client',    inv.clientName || '');
  _s('rct-client-id', '');
  _s('rct-payer',     '');
  _s('rct-payer-phone','');
  _s('rct-desc',      'Invoice ' + (inv.num||'') + (inv.clientName ? ' — ' + inv.clientName : ''));
  _s('rct-amount',    inv.total || '');
  buildCurrencySelect(document.getElementById('rct-cur'),
    { selected: inv.currency || _settings.cur || 'GBP' });
  _s('rct-method',    'Bank Transfer');
  _s('rct-date',      new Date().toISOString().split('T')[0]);
  _s('rct-notes',     'Invoice ref: ' + (inv.num||''));
  rctSetMode('client');
  openM('m-receipt');
}

// ── Editor section navigator (safe, UI-only) ───────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  try{
    const nav = document.getElementById('ef-nav');
    const secs = Array.from(document.querySelectorAll('#ef .efsec'));
    if(!nav || !secs.length) return;

    const map = [
      {k:['client'], label:'Client', icon:'👥'},
      {k:['invoice','details','meta'], label:'Details', icon:'🗓️'},
      {k:['line items','items','products','services'], label:'Items', icon:'🧾'},
      {k:['notes','terms'], label:'Notes', icon:'📝'},
      {k:['payment','bank'], label:'Payment', icon:'💳'},
      {k:['totals','summary'], label:'Totals', icon:'📌'},
    ];

    function pick(title){
      const t = title.toLowerCase();
      for(const m of map){ if(m.k.some(x=>t.includes(x))) return m; }
      return {label:title, icon:'•'};
    }

    const used = new Set();
    const items = [];

    secs.forEach((sec, idx) => {
      const titleEl = sec.querySelector('.efhdr-t');
      const title = (titleEl?.textContent || '').trim() || `Section ${idx+1}`;
      const m = pick(title);

      // Totals sticky on desktop
      if(m.label === 'Totals') sec.classList.add('sticky','span2');

      if(!sec.id){
        sec.id = 'efsec-' + m.label.toLowerCase().replace(/[^a-z0-9]+/g,'-');
      }

      if(!used.has(m.label)){
        used.add(m.label);
        items.push({label:m.label, icon:m.icon, target:sec.id});
      }
    });

    nav.innerHTML = items.map(it =>
      `<div class="ef-pill" data-target="${it.target}" title="Jump to ${it.label}">${it.icon} ${it.label}</div>`
    ).join('');

    function setActive(id){
      nav.querySelectorAll('.ef-pill').forEach(p=>{
        p.classList.toggle('active', p.getAttribute('data-target') === id);
      });
    }

    nav.addEventListener('click', (e) => {
      const pill = e.target.closest('.ef-pill');
      if(!pill) return;
      const target = pill.getAttribute('data-target');
      const el = document.getElementById(target);
      if(el){
        try{ el.scrollIntoView({behavior:'smooth', block:'start'}); }catch(err){ el.scrollIntoView(); }
        setActive(target);
      }
    });

    // Active pill on scroll (fallback safe)
    if('IntersectionObserver' in window){
      const obs = new IntersectionObserver((entries)=>{
        const vis = entries.filter(x=>x.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
        if(vis?.target?.id) setActive(vis.target.id);
      }, {threshold:[0.15,0.35,0.55]});
      secs.forEach(sec=>obs.observe(sec));
    } else {
      // minimal fallback: set first active
      setActive(items[0]?.target);
    }

    setActive(items[0]?.target);

  }catch(e){}
});




/* ───────── SAFE ACTIVATION OVERLAY FIX ───────── */

function forceHideGettingStarted() {
  const gs = document.getElementById("s-getting-started");
  if (!gs) return;

  // Remove class if used
  gs.classList.remove("on");

  // Hard fallback
  gs.style.display = "none";
}

/* After DOM ready */
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(forceHideGettingStarted, 80);
});

/* After full page load (extra safety) */
window.addEventListener("load", function () {
  setTimeout(forceHideGettingStarted, 150);
});
