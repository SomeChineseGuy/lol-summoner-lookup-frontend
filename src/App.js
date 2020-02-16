import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';


class App extends Component {
    state = {
        serverAPI: null,
        searchSummoner: null,
        typeCheck: null
    }

    callAPI = async () => {
        const res = await axios.get('/api')
        this.setState({serverAPI: res.data})
        if (res.status !== 200) throw Error(res.message);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/search', {
            method: 'POST',
            data: {
                headers: { 
                    'Content-Type': 'application/json' 
                    } 
                },
            body: JSON.stringify({
                searchName: this.state.searchSummoner
            })
        })
 
    }

    componentDidMount() {
        this.callAPI();
    }

     render() {
        return (
            <div>
                <p>{this.state.serverAPI}</p>
                <form onSubmit={this.handleSubmit}>
                    <h1>Type in Summoner Name</h1>
                    <input
                        type="text"
                        onChange={e => this.setState({searchSummoner: e.target.value})}
                    />
                    <button type="submit">Search now!</button>
                </form>
                <p>The summoner you searched for is {this.state.searchSummoner}</p>
            </div>
        )
    }
}

export default App;
