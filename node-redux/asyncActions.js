const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware= redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");


const INITIAL_STATE = {

    loading: false,
    users: [],
    error: ''

}


const fetchUsersRequest = () => {
    return { type: "FETCH_USER_REQUEST" }
}


const fetchUsersSuccess = (users) => {
    return { type: "FETCH_USER_SUCCESS", payload: users }
}

const fetchUsersFailure = (error) => {
    return { type: "FETCH_USER_FAILURE", payload: error }
}

const fetchUsers= ()=>{

    return function(dispatch){

        dispatch(fetchUsersRequest());

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then( (res) =>{

            const users = res.data.map((user)=> user.id);
           
            
            dispatch(fetchUsersSuccess(users));

        })
        .catch((err)=>{

            console.log("inside error");

            dispatch(fetchUsersFailure(err.message));

        })
    }

}

const reducer = (state=INITIAL_STATE,action)=>{

    switch(action.type){
    case "FETCH_USER_REQUEST": return { ...state, loading:true};
    case "FETCH_USER_SUCCESS": return { loading:false,error:'', users:action.payload};
    case "FETCH_USER_FAILURE": return { loading:false, error:action.payload, users:[]};
    default: return state;
    }


}



const store = createStore(reducer,applyMiddleware(thunkMiddleware));

store.subscribe(()=>{console.log(store.getState())});

store.dispatch(fetchUsers());