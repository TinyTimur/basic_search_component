import styles from './Offer.module.scss';
import { ControlsButton } from '../ControlsButton/ControlsButton.jsx';

export function Offer({
    id,
    mark,
    model,
    supplier_id,
    reg_date,
    handleDeleteClick,
}) {
    return (
        <>
            <div className={styles.offer} key={id}>
                <h1>{mark}</h1>
                <h2>{model}</h2>
                <h2>{supplier_id}</h2>
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
