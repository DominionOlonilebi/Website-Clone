import React from 'react'
import { Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
      <div className="container">
<div style={{textAlign: "center"}}>
<br/><h6 className=' mt-5 px-5 pt-3' style={{color: 'rgb(136, 136, 136)'}}>CONTACT</h6>
<h3 className='mb-3' style={{textAlign: "center", fontFamily: "cursive"}}>NEED HELP? <span style={{color: 'rgb(201, 2, 2)'}} >CONTACT US</span></h3><br/>
</div>
<div className='col-12'>
<iframe title="goggle map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7914.061118635292!2d3.8813!3d7.350465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d940d6ae62f%3A0x56d4491dd5ea662f!2sMolete%20Baptist%20Church%20Ibadan!5e0!3m2!1sen!2sng!4v1701172451134!5m2!1sen!2sng" width="1113" height="350" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div><br />
<div className='row'>
  <div className='col-5 pt-3 px-5 mx-3' style={{backgroundColor: "rgb(231, 229, 229)", width: "538px"}}>
    <h4 style={{color: "grey"}}><b>Our Address</b> </h4>
    <p>A108 Adam Street, New York, NY 535022</p>
  </div>
  <div className='col-5 pt-3 px-5 mx-3' style={{backgroundColor: "rgb(231, 229, 229)", width: "538px"}}>
    <h4 style={{color: "grey"}}><b>Email Us</b> </h4>
    <p>contact@example.com</p>
  </div>
</div><br />

<div className='row'>
  <div className='col-5 pt-3 px-5 mx-3' style={{backgroundColor: "rgb(231, 229, 229)", width: "538px"}}>
    <h4 style={{color: "grey"}}><b>Call Us</b> </h4>
    <p>+1 5589 55488 55</p>
  </div>
  <div className='col-5 pt-3 px-5 mx-3' style={{backgroundColor: "rgb(231, 229, 229)", width: "538px"}}>
    <h4 style={{color: "grey"}}><b>Opening Hours</b> </h4>
    <p>Mon-Sat: 11AM - 23PM; Sunday: Closed</p>
  </div>
</div><br /><br /><br />

    <div className='row'>
<div className='col-6'>
    <input type="text" className='px-3 py-4' placeholder= "Your Name" style={{width: "540px", height: "33px", }}/>
    </div>
<div className='col-6'>
    <input type="text" className='px-3 py-4' placeholder= "Your Email" style={{width: "540px", height: "33px", }}/>
    </div>
</div><br />

<div className='row'>
  <div className='col-12'>
    <input type="text" placeholder= "Subject" style={{width: "1110px", height: "43px", }} />
  </div>
</div><br />
<div className='row'>
  <div className='col-12'>
    <textarea type="text" placeholder= "Message" style={{width: "1110px", height: "143px", }}></textarea>
  </div>
</div><br />
<div className='pt-2' style={{textAlign: "center" }}>
    <Button className='px-5 mx-5' style={{fontSize: '18px', borderRadius:"30px", padding:"10px 25px", backgroundColor: "rgb(201, 2, 2)", borderColor: "white",  }}>Send Message</Button>
    </div><br /><br />
</div> 
    </>
  )
}

export default Contact
