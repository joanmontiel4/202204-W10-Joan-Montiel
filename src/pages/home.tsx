import { useState } from 'react';
import { Counter } from '../components/counter/counter';
import { CounterClicks } from '../components/counter/counter-clicks';
import { CounterStates } from '../components/counter/counter-states';

export function Home() {
    const [totalClicks, setTotalClicks] = useState(0);

    const addClick = () => {
        setTotalClicks(totalClicks + 1);
    };

    return (
        <>
            <h2>Página Home</h2>
            <p>Total clicks: {totalClicks}</p>
            <Counter setTT={addClick}></Counter>
            <CounterClicks setTT={addClick}></CounterClicks>
            <CounterStates setTT={addClick}></CounterStates>
        </>
    );
}
