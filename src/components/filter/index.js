import React from 'react';

import classes from './filter.module.css';

class Filter extends React.Component {
    render () {
        return (
            <>
                <div className={classes.content}>
                    <div className={classes.filter}>
                        <div className={classes.sort}>
                            <p>Sort By</p>
                            <div className={classes.dropdown}>Duration <i class="fas fa-sort-down"></i></div>
                        </div>
                        <div className={classes.icons}>
                            <i class="fas fa-list"></i>
                            <i class="fas fa-grip-horizontal"></i>
                        </div>
                    </div>
                </div>
                {this.props.children}
            </>
        );
    }
}

export default Filter;