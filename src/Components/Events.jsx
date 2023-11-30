import React from 'react'

const Events = () => {
  return (
    <>
    <div className='col-6 offset-3' style={{textAlign: "center"}}> 
  <p>EVENTS</p>
<p style={{fontFamily: "cursive", color:"rgb(51, 51, 51)", fontSize:"30px" }}>SHARE <span style={{color: 'rgb(201, 2, 2)'}}>YOUR MOMENTS</span> IN OUR RESTAURANT</p>
</div><br />

<div className="container-fluid">
  <div className="row">
<div className='col-4' >    
        <img src='Images/myevents-1.jpg' alt='' width='437px' height='590px' />
</div>
<div className='col-4'>    
        <img src='Images/myevents-2.jpg' alt='' width='437px' height='590px' />
</div>
<div className='col-4'>    
        <img src='Images/myevents-3.jpg' alt='' width='437px' height='590px' />

</div>
</div>
</div><br /><br /><br/><br/>

    </>
      )
}

export default Events
