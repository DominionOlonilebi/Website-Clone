import React from 'react'
import { Button } from 'react-bootstrap'

const About = () => {
  return (
    <>
    <div style={{textAlign: "center"}}>
<h6 className=' mt-5 px-5 py-3' style={{color: 'rgb(136, 136, 136)'}}>ABOUT US</h6>
<h3 className='mb-3' style={{textAlign: "center", fontFamily: "cursive"}}>LEARN MORE <span style={{color: 'rgb(201, 2, 2)'}} >ABOUT US</span> </h3><br/>
</div>

<div className='container'>
    <div className='row'>
<div className='col-8'>
<img src='Images/aboutme.jpg' alt='' width='94%' height='700px' />
</div>

<div className='col-4' style={{fontSize: '16px'}}>
<p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
<p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
<p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
<p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
<img src='Images/about-2.jpg' alt='' width='100%' height='32%' />
</div>
</div>
</div>

<div className='container-fluid pt-5 mt-5 pb-5' style={{backgroundColor: "rgb(231, 229, 229)", color:"rgb(51, 51, 51)", borderColor: "white" }}>
  <div className='container col-10 pb-5 pt-5'>
<div className='row'>
<div className='card col-3 me-4'style={{backgroundColor: "rgb(201, 2, 2)", color:"white", width:"345px", height: "430px", borderRadius: "0px", border: "none"}}>
    <h2 className='py-4 mx-3'><b>Why Choose Yummy?</b></h2>
    <p className='mx-3' style={{fontSize: '17px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
    <Button className='btn btn-lg  mx-5' style={{backgroundColor: "rgba(233, 229, 229, 0.521)", color:"white", borderColor:"rgb(201, 2, 2)", borderRadius:"30px", alignItems: "center"}}>Learn More</Button>
</div>

<div className='card col-2 me-4 my-4' style={{width:"215px", borderRadius: "0px", border: "none", textAlign: "center"}}>
    <h4 className='pt-5'>Corporis voluptates officia eiusmod</h4>
    <p className='pt-4 text-secondary'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
</div>

<div className='card col-2 me-4 my-4' style={{width:"215px", borderRadius: "0px", border: "none", textAlign: "center" }}>
    <h4 className='pt-5'>Ullamco laboris ladore pan</h4>
    <p className='pt-4 text-secondary'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
</div>

<div className='card col-2 my-4' style={{width:"215px", borderRadius: "0px", border: "none", textAlign: "center" }}>
    <h4 className='pt-5 '>Labore consequatur incidid dolore</h4>
    <p className='pt-4 text-secondary'>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
</div>
</div>
</div>
    </div>

<div className='pb-5'> 
<img src='Images/stats-be.jpg' alt='' width='1320px' height='350px' />
</div>
</>
  )
}

export default About
