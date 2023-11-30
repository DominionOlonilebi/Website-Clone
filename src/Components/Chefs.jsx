import React from 'react'

const Chefs = () => {
  return (
    <>
      <div style={{backgroundColor: "rgb(231, 229, 229)", textAlign: "center"}}>
<div className='col-6 offset-3 pt-5'> 
  <div className='pt-5'>CHEFS</div>
<p style={{fontFamily: "cursive", color:"rgb(51, 51, 51)", fontSize:"30px" }}>OUR <span style={{color: 'rgb(201, 2, 2)'}}>PROFESSIONAL</span> CHEFS</p>
</div>

<div className="container-fluid py-3">
  <div className="container">
  <div className="row ">
<div className=' col-4'>    
       <div className='card' style={{width:'362px'}}>
        <img src='Images/mychefs-1.jpg' alt='' width='360px' height='357px' style={{borderRadius: "5px"}}/><br/>
       <h5><b>Walter White</b></h5>
       <div style={{color: "rgb(153, 153, 153)"}}>Master Chef</div><br/>
       <p className='mx-4' style={{color:"rgb(103, 103, 103)", fontSize: "14px"}}><i>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</i> </p><br/>
       </div> 
</div>

<div className=' col-4'>    
       <div className='card' style={{width:'362px'}}>
        <img src='Images/mychefs-2.jpg' alt='' width='360px' height='357px' style={{borderRadius: "5px"}}/><br/>
       <h5><b>Sarah Jhonson</b></h5>
       <div style={{color: "rgb(153, 153, 153)"}}>Patissier</div><br/>
       <p className='mx-4' style={{color:"rgb(103, 103, 103)", fontSize: "14px"}}><i>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</i> </p><br/>
       </div> 
</div>

<div className=' col-4'>    
       <div className='card' style={{width:'362px'}}>
        <img src='Images/mychefs-3.jpg' alt='' width='360px' height='357px' style={{borderRadius: "5px"}}/><br/>
       <h5><b>William Anderson</b></h5>
       <div style={{color: "rgb(153, 153, 153)"}}>Cook</div><br/>
       <p className='mx-4' style={{color:"rgb(103, 103, 103)", fontSize: "14px"}}><i>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</i> </p><br/>
       </div> 
</div>
</div>
</div>
</div>
</div>

    </>
  )
}

export default Chefs
