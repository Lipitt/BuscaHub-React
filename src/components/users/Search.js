import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: "",
        
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    onSubmit = (e) => {
        
    }
    
    render() {
        return (
            <div>
                <form className="form">
                    <input 
                    type="text" 
                    name="text" 
                    placeholder="Busca Usuarios..." 
                    value={this.state.text} 
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    />
                    <input type="submit" value="Buscar" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
