const setState = (field, data) => {
    localStorage.setItem(field, data);
}

const getState = (field) => {
    return localStorage.getItem(field)
}

export default {
    setState,
    getState
}