import { menuOptionsType } from '../../interfaces/menuoptions';
import { Home } from '../../pages/home';
import { Layout } from '../layout/layout';

function App() {
    const appTitle = 'Learning React';
    const company = 'ISDI Coders';
    const menuOptions: menuOptionsType = [
        { path: './index.html', label: 'Home' },
        { path: './tasks.html', label: 'Tasks' },
        { path: './about.html', label: 'About' },
    ];

    return (
        <Layout appTitle={appTitle} company={company} menuOptions={menuOptions}>
            <Home></Home>
        </Layout>
    );
}

export default App;
