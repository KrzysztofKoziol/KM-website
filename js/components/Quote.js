import React, {Component} from "react";

    class Quote extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isReady: false,
                quote: null,
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
            fetch('https://quotes.rest/qod.json?category=inspire ', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                mode: 'no-cors'
            }).then((response)=>{
                //w response będą twoje dane
                console.log(response);
                this.setState({
                    quote: response
                })
            });
        }

        render() {
            // if (!this.state.isReady) {
            //     return <div>loading</div>;
            // }
            return <span>
                <h4>{ this.state.quote && this.state.quote.contents.quotes.quote }</h4>
                <h6>{ this.state.quote && this.state.quote.quoteAuthor }</h6>
                </span>;
        }

    }


export default Quote;




