import React from 'react';

import Header from './header';
import Content from './content';

class Container extends React.Component {
    render () {
        return (
            <div style={{display: "flex", flexDirection: "column"}}>
                <Header />
                <Content />
            </div>
        );
    }
}

export default Container;