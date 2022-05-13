const logout = (state) => {
    localStorage.removeItem('token');
    state.autenticado = false;
};

const isAutenticado = (state) => {
    state.autenticado = localStorage.getItem('token') ? true : false;
};

export { logout, isAutenticado };