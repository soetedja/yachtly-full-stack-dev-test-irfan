import React, { Component } from "react";
import Header from '../components/header'
import Main from '../components/main'
// import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <Header />
                    <Main />
                </div>
            </div>
        );
    }
}

export default App;