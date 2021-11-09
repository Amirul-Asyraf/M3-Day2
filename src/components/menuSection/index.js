import React from 'react';
import classes from './section.module.css';

class MenuSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Menu One",
        };
    }

    
    render () {
        return (
            
            <div className={classes.section}>
                {this.props.children}
            </div>
        );
    }
}

export default MenuSection;