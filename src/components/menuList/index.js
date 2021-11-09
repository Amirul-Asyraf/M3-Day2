import React from 'react';

import classes from './menu.module.css';

class MenuList extends React.Component {
    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div className={classes.menu_holder}>
                {
                    this.props.icon !== undefined && (
                    <caption></caption>
                )}

                <p style={{ margin: "0 20px"}}>{this.props.title}</p>

                {
                    this.props.icon !== undefined && (
                    <i class="fas fa-sort-down"></i>
                    // <caption></caption>
                )}
            </div>
        );
    }
}

export default MenuList;