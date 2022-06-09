import { MarvelContextProvider } from './context/marvel-provider';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { FavPage } from './pages/favPage';
import { aMenuItems } from './interfaces/menu.items';
import Layout from './App/layout';

import {  DetailsPage } from './pages/detailsPage';
import { LoginPage } from './pages/loginPage';

// import AppUI from "./AppUI"

function App() {
    const options: aMenuItems = [
        { path: '', label: <img src="./static/objetivo.png" alt="" />, page: <LoginPage /> },
        { path: 'home', label: <img src="./static/hogar.png" alt="" />, page: <HomePage /> },
        { path: 'favorites', label: <img src="./static/estrella.png" alt="" />, page: <FavPage /> },
        { path: 'favorites/details/:id', label: "" , page: <DetailsPage  /> },
        { path: 'home/details/:id', label: "" , page: <DetailsPage  /> },
        { path: '*', label: <></>, page: <Navigate replace to="" /> },
    ];

    return (
        <Router>
            <Layout options={options}>
                <MarvelContextProvider>
                    <Routes>
                        {options.map((item) => (
                            <Route
                                key={item.label}
                                path={item.path}
                                element={item.page}
                            ></Route>
                        ))}
                    </Routes>
                </MarvelContextProvider>
            </Layout>
        </Router>
    );
}

export default App;
