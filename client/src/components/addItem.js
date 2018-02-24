import React, { Component } from 'react';


class AddItem extends Component{
    constructor(props){
        super(props);
        this.state={
            itemInput: '',
            err: false
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem(e){
        e.preventDefault();
        const { itemInput }  = this.state;
        const err = this.props.addItem(this.state.itemInput);
        this.setState({
            err,
            itemInput: ''
         });
    }

    render(){
        const { itemInput, err } = this.state
        return(
            <div>
                { err && <p>{err}</p>}
                <form onSubmit={this.addItem}>
                    <input value={ itemInput } name="item" type="text" onChange={(e)=> this.setState({ itemInput : e.target.value  })}/>
                    <button > Add Item </button>
                </form>
            </div>
        )
    }
}

export default AddItem;
