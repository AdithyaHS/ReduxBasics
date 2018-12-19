const initialState = {
    counter : 0,
    results: []
}

const reducer=(state=initialState,action)=>{

    if(action.type === 'INCREMENT'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    else if(action.type=== 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    else if(action.type === 'ADD') {
        // console.log("ADD")
        return {
            ...state,
            counter : state.counter + 5
        }
    }
    else if( action.type === 'SUBTRACT') {
        return {
            ...state,
            counter : state.counter - 5
        }
    }
    else if(action.type === 'STORE_RESULT'){
        return {
            ...state,
            results: state.results.concat({id: new Date(), value:state.counter})
        }
    }
    else if(action.type === 'DELETE_RESULT'){
        // console.log("calling delete")
        const updatedArray= state.results.filter(value=> value.id!==action.resultId)
        return {
            ...state,
            results: updatedArray
        }
    }
    else {
        return state;
    }
    
}
export default reducer;