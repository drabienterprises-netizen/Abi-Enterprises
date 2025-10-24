import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(){ return (
  <header className="header">
    <div className="container">
      <Link to='/' className="logo"><div style={{width:52,height:52,borderRadius:26,overflow:'hidden',background:'#fff'}}><img alt='logo' src='https://ik.imagekit.io/7ksuhjwaw/Abi-Enter-Logo.jpg?updatedAt=1761216405696' style={{width:'100%',height:'100%',objectFit:'contain'}}/></div><div style={{color:'#071245'}}><div style={{fontWeight:800,fontSize:18}}>ABI ENTERPRISES</div><div style={{fontSize:12}}>Heavy Vehicle Rentals</div></div></Link>
      <nav><Link to='/' style={{marginLeft:12}}>Home</Link><Link to='/vehicles' style={{marginLeft:12}}>Vehicles</Link><Link to='/book' style={{marginLeft:12}}>Book Now</Link><Link to='/admin-login' style={{marginLeft:12}}>Admin</Link><Link to='/contact' style={{marginLeft:12}}>Contact</Link></nav>
    </div>
  </header>
)}