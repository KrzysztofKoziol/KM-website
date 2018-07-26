import React, {Component} from "react";

class AboutMe extends Component {
    render(){
        return <div>
            <div id="infoAboutMe"></div>
            <section className="container about-me">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2>O mnie</h2>
                        <p>
                            Cupcake caramels chocolate bar sweet muffin dessert bonbon cheesecake. Chupa chups bonbon
                            caramels chupa chups. Pie caramels apple pie. Jujubes biscuit topping I love dragée dessert
                            bonbon marshmallow. Macaroon cake pudding. Chocolate I love I love I love gummi bears cookie
                            candy canes cookie tootsie roll. Powder jelly dragée powder I love chocolate candy canes
                            chocolate cake jelly. Gingerbread soufflé topping powder cupcake. Icing sweet roll pastry
                            sugar plum. Wafer gingerbread ice cream.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 ">
                        <div className="avatar"/>
                    </div>
                </div>
            </section>
        </div>;
    }
}

export default AboutMe;