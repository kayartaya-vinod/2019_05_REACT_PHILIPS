import { FETCH_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from "./types";

// a thunk action is a function that returns another
// function which receives 'dispatch' from redux,
// which can be called to dispatch an action

/*
function getAllContacts() {
    return function (dispatch: any) {
        let data: any = []; // should get from REST server
        dispatch({ type: FETCH_CONTACTS, contacts: data });
    }
}
*/

const baseUrl = 'http://localhost:4000/contacts/';

export const getAllContacts = () => async (dispatch: any) => {
    let resp = await fetch(baseUrl);
    let contacts = await resp.json();
    dispatch({ type: FETCH_CONTACTS, contacts });
}

export const addContact = (contact: any) => async (dispatch: any) => {
    let reqOpts: any = {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-type': 'application/json' }
    };

    let resp = await fetch(baseUrl, reqOpts);
    let data = await resp.json();
    dispatch({ type: ADD_CONTACT, contact: data });
}

export const deleteContact = (id: number) => async (dispatch: any) => {
    await fetch(baseUrl + id, { method: 'DELETE' });
    dispatch({ type: DELETE_CONTACT, id });
}