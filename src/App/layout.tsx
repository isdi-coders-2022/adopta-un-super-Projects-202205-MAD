import { ReactElement } from 'react';
import LogoutButton from '../components/login/logout';
import { Navigation } from '../components/navigation';
import { aMenuItems } from '../interfaces/menu.items';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/App.css';
import LoginButton from '../components/login/login';

function Layout({
    
    options,
    children,
}: {
    options: aMenuItems;
    children: ReactElement;
}) {
    const {
        isAuthenticated,
        user
        
      } = useAuth0();
      console.log(isAuthenticated)
      console.log(user)
    return (
        <>
            <h1>Marvel</h1>
            <main>{children}</main>
            <Navigation options={options}></Navigation>

            {
                isAuthenticated ? <LogoutButton></LogoutButton> : ""
            }
                
                
            
        </>
    );
}

export default Layout;
