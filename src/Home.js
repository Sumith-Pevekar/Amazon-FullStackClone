import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
          alt="cover"
        />
        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="OnePlus 8 Pro Ultramarine Blue, 5G Unlocked Android Smartphone U.S Version, 12GB RAM+256GB Storage, 120Hz Fluid Display,Quad Camera, Wireless Charge, with Alexa Built-in"
            price={969.4}
            image="https://images-na.ssl-images-amazon.com/images/I/410mmBW-AYL._AC_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="All-new Echo Dot (4th Gen) with clock + Amazon Smart Plug | Twilight Blue
            "
            price={69.99}
            image="https://images-na.ssl-images-amazon.com/images/I/7128HRanJgL._SL1100_.jpg"
            rating={4}
          />{" "}
          <Product
            id="4"
            title="New Apple Watch SE (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band"
            price={448.66}
            image="https://images-na.ssl-images-amazon.com/images/I/71bUKrOPzYL._SL1500_.jpg"
            rating={5}
          />{" "}
          <Product
            id="5"
            title="
            Click to open expanded view
            Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Space Grey (3rd Generation)"
            price={612.31}
            image="https://images-na.ssl-images-amazon.com/images/I/61z85f1XsgL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            title="LG 164 cm (65 inches) 4K UHD Smart Nano-cell TV 65SM9000PTA (Black) (2019 Model)"
            price={2250.07}
            image="https://images-na.ssl-images-amazon.com/images/I/81P4jFG8XBL._SL1500_.jpg"
            rating={5}
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;
