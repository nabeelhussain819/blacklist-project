import '../screen/blog.css'
import img1 from '../img/2.png'
import img2 from '../img/1.png'
import img3 from '../img/7.png'
import BLButton from '../component/BLbutton';
import icon from '../img/buttonimg.png'
import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: 'white', // Set the color for the typing text
  },
  '& .MuiInputLabel-root': {
    color: 'grey',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white',
  },
});

export default function Blog() {

  return (
    <>
    <div className="blog">
    <h1>BLOG</h1>
    <p>TBI Talent: Where Expertise Meets Innovation. Unleashing the Power of Exceptional Models, Redefining Standards in the Industry.</p>
    <div className='blogimg'>
      <div className='bitem1'><img width={'100%'} height={'100%'} src={img1} alt="img" />
      <div class="overlay">
      <p>MODEL</p>
      <h2>All you need to know about the latest Ventures</h2>
      <div className='bcontent'>
        <BLButton style={{
          fontSize: '.6vw', 
          border:'1px solid white' , 
          color:'white',  
          width:'25vw',
          height: '3vh',  
          marginLeft:'6%',
          padding:'1vw .5vw 1vw .5vw',
          borderRadius:'0'
      }} 
          label='Read Article'/>
        <BLButton 
        iconSrc={icon} 
        style={{
        fontSize: '.6vw', 
        border: '1px solid white',
        background: 'rgba(255, 255, 255, 0.5)',  
        color: 'white',
        width:'25vw',
        height: '3vh',  
        marginLeft: '2%',
        borderRadius:'0',
        padding:'1vw .5vw 1vw .5vw'
        }} 
        label='By Anas A. Jabbar'
        />
      <h6>Asesino: Where Supercar Dreams Soar High! Fuel Your Passion with Asesino - Unleash Your Supercar Dreams!</h6>
      </div>
    </div>
      </div>
      <div className='bitem2'><img width={'100%'} height={'100%'} src={img2} alt="img" />
      <div class="overlay">
      <p>INFLUENCER</p>
      <h2 style={{width:"60%"}}>All you need to know about the latest Ventures</h2>
    </div>
      </div>
      <div className='bitem3'><img width={'100%'} height={'100%'} src={img3} alt="img" />
      <div class="overlay">
      <p>ACTOR</p>
      <h2 style={{width:"60%"}}>All you need to know about the latest Ventures</h2>
    </div>
      </div>
    </div>
    </div>
    </>
  );
}
