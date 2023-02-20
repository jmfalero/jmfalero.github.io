import React from "react";


const Footer = () => {
   return (
    <div className="container-fluid footerfondo">
       <div className="container py-5"> 
           <div className="row">
               <div className="col-md-6 ">
                    <h3>Los mejores elementos de competicion</h3>
               </div> 
               <div className="col-md-6 ">
                <p><a href={"facebook"} target={"_blank"} rel="noreferrer"><img src={"images/facebook.svg"} alt="facebook" width={50}/></a></p>
                <p><a href={"instagram"} target={"_blank"} rel="noreferrer"><img src={"images/instagram.svg"} alt="instagram" width={50}/></a></p>
                <p><a href={"youtube"} target={"_blank"} rel="noreferrer"><img src={"images/youtube.svg"} alt="youtube" width={50}/></a></p>
               </div> 
            </div> 
        </div> 
    </div> 
   )

} 

export default Footer;