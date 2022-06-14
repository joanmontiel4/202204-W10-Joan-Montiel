import { Button } from '../button/button';
import { Header } from '../header/header';
import { Info } from '../info/info';
import { Gentleman } from '../gentleman/gentleman';
import { useState } from 'react';
import { gentlemenData } from '../../data/gentlemenData';

function App() {
    const appTitle = 'The pointing gentlemen';
    const [gentData, setGentData] = useState(gentlemenData);

    const handleSelect = (selectedValue: boolean): void => {
        setGentData(
            gentData.map((item) => ({ ...item, selected: selectedValue }))
        );
    };

    return (
        <>
            <Header appTitle={appTitle}></Header>
            <section className="controls">
                <Info></Info>
                <Button
                    areAllSelected={gentData.every((item) => item.selected)}
                    handleSelect={handleSelect}
                ></Button>
            </section>
            <main className="main">
                <ul className="gentlemen">
                    <Gentleman gentData={gentData}></Gentleman>
                </ul>
            </main>
        </>
    );
}

export default App;
