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
                            Odbiór kluczy do nowego domu to świetne uczucie. Ekscytacja i ulga szybko mogą jednak zostać odsunięte przez ogromne wyzwanie, jakim jest urządzenie wnętrza. Może masz pomysł, ale brakuje Ci czasu, by wcielić go w życie? Potrzebujesz KOGOŚ kto pomoże przy projektowaniu i dopilnuje jego realizacji!
                        </p>
                        <p>
                            Jestem Kasia Motyl, zajmuję się projektowaniem  i wdrażaniem  projektów w życie. Koordynuję prace ekipy wykończeniowej. Dbam o to, by wybrane blaty były przycięte i położone równo, odpowiednia ilość płytek trafiła w ręce fachowców, a lampy tworzyły przytulną atmosferę.
                        </p>
                        <p>
                            Gwarantuje spokojną głowę, oszczędność czasu i pieniędzy!
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