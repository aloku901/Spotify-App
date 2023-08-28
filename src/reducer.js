export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQBVuuGpWsglPJIPOw6N6dOy68YUnJtD-9RiGfG4dPr60APT645_HbgF9dz_OAYvFzzTJ6G0KIC7QFmoi9s1oXTKRITC15OsRINc3kSbCJF7WwjUAsrTiuDXyhPdKKAAeCUG2sd1A99EAQ15D8uFiuBOGD2Iazuc6oJGAABOSpPJDoq7BVaJ6HcT2pLSiVJW_sz_3YuEEwTX7-agGUb1",
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state;
    }
}

export default reducer;