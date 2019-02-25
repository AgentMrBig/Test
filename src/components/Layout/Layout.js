import React from 'react';
import Axe from '../../hoc/Axe';
import classes from './Layout.css';

const layout = ( props ) => (
    <Axe>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Axe>
    
);

export default layout;