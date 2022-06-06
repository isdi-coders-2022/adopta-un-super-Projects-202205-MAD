import { CardList } from '../components/cardList';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { aMenuItems } from '../interfaces/menu.items';
import '../styles/App.css';
import { HomePage } from '../pages/homePage';
import { FavPage } from '../pages/favPage';

function AppUI() {

    
    return (
        
            <div className="App">
                <h1>Marvel</h1>
                <CardList></CardList>
            </div>
    );
}

export default AppUI;

