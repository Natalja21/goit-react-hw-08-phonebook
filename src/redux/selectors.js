//auts selectors
export const selectIsLogin = ({ auth }) => auth.isLogin;
export const selectUser = ({ auth }) => auth.user;
export const selectAuth = state => state.auth
//filter selector
export const selectFilter = state => state.filter;
//contacts selector
export const selectContacts = state => state.contacts;
