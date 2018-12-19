const redux=require('redux');

const initialState={
    counter:0
}
const createStore=redux.createStore;

//Reducer

const rootReducer =(state = initialState,action)=>{
    // console.log(action.type);
    if(action.type==='INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    else if(action.type==='ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

//Store
const store= createStore(rootReducer);
console.log(store.getState());

//subscription

store.subscribe(()=>{
    console.log("in subscribe",store.getState())
});


//dispatch

store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:10});
console.log(store.getState());

