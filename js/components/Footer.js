import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Footer extends Component {
    render(){
        return <footer>
                <nav className="container">
                    <div className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                        <a className="navbar-text" href="#">Copyright 2019 | All Rights Reserved</a>
                        {/* <Link to='/policy' className="navbar-text">Polityka prywatnosci</Link> */}
                        <div className="" id="navbarTogglerDemo02">
                            <ul className="navbar-nav  flex-row-reverse ">
                                <li className="nav-item active">
                                    <a target="_blank" className="nav-link" href="https://www.facebook.com/profile.php?id=1676046791"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li className="nav-item active">
                                    <a target="_blank" className="nav-link" href="https://www.instagram.com/?hl=pl"><i class="fab fa-instagram"></i></a>
                                </li>
                                <li className="nav-item active">
                                    <a target="_blank" className="nav-link" href="https://www.linkedin.com/in/agnieszka-kozio%C5%82-49539583/"><i class="fab fa-linkedin"></i></a>
                                </li>
                                <li className="nav-item active">
                                    <a target="_blank" className="nav-link" href="mailto:agnieszka.m.koziol@gmail.com"><i class="far fa-envelope"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </footer>;
    }
}

export default Footer;