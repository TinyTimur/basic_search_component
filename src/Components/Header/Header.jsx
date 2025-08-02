import { ControlsButton } from '../ControlsButton/ControlsButton.jsx';
import styles from './Header.module.scss';

export function Header({ setOpenTab, setModalOpen, isModalOpen }) {
    function handleOffersClick() {
        setOpenTab('offers');
    }
    function handleSuppliersClick() {
        setOpenTab('suppliers');
    }
    function handleAddOfferClick() {
        setModalOpen(!isModalOpen);
    }

    return (
        <>
            <header className={styles.header}>
                <ControlsButton
                    content={'Offers'}
                    handleControlsClick={handleOffersClick}
                />
                <ControlsButton
                    content={'Suppliers'}
                    handleControlsClick={handleSuppliersClick}
                />

                <ControlsButton
                    content={'add offer'}
                    handleControlsClick={handleAddOfferClick}
                />
            </header>
        </>
    );
}
