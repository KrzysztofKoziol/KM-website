import React, {Component} from "react";




class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            collapse: false
        }
    }

    onHamburgerClick(event) {
        event.preventDefault();
        const collapse = !this.state.collapse;
        this.setState({
            collapse
        });
    }

    hideMenu() {
        this.setState({
            collapse: false
        });
    }

    render(){
        return <header>
            <nav className="container">
                <div className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Agnieszka Kozioł</a>
                    <button onClick={this.onHamburgerClick.bind(this)} className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${this.state.collapse ? '' : 'collapse'} navbar-collapse`} id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a onClick={this.hideMenu.bind(this)} className="nav-link" href="/#infoAboutMe">O mnie <span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a onClick={this.hideMenu.bind(this)} className="nav-link" href="/#offer">Oferta</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={this.hideMenu.bind(this)} className="nav-link" href="/#contact">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>;
    }
}

export default Header;