import React, { Component }  from 'react';
import { Header } from '../header/Header';

class NotFoundPage extends Component {
    render() {
        return(
            <div>
                <Header/>
                [404
                Not Found] Image Link to home
                Make sure the address is correct
            </div>
        )
    }
}

export default NotFoundPage;
