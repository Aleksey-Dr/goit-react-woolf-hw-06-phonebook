import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

import contacts from 'data/contacts';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: contacts,
    },
    reducers: {
        addContact(state, action) {

            let includesName = false;
            state.contacts.map(contact => {
                contact.name === action.payload.name && (includesName = true);
                console.log(contact.name);
                console.log(action.payload.name);
                return includesName;
            });

            includesName
                ? alert(state.contacts.name + ' is already in contacts')
                : state.contacts.push({
                    id: nanoid(),
                    name: action.payload.name,
                    number: action.payload.number,
                });
        },

        deleteContact(state, action) {
            state.contacts = state.contacts.filter(contact =>
                contact.id !== action.payload.id);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;