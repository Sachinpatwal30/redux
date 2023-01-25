

const initialState = {

    isFetching: false,
    users: [],
    error: "",

}

const usersReducer = (state = initialState, action) => {


    switch (action.type) {

        case "USERS_FETCH_REQUEST": return { ...state, isFetching: true };

        case "USERS_FETCH_SUCCESS": return { ...state, isFetching: false, users: action.payload };

        case "USERS_FETCH_FAILURE": return { ...state, isFetching: false, error: action.payload };

        default: return state;
    }

}

export default usersReducer;