export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token:null, After debugging remove the token
    // token: 'BQBeMzxIWTOs0n2emh4xMzwvRwZrVTcCazptzpefGFZzebirwDFbd3yaUDFZO2OmTbRKnX63X2gk-_X97WKV_6K56csYrHYpEnf9uoNGRcogu-77y4sjOjOYGf7QQdmwEHD8Wj4HDHuGBOsBU2w5zNCE6RdhMLsoko5szxrEeNGfotMl5ZuG',

}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER': return {
            ...state,
            user: action.user
        };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
            case "SET_DISCOVER_WEEKLY":return{
                ...state,
                discover_weekly:action.discover_weekly,
            }

        default: return state;
    }
}
export default reducer;