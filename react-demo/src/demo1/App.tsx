import React from 'react'

// React component as a function; 
// A.K.A Stateless component
// must return an HTML in XML form.
function App() {
    const title = 'Hello, world!';
    const subHeading = 'Powered by React; developed by Vinod.';

    return (
        <div>
            <h1>{title.toUpperCase()}</h1>
            <hr />
            <p>{subHeading}</p>
        </div>
    );
}
export default App;