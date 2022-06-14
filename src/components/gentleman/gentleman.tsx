import './gentleman.css';

export function Gentleman() {
    const gentlemen = [
        {
            id: 1,
            name: 'Bertin Osborne',
            status: 'Alive',
            profession: 'Youtuber',
            twitter: '@osbourne',
            picture: 'bertin.jpg',
            alternativeText: 'Osbourne pointing at you',
            selected: true,
        },
        {
            name: 'The Farytale',
            status: 'RIP',
            profession: 'Influencer',
            twitter: 'pending',
            picture: 'fary.jpg',
            alternativeText: 'The Fary pointing at you',
            id: 2,
            selected: false,
        },
        {
            id: 3,
            name: 'Julius Churchs',
            status: 'Alive',
            profession: 'Java developer',
            twitter: '@julius_churchs',
            picture: 'julio.jpg',
            alternativeText: 'Churchs pointing at you',
            selected: true,
        },
    ];

    const htmlGentlemen = gentlemen.map((item) => {
        return (
            <li className="gentleman">
                <div className="gentleman__avatar-container">
                    <img
                        className="gentleman__avatar"
                        src={'img/' + item.picture}
                        alt={item.alternativeText}
                    />
                    <span className="gentleman__initial">
                        {item.name[0].toUpperCase()}
                    </span>
                </div>
                <div className="gentleman__data-container">
                    <h2 className="gentleman__name">{item.name}</h2>
                    <ul className="gentleman__data-list">
                        <li className="gentleman__data">
                            <span className="gentleman__data-label">
                                Profession:
                            </span>
                            {item.profession}
                        </li>
                        <li className="gentleman__data">
                            <span className="gentleman__data-label">
                                Status:
                            </span>
                            {item.status}
                        </li>
                        <li className="gentleman__data">
                            <span className="gentleman__data-label">
                                Twitter:
                            </span>{' '}
                            {item.twitter}
                        </li>
                    </ul>
                </div>
                <i className="icon gentleman__icon fas fa-check"></i>
                <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
            </li>
        );
    });

    return <>{htmlGentlemen}</>;
}
