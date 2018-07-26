import React, {Component} from "react";
import Carousel from "./Carousel";
import AboutMe from "./AboutMe";
import Offer from "./Offer";
import Contact from "./Contact";

class Home extends Component {
    render(){
        return <div>
            <Carousel/>
            <AboutMe/>
            <Offer/>
            <Contact/>
        </div>
    }
}

export default Home;