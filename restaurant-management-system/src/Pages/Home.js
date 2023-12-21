import React from "react";
import Layout from "../components/Layout/Layout";
import Banner from "./../images/Banner.jpg";
import "../styles/HomeStyles.css";


const Home = () => {
    return(
        <Layout>
            <div className="home" style={{ backgroundImage:`url(${Banner})`, 
           height: "80vh",
           display: "flex",
           justifyContent: "center",
           alignItems: "left",
           flexDirection: "column",
           backgroundPosition: "center",          
           backgroundRepeat: "no-repeat",
           backgroundSize: "cover",
          }}>
                <div className="headerContainer">
                    <h1>Welcome to Foodies Kingdom</h1>
            
                    <p>Join us in embracing the future of restaurant management –
                    enhance productivity, 
                    <p>
                    increase profitability, and create unforgettable dining experiences with ease.
                    </p>
                    </p>
                 </div>
            </div>
        </Layout>
    )
}
export default Home;