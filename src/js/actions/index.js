export const addContact = contact => ({
    type: 'ADD_CONTACT',
    contact
})

export const removeContact = idx => ({
    type: 'REMOVE_CONTACT',
    idx
})

export const enterPassword = pass => ({
    type: 'ENTER_PASSWORD',
    pass
})