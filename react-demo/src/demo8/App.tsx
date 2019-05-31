import React from 'react';

const App = () => {
    const [name, setName] = React.useState('');
    const [names, setNames] = React.useState(['Vinod', 'Shyam', 'John', 'Jane']);

    const submitHandler = (e: any) => {
        e.preventDefault();
        let newNames = [...names, name];
        setNames(newNames);
        setName('');
    }
    const deleteName = (index: number) => {
        // names.splice(index, 1);
        let newNames = [...names];
        newNames.splice(index, 1);
        setNames(newNames);
    }

    return <div className="container">
        <h1>React hooks demo</h1>
        <hr />

        <h3>There are {names.length} names!</h3>
        <form onSubmit={submitHandler} className="form">
            <input type="text" className="form-control" autoFocus
                style={{ width: '300px' }}
                value={name}
                placeholder="Type a name and press ENTER key"
                onChange={e => setName(e.target.value)} />
        </form>
        <ul>
            {
                names.map((n, i) => <li key={i}>{n}
                    <span className="text-danger"
                        style={{ cursor: 'pointer' }}
                        onClick={() => deleteName(i)} > x</span>
                </li>)
            }
        </ul>

    </div >
};

export default App;