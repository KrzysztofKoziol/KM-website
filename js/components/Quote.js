import React, {Component} from "react";
import axios from 'axios';

    class Quote extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isReady: false,
                quote: "",
                author: ""
            }
        }

        componentDidMount() {
            // fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${this.props.isbn}`)
            //     .then( resp => resp.json() )
            //     .then(response => {
            //         this.setState({
            //             isReady: true,
            //             title: response.items[0].volumeInfo.title
            //         })
            //     });

        //     fetch('https://quotes.rest/qod.json?category=inspire', {
        //         method: 'POST',
        //         headers: {'Content-Type':'application/json'},
        //         mode: 'no-cors'
        //     }).then((response)=>{
        //
        //         //w response będą twoje dane
        //         console.log(response);
        //         this.setState({
        //             quote: response
        //         })
        //     });
        //         axios.get('http://quotes.rest/qod.json?category=inspire', {
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             crossDomain: true
        //         })
        //             .then(function (response) {
        //                 console.log(response);
        //                 console.log(response.data.contents.quotes[0].quote);
        //             });

                axios.get('https://talaikis.com/api/quotes/random/', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    crossDomain: true
                })
                    .then((response) => {
                        console.log(response);
                        this.setState({
                            quote: response.data.quote,
                            author:response.data.author,

                        });
                    })

         }

        render() {
            // if (!this.state.isReady) {
            //     return <div>loading</div>;
            // }
            return <span>
                <h3><i>{ this.state.quote }</i></h3>
                <h6>{ this.state.author }</h6>
                </span>;
        }

    }


export default Quote;




