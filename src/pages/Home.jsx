import React from 'react';
export default function Home({vehicles,onSelect}){ return (
  <section style={{padding:28}}><div className='card'><h1>Welcome to ABI ENTERPRISES</h1><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:16}}>{vehicles.map(v=> (<div key={v.id} onClick={()=>onSelect(v.name)} style={{textAlign:'center',cursor:'pointer'}}><img src={v.image} alt={v.name} style={{width:96,height:96,borderRadius:48}}/><div style={{fontWeight:700}}>{v.name}</div><div style={{color:'#6b7280'}}>{v.price}</div></div>))}</div></div></section>
);}