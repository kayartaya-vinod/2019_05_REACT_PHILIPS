import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const App = () => (
    <div className="container">

        <Header title="Higher-Order-Component Demo" />

        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <Dashboard />
            </div>
        </div>

    </div>
);

export default App;