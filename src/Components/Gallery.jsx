import React from 'react'

const Gallery = () => {
  return (
    <>
  <div className="container-fluid" style={{backgroundColor: "rgb(231, 229, 229)"}}>
<div style={{textAlign: "center"}}>
<br/><h6 className=' mt-5 px-5 pt-3' style={{color: 'rgb(136, 136, 136)'}}>GALLERY</h6>
<h3 className='mb-3' style={{textAlign: "center", fontFamily: "cursive"}}>CHECK <span style={{color: 'rgb(201, 2, 2)'}} >OUR GALLERY</span></h3><br/>
</div>
<div className="container py-5 ">
<div className='row'>
    <div className="col-2 mx-3">
<img src='Images/gallery-7.jpg' alt='' width='200px' height='130px'/>
</div>
  
    <div className="col-2 mx-3">
<img src='Images/gallery-8.jpg' alt='' width='200px' height='130px'/>
</div>

  
    <div className="col-2 mx-3">
<img src='Images/gallery-1.jpg' alt='' width='200px' height='130px'/>
</div>

  
    <div className="col-2 mx-3">
<img src='Images/gallery-2.jpg' alt='' width='200px' height='130px'/>
</div>
  
    <div className="col-2 mx-3">
<img src='Images/gallery-3.jpg' alt='' width='200px' height='130px'/>
</div>
</div><br /><br /><br /><br/><br /><br />
</div>
</div>

    </>
  )
}

export default Gallery
