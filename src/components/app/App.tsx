import { Button } from '../button/button';
import { Header } from '../header/header';
import { Info } from '../info/info';

function App() {
    const appTitle = 'The pointing gentlemen';
    return (
        <>
            <Header appTitle={appTitle}></Header>
            <section className="controls">
                <Info></Info>
                <Button></Button>
            </section>
        </>
    );
}

export default App;
