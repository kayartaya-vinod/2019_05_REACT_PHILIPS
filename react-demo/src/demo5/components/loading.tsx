import React from 'react';

export default (arrName: string = 'items') => (OldComponent: any) => (props: any) => {
    
    if(!props[arrName] || props[arrName] instanceof Array ===false ||
        props[arrName].length===0) {
            return <div className="text-center">
                <h3>Loading... Please wait!</h3>
                <img src='/assets/images/loading.gif' alt='loading...' />
            </div>;
        }
    
    return <OldComponent {...props} />
};