import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';


class App extends Component {
    state = {
        serverAPI: null,
        searchSummoner: null
    }

    callAPI = async () => {
        const res = await axios.get('http://localhost:5000/api')
        this.setState({serverAPI: res.data})
        if (response.status !== 200) throw Error(res.message);
    }

    

    componentDidMount() {
        this.callAPI();
    }

     render() {
        return (
            <div>
                <p>{this.state.serverAPI}</p>
                <input/>
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
