import React from 'react';

export default (arrName: string = 'items') => (OldComponent: any) => (props: any) => {

    console.log(props);
    let loadingDiv = null;
    if (!props.hasOwnProperty(arrName) || props[arrName] instanceof Array === false ||
        props[arrName].length === 0) {
        loadingDiv = <div className="text-center">
            <h3>Loading... Please wait!</h3>
            <img src='/assets/images/loading.gif' alt='loading...' />
        </div>;
    }

    return <div>
        {loadingDiv}
        <OldComponent {...props} />
    </div>
};