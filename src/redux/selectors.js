//auts selectors
export const selectAuth = state => state.auth
export const getUser = ({ auth }) => auth.user;
//filter selector
export const selectFilter = state => state.filter;
//contacts selector
export const selectContacts = state => state.contacts;
