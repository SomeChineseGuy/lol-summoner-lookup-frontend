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
        const res = await axios.get('http://localhost:5000/api')
        this.setState({serverAPI: res.data})
        if (res.status !== 200) throw Error(res.message);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('/api/search', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: this.state.searchSummoner
        })

        const body = await res.text();
       
        this.setState({searchSummoner: body})
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
                        onChange={e => this.setState({typeCheck: e.target.value})}
                    />
                    <button type="submit">Search now!</button>
                </form>
                <p>The summoner you searched for is {this.state.searchSummoner}</p>
            </div>
        )
    }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
