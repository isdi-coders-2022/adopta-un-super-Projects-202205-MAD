import { Link } from 'react-router-dom';
import { aMenuItems } from '../../interfaces/menu.items';

export function Navigation({ options }: { options: aMenuItems }) {
    return (
        <nav>
            <ul className='navItems'>
                {options.map((item) => (
                    <li key={item.label}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
