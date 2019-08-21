import React, {Component} from "react";
import Quote from "./Quote";

class Carousel extends Component {
    render() {
        return <section className="container ">
            <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="images/main-pic1.jpg" alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1><strong>Kasia Motyl</strong></h1>
                                <h2>Koordynatorka prac</h2>
                                <h2>wykończeniowych </h2>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/adult-beard-blur-551657.jpg" alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h3><i>Ludzie z celami odnoszą sukcesy</i></h3>
                                <h3><i>ponieważ wiedzą dokąd zmierzają.</i></h3>
                                <h3><i>to jest aż tak proste.</i></h3>
                                <h5>Earl Nightingale</h5>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/adult-agreement-beard-429247.jpg" alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <Quote/>
                            </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    }
}
export default Carousel;