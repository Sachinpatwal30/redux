import axios from "axios";


export const usersFetchRequest = () => {

    return {

        type: "USERS_FETCH_REQUEST",
    }

}

export const usersFetchSuccess = (users) => {

    return {
        type: "USERS_FETCH_SUCCUSS",
        payload: users
    }

}

export const usersFetchFailure = (error) => {

    return {
        type: "USERS_FETCH_FAILURE",
        payload: error
    }

}

export const fetchUsers= ()=>{

    return (dispatch)=>{

        dispatch(usersFetchRequest());

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{

            console.log("res.data:", res.data);
            dispatch(usersFetchSuccess(res.data));

        })
        .catch((err)=>{

            dispatch(usersFetchFailure(err));

        })
    }
}