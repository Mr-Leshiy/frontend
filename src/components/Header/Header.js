import React from 'react'
import Button from '../UI/Button/Button.js'

import classes from './Header.module.css'

const Header = (props) => {
    return (
        <header className={classes['header']}>
                <Button className={classes['connect-wallet-button']}><h3>Connect Wallet</h3></Button>
        </header>
    );
};

export default Header;