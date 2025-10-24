import React,{useEffect,useState} from 'react';
import { sha256Hex } from '../utils/hash';
import { ADMIN_PASS_KEY } from '../utils/constants';
export default function AdminLogin({onSuccessfulLogin}){
  const [pass,setPass]=useState(''); const [err,setErr]=useState('');
  useEffect(()=>{ (async()=>{ const cur=localStorage.getItem(ADMIN_PASS_KEY); if(!cur){ const h=await sha256Hex('abi2207'); localStorage.setItem(ADMIN_PASS_KEY,h); } // ensure default emailjs config present
    const cfg=localStorage.getItem('abi_emailjs_config'); if(!cfg){ localStorage.setItem('abi_emailjs_config', JSON.stringify({ serviceId:'service_e17hvxl', templateCustomer:'template_kamg5at', templateAdmin:'template_ioh29kj', publicKey:'QPwqVGA4_6NO2Wo6_' })); } })(); },[]);
  const tryLogin=async(e)=>{ e.preventDefault(); const stored=localStorage.getItem(ADMIN_PASS_KEY); const input=await sha256Hex(pass); if(stored && input===stored){ onSuccessfulLogin(); } else setErr('Invalid credentials'); };
  return (<div style={{minHeight:'60vh',display:'flex',alignItems:'center',justifyContent:'center'}}><form onSubmit={tryLogin} className='card' style={{width:360}}><h3>Admin Login</h3><input disabled value='admin' style={{width:'100%',padding:10,marginBottom:8}}/><input placeholder='Password' type='password' value={pass} onChange={e=>setPass(e.target.value)} className='form-input'/>{err&&<div style={{color:'#dc2626'}}>{err}</div>}<button className='btn btn-blue' type='submit' style={{width:'100%'}}>Login</button></form></div>);}