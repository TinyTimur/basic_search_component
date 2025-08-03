import styles from './Offer.module.scss';
import { ControlsButton } from '../ControlsButton/ControlsButton.jsx';
import { useEffect, useState } from 'react';

export function Offer({
    id,
    mark,
    model,
    supplier_id,
    reg_date,
    handleDeleteClick,
}) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`/suppliers/${supplier_id}}`, {})
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log('Supplier', data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className={styles.offer} key={id}>
                <h1>{mark}</h1>
                <h2>{model}</h2>
                <h2>{data[0].name}</h2>
                <p>{reg_date.slice(0, 16).replace('T', ' ')}</p>
                <ControlsButton
                    content={'x'}
                    className={styles.controlsInOffer}
                    handleControlsClick={handleDeleteClick}
                />
            </div>
        </>
    );
}
