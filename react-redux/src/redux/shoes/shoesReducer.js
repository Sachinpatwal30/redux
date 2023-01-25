

const initialState={

    noOfShoes: 100

}



const shoeReducer =(state=initialState, action)=>{

    switch(action.type){

        case "BUY_SHOE": return {...state, noOfShoes: state.noOfShoes-1};

        default: return state;

    }


}

export default shoeReducer;