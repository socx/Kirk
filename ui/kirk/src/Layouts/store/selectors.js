export const show = (state) => {
    return state.routing.location.pathname !== '/';
}