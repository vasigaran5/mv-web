const API_BASE = '/backend/api';
export async function api(path, options={}) {
  const opts={credentials:'include', headers:{'Content-Type':'application/json', ...(options.headers||{})}, ...options};
  if(opts.body && typeof opts.body !== 'string') opts.body=JSON.stringify(opts.body);
  const r=await fetch(`${API_BASE}/${path}`,opts); const data=await r.json().catch(()=>({}));
  if(!r.ok) throw new Error(data.error||'Request failed'); return data;
}
export async function getSession(){ return api('auth.php?action=me'); }
export async function getCsrf(){ return api('auth.php?action=csrf'); }
