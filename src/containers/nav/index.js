import React from 'react';

import MenuList from "../../components/menuList";
import MenuSection from "../../components/menuSection";

import classes from './nav.module.css';

class Nav extends React.Component {
    render () {
        return(
            <nav>
                <div className={classes.logo}>
                    <i class="fas fa-play fa-5x"></i>
                    <h1>Quflix</h1>
                </div>

                <MenuSection>
                    <MenuList title="New Releases" />
                    <MenuList title="Most Popular"/>
                    <MenuList title="Recommended"/>
                    <MenuList title="Top Chart"/>
                </MenuSection>

                <MenuSection>
                    <MenuList title="My Collection" icon={0}/>
                    <MenuList title="Bookmark"/>
                    <MenuList title="History"/>
                    <MenuList title="Subscriptions"/>
                </MenuSection>
            </nav>
        );
    }
}

export default Nav;