const redux = require("redux");
const reduxLogger= require("redux-logger");


const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware= redux.applyMiddleware;
const logger= reduxLogger.createLogger();

const buyCake = () => {
    return {
        type: "BUY_CAKE",
    };
};

const buyIceCreams = () => {
    return { type: "BUY_ICE_CREAMS" };
};

// const INITIAL_STATE = {
//     noOfCakes: 10,
//     noOfIceCreams: 20,
// }

// const reducer = (state = INITIAL_STATE, action) => {

//     switch (action.type) {
//         case "BUY_CAKE": return { ...state, noOfCakes: state.noOfCakes - 1 };

//         case "BUY_ICE_CREAMS": return {...state,noOfIceCreams:state.noOfIceCreams-1};
//         default: return state;
//     }

// }

const INITIAL_CAKE_STATE = {
    noOfCakes: 10,
};

const INITIAL_ICE_CREAM_STATE = {
    noOfIceCreams: 20,
};

const cakeReducer = (state = INITIAL_CAKE_STATE, action) => {
    switch (action.type) {
        case "BUY_CAKE":
            return { ...state, noOfCakes: state.noOfCakes - 1 };

        default:
            return state;
    }
};

const iceCreamReducer = (state = INITIAL_ICE_CREAM_STATE, action) => {
    switch (action.type) {
        case "BUY_ICE_CREAMS":
            return { ...state, noOfIceCreams: state.noOfIceCreams - 1 };

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});

const store = createStore(rootReducer,applyMiddleware(logger));
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());

unsubscribe();
