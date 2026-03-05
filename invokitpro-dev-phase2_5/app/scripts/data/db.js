/* ─── INDEXEDDB ─── */
/* FIX #14: Removed testDB() call from inside onupgradeneeded to prevent recursive DB open */
let DB;
function initDB() {
  return new Promise((res, rej) => {
    // iOS Safari Private Browsing blocks IndexedDB completely
    if (!window.indexedDB) {
      const msg = 'InvoKit Pro requires browser storage which is not available in Private Browsing mode. Please open in a normal (non-private) browser tab.';
      document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;padding:24px;text-align:center;font-family:system-ui;background:#0f2447;color:#fff"><div><div style="font-size:2rem;margin-bottom:16px">⚠️</div><div style="font-size:1.1rem;font-weight:700;margin-bottom:12px">Private Browsing Not Supported</div><div style="font-size:.95rem;opacity:.85;line-height:1.5">' + msg + '</div></div></div>';
      rej(new Error(msg)); return;
    }
    const req = indexedDB.open('invokitpro_v2', 2);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('invoices')) {
        const s = db.createObjectStore('invoices', { keyPath: 'id', autoIncrement: true });
        s.createIndex('num', 'num');
        s.createIndex('clientName', 'clientName');
        s.createIndex('status', 'status');
      }
      ['clients', 'items', 'settings'].forEach(name => {
        if (!db.objectStoreNames.contains(name)) {
          const s = db.createObjectStore(name, { keyPath: 'id', autoIncrement: true });
          if (name === 'clients') s.createIndex('name', 'name');
          if (name === 'items')   s.createIndex('name', 'name');
        }
      });
      if (!db.objectStoreNames.contains('receipts')) {
        db.createObjectStore('receipts', { keyPath: 'id', autoIncrement: true });
      }
    };
    req.onsuccess = e => { DB = e.target.result; res(DB); };
    req.onerror   = e => rej(e.target.error);
  });
}
const dbAll   = store      => new Promise((res,rej) => { const r=DB.transaction(store).objectStore(store).getAll(); r.onsuccess=()=>res(r.result); r.onerror=()=>rej(r.error); });
const dbGet   = (store,id) => new Promise((res,rej) => { const r=DB.transaction(store).objectStore(store).get(id); r.onsuccess=()=>res(r.result); r.onerror=()=>rej(r.error); });
const dbPut   = (store,obj)=> new Promise((res,rej) => { const r=DB.transaction(store,'readwrite').objectStore(store).put(obj); r.onsuccess=()=>res(r.result); r.onerror=()=>rej(r.error); });
const dbDel   = (store,id) => new Promise((res,rej) => { const r=DB.transaction(store,'readwrite').objectStore(store).delete(id); r.onsuccess=()=>res(); r.onerror=()=>rej(r.error); });
const dbClear = store      => new Promise((res,rej) => { const r=DB.transaction(store,'readwrite').objectStore(store).clear(); r.onsuccess=()=>res(); r.onerror=()=>rej(r.error); });
