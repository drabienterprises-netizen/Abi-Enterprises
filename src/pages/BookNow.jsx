import React, {useEffect,useState} from 'react';
import emailjs from '@emailjs/browser';
import { loadJSON } from '../utils/storage';
import { EMAILJS_KEY } from '../utils/constants';
export default function BookNow({vehicles}){
  const [form,setForm]=useState({name:'',phone:'',vehicle:'',days:''});
  useEffect(()=>{ const q=new URLSearchParams(window.location.search); const sel=q.get('vehicle'); if(sel) setForm(f=>({...f,vehicle:sel})); },[]);
  const handle=(e)=>setForm({...form,[e.target.name]:e.target.value});
  const send=async(e)=>{ e.preventDefault(); const cfg=loadJSON(EMAILJS_KEY,null); if(!cfg||!cfg.serviceId||!cfg.templateCustomer||!cfg.publicKey){ alert('EmailJS not configured. Set keys in Admin.'); return; } try{ await emailjs.send(cfg.serviceId,cfg.templateCustomer,form,cfg.publicKey); // also send admin notification if templateAdmin provided
    if(cfg.templateAdmin){ await emailjs.send(cfg.serviceId,cfg.templateAdmin,form,cfg.publicKey); }
    alert('Booking sent!'); setForm({name:'',phone:'',vehicle:'',days:''}); }catch(err){ console.error(err); alert('Failed to send booking'); } };
  return (<section style={{padding:28}}><form onSubmit={send} className='card' style={{maxWidth:520,margin:'0 auto'}}><h3>Book Your Vehicle</h3><input name='name' className='form-input' placeholder='Name' value={form.name} onChange={handle} required/><input name='phone' className='form-input' placeholder='Phone' value={form.phone} onChange={handle} required/><select name='vehicle' className='form-input' value={form.vehicle} onChange={handle} required><option value=''>Select Vehicle</option>{vehicles.map(v=><option key={v.id} value={v.name}>{v.name}</option>)}</select><input name='days' type='number' className='form-input' placeholder='Number of days' value={form.days} onChange={handle} required/><button className='btn btn-yellow' type='submit' style={{width:'100%'}}>Send Booking</button></form></section>);}