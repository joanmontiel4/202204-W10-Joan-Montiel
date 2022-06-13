import './menu.css';
export function Menu({ menuOptions }: { menuOptions: Array<any> }) {
    return (
        <nav className="menu">
            <ul>
                {menuOptions.map((item) => (
                    <li key={item.label}>
                        <a href={item.path}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
