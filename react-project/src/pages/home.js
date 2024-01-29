import React from "react";
import BannerImage from "../assets/banner.jpg";
import "../styles/home.css";
import { Link } from "react-router-dom";

function Home(){
    return(
        
            
         <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
           <div className="headerContainer">
            <h1>fruzo</h1>
            <p> TIME TO REFRESH</p>
            <Link to="/menu">
             <button>ORDER NOW</button>
             </Link>
            </div>
        </div>
    );
}
export default Home;