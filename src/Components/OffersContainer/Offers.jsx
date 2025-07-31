import styles from './Offers.module.scss';
import { useEffect, useState } from 'react';
import { Offer } from '../Offer/Offer.jsx';

export function Offers({ searchInput }) {
    const [offers, setOffers] = useState([]);

    function handleDeleteClick(id) {
        fetch(`/offers/${id}`, {
            method: 'DELETE',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
            }),
        })
            .then((response) => {
                console.log(response);
            })
            .then(() => {
                setOffers((prev) => prev.filter((offer) => offer.id !== id));
            })
            .catch((error) => console.log(error));
    }

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
                offers.map((offer) => (
                    <Offer
                        key={offer.id}
                        {...offer}
                        handleDeleteClick={() => handleDeleteClick(offer.id)}
                    />
                ))
            ) : (
                <p>No offers found</p>
            )}
        </div>
    );
}
