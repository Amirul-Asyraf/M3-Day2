import React from 'react';

import classes from "./header.module.css";

class Header extends React.Component {
    render () {
        return (
            <header>
                <form action="#" className={classes.search_bar}>
                    <button type="submit"><i class="fa fa-search fa-2x"></i></button>
                    <input className={classes.search} type="text" placeholder="Search by Title, Genre, and Years"></input>
                </form>

                <div className={classes.account}>
                    <p>Jack Komboy</p>
                    <div className={classes.profile_pic}></div>
                    <i class="fas fa-cog"></i>
                </div>
            </header>
        );
    }
}

export default Header;