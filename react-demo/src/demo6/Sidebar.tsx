import React from 'react';
import applyStyles from './applyStyles';

const Sidebar = () => (
    <div>
        <h3 className="text-center">Main menu</h3>
        <ul className="list-group">
            <li className="list-group-item">Menu item 1</li>
            <li className="list-group-item">Menu item 2</li>
            <li className="list-group-item">Menu item 3</li>
            <li className="list-group-item">Menu item 4</li>
            <li className="list-group-item">Menu item 5</li>
        </ul>
    </div>
);

const styles = {
    backgroundColor: 'yellow',
    color: 'red !important'
}

// applyStyles(styles) --> returns a HOC, which takes Sidebar as an old component
// and returns a modified version of the same (or totally a differente one)
export default applyStyles(styles)(Sidebar);