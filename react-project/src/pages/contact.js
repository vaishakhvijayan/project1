import React from "react";
import "../styles/contact.css"
function Contact (){
    return(
        <div className="contact">
        <div className="rightSide">
<h1>CONTACT US</h1>
<form method="POST" >
    <label htmlFor="name" >Full name</label>
    <input type="text" name="name" placeholder="enter full name"/>
     <label htmlFor="email" >Email</label>
     <input type="text" name="email" placeholder="enter your email"/>
     <label htmlFor="feedback">Feedback</label>
     <textarea 
     rows="5"    
      type="text" 
     name="feedback"
      placeholder="enter your feedback"></textarea>
      <button type="submit">Send Feedback</button>
      </form>
        </div>
        </div>
    );
}
export default Contact;