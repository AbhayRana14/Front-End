import React from 'react';
import {Component} from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            dishes: DISHES
        }
    }
    render() {
        return (

        <div className="App">
            <Main>
            <Menu dishes={this.state.dishes}/>
            </Main>
            
        </div>
        
        

        );
    }
}



export default App;