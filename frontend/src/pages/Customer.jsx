import React from 'react'
import Customerdashboard from '../components/Customerdashboard'
import Customerprofile from '../components/Customerprofile'

import b1 from '../Image/b3.jpg';


const styles = {
    backgroundImage: `url(${b1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };
export default function Customer() {
  return (
    <div style={{ ...styles,display: 'flex',  padding: '0px' }}>
    
    <div style={{ width:'250px', background :'black', padding: '0px'  }}>
        <Customerdashboard/>
    </div>
    <div  style={{position:'relative', right:'-280px', top:'-30px', padding: '5px',  width: '400px'}}>
        <Customerprofile />
    </div>
</div>
  )
}


