import { ControlsButton } from '../ControlsButton/ControlsButton.jsx';
import styles from './Header.module.scss';

export function Header({
    setOpenTab,
    setSearchInput,
    setModalOpen,
    isModalOpen,
}) {
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
                <div className={styles.header__input}>
                    <label htmlFor="{'searchBar'}">Input offer ID</label>
                    <input
                        id={'searchBar'}
                        className={'title'}
                        type="text"
                        placeholder={'1'}
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                        }}
                        maxLength={1}
                    ></input>
                </div>

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
