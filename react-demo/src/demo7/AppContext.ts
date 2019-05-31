import { createContext } from 'react';


// exporting an object since we want this context object
// to be singleton, so that the same context/scope is used
// by all the components in your application
export default createContext({});