import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Menu = () => {
  return (
    <>
      <div style={{textAlign: "center"}}>
    <p className='mt-5 ' style={{color:"grey", fontSize:"14px"}}>OUR MENU</p>
    <p className='display-6' style={{fontFamily: "cursive", color:"rgb(51, 51, 51)" }}>Check Our <span style={{color: 'rgb(201, 2, 2)'}}>Yummy Menu</span> </p><br/>

<div className='container-fluid'>
        <div className='nav col-6'>
        <Navbar expand="lg" className="col-md-12 ">
      <Container className='col-4 offset-8'>
<Nav>
            <Nav.Link className='mx-2' href="/" style={{color: 'rgb(51, 51, 51)', fontSize:"20px" }}>Starters</Nav.Link>
            <Nav.Link className='mx-2' href="/" style={{color: 'rgb(51, 51, 51)', fontSize:"20px" }}>Breakfast</Nav.Link>
            <Nav.Link className='mx-2' href="/" style={{color: 'rgb(51, 51, 51)', fontSize:"20px" }}>Lunch</Nav.Link>
            <Nav.Link className='mx-2' href="/" style={{color: 'rgb(51, 51, 51)', fontSize:"20px" }}>Dinner</Nav.Link>
    </Nav>
    </Container>
    </Navbar>
    </div>
    </div>
    <div style={{color:"grey", fontSize:"14px"}}>MENU</div>
    <div className='display-6' style={{color: 'rgb(201, 2, 2)'}}><b>Starters</b> </div>
    </div>

<div className='container p-3 me-5'>
    <div className='row py-3'> 
        <div className='col-4'>    
        <img src='Images/menu-item-1.png' alt='' width='250px' height='240px' />
    <h4><b>Magnam Tiste</b> </h4>
    <p style={{color:"grey", fontSize:"17px"}}>Lorem, deren, trataro, filede, nerada</p>
    <h4 style={{color: 'rgb(201, 2, 2)'}}><b>$5.95 </b> </h4>
    </div>
        <div className='col-4'>    
        <img src='Images/menu-item-2.png' alt='' width='250px' height='240px' />
    <h4><b>Aut Luia</b> </h4>
    <p style={{color:"grey", fontSize:"17px"}}>Lorem, deren, trataro, filede, nerada</p>
    <h4 style={{color: 'rgb(201, 2, 2)'}}><b>$14.95 </b> </h4>
    </div>
        <div className='col-4'>    
        <img src='Images/menu-item-3.png' alt='' width='250px' height='240px' />
    <h4><b>Est Eligendi</b> </h4>
    <p style={{color:"grey", fontSize:"17px"}}>Lorem, deren, trataro, filede, nerada</p>
    <h4 style={{color: 'rgb(201, 2, 2)'}}><b>$8.95 </b> </h4>
    </div>
    </div>


<div className='row'>
    <div className='col-4'>    
        <img src='Images/menu-item-4.png' alt='' width='250px' height='240px' />
    <h4><b>Eos Luibusdam</b> </h4>
    <p style={{color:"grey", fontSize:"17px"}}>Lorem, deren, trataro, filede, nerada</p>
    <h4 style={{color: 'rgb(201, 2, 2)'}}><b>$12.95 </b> </h4>
    </div>
    <div className='col-4'>    
        <img src='Images/menu-item-5.png' alt='' width='250px' height='240px' />
    <h4><b>Eos Luibusdam</b> </h4>
    <p style={{color:"grey", fontSize:"17px"}}>Lorem, deren, trataro, filede, nerada</p>
    <h4 style={{color: 'rgb(201, 2, 2)'}}><b>$12.95 </b> </h4>
    </div>
    <div className='col-4'>    
        <img src='Images/menu-item-6.png' alt='' width='250px' height='240px' />
    <h4><b>Laboriosam Direva</b> </h4>
    <p style={{color:"grey", fontSize:"17px"}}>Lorem, deren, trataro, filede, nerada</p>
    <h4 style={{color: 'rgb(201, 2, 2)'}}><b>$9.95 </b> </h4>
    </div>
</div>
</div><br/><br/> <br/>


<div className="container-fluid py-5" style={{backgroundColor: "rgb(231, 229, 229)", color:"rgb(51, 51, 51)",}}>
    <div className='row'>
    <div className='col-6 offset-3 pb-5' style={{textAlign: "center"}}>
      <br /><br /><p style={{color:"grey", fontSize:"13px"}}>TESTIMONIALS</p>
      <h1 className='' style={{fontFamily: "cursive", color:"rgb(51, 51, 51)", fontSize:"30px" }}>WHAT ARE THEY <span style={{color: 'rgb(201, 2, 2)'}}>SAYING ABOUT US</span> </h1>
      </div>
      <div className='col-5 offset-3'style={{fontSize:"17px"}}>
      <p><i>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</i> </p>
<div><b>Saul Goodman</b></div>
<div style={{color:"grey", fontSize:"16px"}}>Ceo & Founder</div>
</div>
<div className="col-2">
<img src='Images/testimonials-1.jpg' alt='' width='180px' height='180px'  style={{borderRadius:'50%', }} /></div>
    </div><br/><br/><br /><br /><br /><br />
    </div> <br/> <br/> <br/>

    </>

  )
}

export default Menu
