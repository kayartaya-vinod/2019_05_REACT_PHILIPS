import { FETCH_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "../actions/types";

// reducer is invoked by REDUX whenever an action is dispatched
// and passes the current state in the store and the action itself
// as arguments. The state may be an array or an object.

// based on the action.type the reducer is supposed to return the
// new (modified) state to the store
export default (currState: any = [], action: any) => {

    switch (action.type) {
        case FETCH_CONTACTS:
            action.contacts.sort((c1: any, c2: any) => c2.id - c1.id);
            return [...action.contacts];
        case DELETE_CONTACT:
            let data = [...currState];
            let index = data.findIndex(d => d.id === action.id);
            data.splice(index, 1);
            return data;
        case ADD_CONTACT:
            return [action.contact, ...currState]
        default:
            return currState;
    }

}