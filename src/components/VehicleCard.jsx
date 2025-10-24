import React from 'react';
export default function VehicleCard({v, isAdmin, onVendorChange}){
  return (
    <div style={{padding:12,borderRadius:8,background:'#f8fafc'}}>
      <img src={v.image} alt={v.name} style={{width:'100%',height:140,objectFit:'cover',borderRadius:8}} />
      <div style={{fontWeight:800,color:'#071245',marginTop:8}}>{v.name}</div>
      <div style={{color:'#d97706'}}>{v.price}</div>
      {isAdmin && <input value={v.vendor} onChange={e=>onVendorChange(v.id,e.target.value)} style={{width:'100%',padding:8,marginTop:8}} />}
    </div>
  );
}