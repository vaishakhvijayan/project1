import React from "react";
import Pizza from "../assets/aboutbanner.jpg"
import "../styles/about.css";
function About (){
    return(
        <div className="about">
      <div className="about top"
      style={{backgroundImage:`url(${Pizza})`}}>
        </div>    
        <div className="aboutBottom">  
            <h1>ABOUT US</h1>
            <p> Fruzo is a multi cusine resto cafe and it is known for 
                its arabic dishes.Our aim is to serve quality & hygeine
                food at an affordable rate 
            
            </p>
            </div>
        </div>
    );
}
export default About;