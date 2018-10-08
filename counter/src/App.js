import React, { Component } from 'react';
import Counter from "./containers/Counter";
import Movie from "./containers/Movie";
class App extends Component {
    render() {
        return (
            <div>
                {/*<Counter/>*/}
                <Movie/>
            </div>
        );
    }
}
export default App;
