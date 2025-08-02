import styles from './Supplier.module.scss';
import { ControlsButton } from '../ControlsButton/ControlsButton.jsx';

export function Supplier({ name, reg_date, handleDeleteClick, offersAmount }) {
    return (
        <div className={styles.supplier}>
            <h2>{name}</h2>
            <h3>{reg_date.slice(0, 16).replace('T', ' ')}</h3>

            <h2>Amount of offers: {offersAmount}</h2>
            <ControlsButton
                content={'x'}
                className={styles.controlsInOffer}
                handleControlsClick={handleDeleteClick}
            />
        </div>
    );
}
