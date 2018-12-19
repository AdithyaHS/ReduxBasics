import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux' 

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default : console.log("default case")
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button  value="Result" onClick={this.props.onStoredResult}>Stored Result </button>
                <ul >
                    {this.props.storedResults.map(element => {return <li key ={element.key} onClick={()=>this.props.onDeleteResult(element.id)}> 
                    {element.value}</li>})}
                </ul>
            </div>
        );
    }
}

const mapStateToProps= state => {
    return {
        ctr:state.counter,
        storedResults: state.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : ()=>dispatch({ type: 'INCREMENT'}),
        onDecrementCounter : ()=>dispatch({type:'DECREMENT'}),
        onAddCounter : ()=>dispatch({type:'ADD'}),
        onSubtractCounter : ()=>dispatch({type:'SUBTRACT'}),
        onStoredResult : ()=> dispatch({type:'STORE_RESULT'}),
        onDeleteResult : ( id )=> dispatch({type:'DELETE_RESULT',resultId: id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);