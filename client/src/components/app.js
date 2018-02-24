import React, { Component } from 'react';
import AddItem from './additem';
import ItemPool from './ItemPool';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            items: []
        }

        this.addItem  =  this.addItem.bind(this);
        this.clearItemPool  =  this.clearItemPool.bind(this);
        this.clearSingleItem  =  this.clearSingleItem.bind(this);
        this.pickSomething = this.pickSomething.bind(this);
    }

    pickSomething(){
        const { items } = this.state;
        const randomNum = Math.floor(Math.random()*items.length);
        console.log('picked', items[randomNum]);
    }

    addItem(item){
        const { items } = this.state;
        if(!item){
            return "Please fill in item input before submitting"
        }else if( items.indexOf(item)!== -1){
            return "Item already exists "
        }
        this.setState({ items : [...items, item]})
    }

    clearItemPool(){
        this.setState({ items : [] })
    }

    clearSingleItem(targetItem){
        this.setState({
            items : this.state.items.filter((item)=>{ return targetItem !== item })
        })
    }



    render(){
        const { items, err } = this.state
        return(
            <div className="app">
                <button disabled={ !items.length > 0 } onClick={this.pickSomething} > Give Me Something </button>
                <AddItem addItem={ this.addItem }/>
                <button onClick={ this.clearItemPool }> Clear List </button>
                <ItemPool items={items} />
            </div>
        )
    }
};


export default App;
