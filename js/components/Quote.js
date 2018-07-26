import React, {Component} from "react";

    class Quote extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isReady: false,
                title: null,
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
            fetch('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en', {
                method: 'post',
                headers: {'Content-Type':'application/json'}
            }).then((response)=>{
                //w response będą twoje dane
                console.log(response);
                this.setState({
                    quote: response
                })
            });
        }

        render() {
            if (!this.state.isReady) {
                return <div>loading</div>;
            }
            return <span>
                <h4>{ this.state.quote && this.state.quote.quoteText }</h4>
                <h6>{ this.state.quote && this.state.quote.quoteAuthor }</h6>
                </span>;
        }

    }


export default Quote;




