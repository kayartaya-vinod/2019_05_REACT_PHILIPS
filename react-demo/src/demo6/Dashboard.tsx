import React from 'react';
import applyStyles from './applyStyles';

const Dashboard = () => (
    <h3>This is the main content area</h3>
);

export default applyStyles({minHeight: '350px', background: 'lightblue'})(Dashboard);