import { ReactElement } from 'react';
import { Navigation } from '../components/navigation';
import { aMenuItems } from '../interfaces/menu.items';
import '../styles/App.css';

function Layout({
    options,
    children,
}: {
    options: aMenuItems;
    children: ReactElement;
}) {
    return (
        <>
            <h1>Marvel</h1>
            <main>{children}</main>
            <Navigation options={options}></Navigation>
        </>
    );
}

export default Layout;
