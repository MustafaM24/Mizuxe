import React from "react";

const NavBar = () => {
  return (
<div style={{width: '100%' , height: 108, paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0, opacity: 0.90, background: 'white', boxShadow: '2px 2px 5px #3292A6', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
  <div style={{flex: '1 1 0', height: 60, paddingLeft: 190, paddingRight: 100, justifyContent: 'space-between', alignItems: 'center', gap: 16, display: 'flex'}}>
    <div style={{width: 144.27, height: 60, position: 'relative'}}>
      <img style={{width: 50, height: 50, left: 0, top: 5, position: 'absolute'}} src="https://muzammil3.netlify.app/img/mlogo.png" />
      <div style={{left: 55.56, top: 12.20, position: 'absolute', color: 'rgba(0, 0, 0, 0.90)', fontSize: 27, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 1.5, wordWrap: 'break-word'}}>Mustafa</div>
    </div>
    <div style={{flex: '1 1 0', height: 49.61, paddingLeft: 432.71, justifyContent: 'flex-end', alignItems: 'center', display: 'flex'}}>
      <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div style={{paddingTop: 7, paddingBottom: 8.61, paddingLeft: 8, paddingRight: 32.13, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
          <div style={{color: 'rgba(0, 0, 0, 0.50)', fontSize: 21.40, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1.5, wordWrap: 'break-word'}}>Home</div>
        </div>
        <div style={{paddingTop: 7, paddingBottom: 8.61, paddingLeft: 8, paddingRight: 31.91, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
          <div style={{color: 'rgba(0, 0, 0, 0.50)', fontSize: 21.40, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1.5, wordWrap: 'break-word'}}>About</div>
        </div>
        <div style={{paddingTop: 7, paddingBottom: 8.61, paddingLeft: 8, paddingRight: 36.42, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
          <div style={{color: 'rgba(0, 0, 0, 0.50)', fontSize: 21.40, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1.5, wordWrap: 'break-word'}}>Meet the authors</div>
        </div>
        <div style={{paddingTop: 7, paddingBottom: 8.61, paddingLeft: 8, paddingRight: 32.56, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
          <div style={{color: 'rgba(0, 0, 0, 0.50)', fontSize: 21.40, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1.5, wordWrap: 'break-word'}}>Contact</div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default NavBar;