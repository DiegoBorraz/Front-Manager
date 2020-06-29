//logica da autenthicão
export const TOKEN_KEY = "@manager-token";
export const isAuthenticated = () => (localStorage.getItem(TOKEN_KEY) ? true : null);

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
  logout();
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.clear();
  localStorage.removeItem(TOKEN_KEY);
};
