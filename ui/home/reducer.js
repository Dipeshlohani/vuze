
export const initialState = {
    albums: [],
};

export const getAlbums = () => {
    return ({
        //api call and inside call fnction
        type: "GET_ALBUMs",
        albums,
    })
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALBUMs': {
            return {
                ...state,
                albums: state.albums.concat(action.albums),
            };
        }
    }
};

