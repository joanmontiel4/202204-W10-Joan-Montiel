import { Button } from '../button/button';
import { Header } from '../header/header';
import { Info } from '../info/info';
import { Gentleman } from '../gentleman/gentleman';

function App() {
    const appTitle = 'The pointing gentlemen';
    return (
        <>
            <Header appTitle={appTitle}></Header>
            <section className="controls">
                <Info></Info>
                <Button></Button>
            </section>
            <main className="main">
                <ul className="gentlemen">
                    <Gentleman></Gentleman>
                </ul>
            </main>
        </>
    );
}

export default App;
