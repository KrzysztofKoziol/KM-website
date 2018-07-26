import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quote from "./Quote";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import PrivacyPolicy from "./PrivacyPolicy";


class App extends Component {
    render(){
        return <Router>
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/policy' component={PrivacyPolicy} />
                        </Switch>
                        <Footer/>
                        <Quote/>
                    </div>
        </Router>;
    }
}

export default App;