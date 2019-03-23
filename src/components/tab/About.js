import React, { Component }  from 'react';

import { Header } from '../header/Header';

class About extends Component {
    render() {
        return(
            <div>
                <Header/>
                <p class="lead">
                    Info about application. 
                </p>
                <p>
                    How does calculation work?
                    Info about features.
                </p>
            </div>
        )
    }
}

export default About;
