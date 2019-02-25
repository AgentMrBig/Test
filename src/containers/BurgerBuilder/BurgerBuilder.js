import React, { Component } from 'react';
import Axe from '../../hoc/Axe';

class BurgerBuilder extends Component {
    render () {
        return (
            <Axe>
                <div>Burger</div>
                <div>Build Controls</div>
            </Axe>
        );
    };
}

export default BurgerBuilder;