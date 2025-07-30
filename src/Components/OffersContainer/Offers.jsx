import styles from './Offers.module.scss';
import { useEffect, useState } from 'react';
import { Offer } from '../Offer/Offer.jsx';

export function Offers({ searchInput }) {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        const url = searchInput ? `/offers/${searchInput}` : '/offers';

        fetch(url)
            .then((res) => res.json())
            .then((data) => setOffers(data))
            .catch((err) => console.log(err));
    }, [searchInput]);

    return (
        <div className={styles.offers}>
            {offers.length > 0 ? (
                offers.map((offer) => <Offer key={offer.id} {...offer} />)
            ) : (
                <p>No offers found</p>
            )}
        </div>
    );
}
