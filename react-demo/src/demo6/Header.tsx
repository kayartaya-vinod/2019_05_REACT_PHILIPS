import React from 'react';
import applyStyles from './applyStyles';


// in the future javascript, when decorators will introduced,
// this is how a hoc call will look like
// @applyStyles({ backgroundColor: 'pink' })
const Header = ({ title }: { title: string }) => (
    <div>
        <h1>{title}</h1>
        <hr />
        <p>Powered by React</p>
    </div>
);


export default applyStyles({ backgroundColor: 'pink' })(Header);