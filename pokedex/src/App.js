import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ProfileContainer from "./components/Profile/ProfileContainer";
import PokemonsContainer from './components/Pokemons/PokemonsContainer';
import { Provider } from "react-redux";
import store from "./Redux/redux-store";
import SidebarContainer from "./components/SideBar/SidebarContainer";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Navigation />
                    <Route
                        path="/pokemon/:id?"
                        render={() => <ProfileContainer />}
                    />
                    <Route exact path="/" render={() => <PokemonsContainer />} />
                    <Route exact path="/sidebar" render={() => <SidebarContainer />} />
                </div>
            </BrowserRouter>
        </Provider>
    );
}
export default App;
