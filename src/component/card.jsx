import React from 'react'
import '../component/card.css'
import BLButton from './BLbutton';
import BLIconButton from './BLiconbutton';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function Card({name , username , image}) {
                
  return (
    <>
        <div className="cardl">
          <img src={image} width={"100%"} height={'100%'} alt="Logo" />
          <div className='cardtext'>
            <div>
              <h3 style={{display:'flex', justifyContent:'center',alignItems:'center' , marginBottom:'0'}}>{name}<BLIconButton style={{color:'white'}} label={<VerifiedIcon style={{fontSize:"1.2vw"}}/>}/></h3>
              <p style={{margin:"0"}}>{username}</p>
            </div>
            <div className='cardbtn'>
              <BLButton style={{color:'white', border:'1px solid white' ,  borderRadius:'0' , fontSize:'.55vw',padding:'1.2em 3em 1.2em 3em' , marginTop:'2.9rem'}} label="Follow"/>
            </div>
          </div>
        </div>
    </>
  )
}
