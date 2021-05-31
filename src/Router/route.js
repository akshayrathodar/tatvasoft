import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

import MainComponent from '../Component/maincomponent';

class Router extends React.Component {
    render() {
        return(
            <>
                <BrowserRouter>
                    <switch>
                        <Route path="/" exact component={MainComponent} />
                    </switch>
                </BrowserRouter>
                
            </>
        );
    }
}

export default Router