import React from 'react';
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationList";
import EpisodeList from "./components/EpisodeList";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './styles/backgroundstyle.css';
import DetailPage from './components/DetailPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Nav/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/characters" component={CharacterList}/>
                <Route exact path="/Locations" component={LocationList}/>
                <Route exact path="/episodes" component={EpisodeList}/>
                <Route path="/about" component={About}/>
                <Route path='/:type/detail/:id' component={DetailPage}/>
            </Router>
        );
    }
}

export default App;
