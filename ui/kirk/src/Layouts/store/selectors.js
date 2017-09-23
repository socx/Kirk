export const show = (state) => {
    const bareRoutes =['/', '/login', '/forgotPassword' , '/resetPassword']
    return bareRoutes.indexOf(state.routing.location.pathname) === -1;
}