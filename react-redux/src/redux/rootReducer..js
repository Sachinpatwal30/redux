import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import shoeReducer from "./shoes/shoesReducer";
import userReducer from "./user/userReducer"



const rootReducer = combineReducers({

    cake: cakeReducer,
    iCream:iceCreamReducer,
    shoe:shoeReducer,
    users:userReducer


});





export default rootReducer;