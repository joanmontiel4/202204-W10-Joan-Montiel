// Hooks de React

import { useEffect, useState } from 'react';

// useState()

export function CounterStates({ setTT }: { setTT(): void }) {
    const [counter, setCounter] = useState(0);
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        console.log(counter);
        setClicks(clicks + 1);
    }, [counter]);

    useEffect(() => {
        console.log('Carga imicial');
    }, []);

    const handleClick = (increment: number) => {
        setCounter(counter + increment);
        setTT();
    };

    return (
        <>
            <h3>Contador {counter}</h3>;<p>setStateClicks: {clicks}</p>
            <div>
                <button type="button" onClick={() => handleClick(+1)}>
                    ➕
                </button>
                <button type="button" onClick={() => handleClick(-1)}>
                    ➖
                </button>
            </div>
        </>
    );
}
