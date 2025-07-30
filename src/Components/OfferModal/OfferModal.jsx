import { ControlsButton } from '../ControlsButton/ControlsButton.jsx';
import styles from './OfferModal.module.scss';
import { useState } from 'react';

export function OfferModal({ setOpen }) {
    const [input, setInput] = useState({
        mark: '',
        model: '',
        supplier_id: '',
    });

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Button pressed');
        fetch('/offers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                mark: input.mark,
                model: input.model,
                supplier_id: input.supplier_id,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleCloseModal() {
        setOpen(false);
    }

    return (
        <div className={styles.offerModal__overlay} onClick={handleCloseModal}>
            <div
                className={styles.offerModal}
                onClick={(e) => e.stopPropagation()}
            >
                <form action="" className={styles.offerModal__form}>
                    <div className={styles.offerModal__item}>
                        <label htmlFor="Mark">Mark</label>
                        <input
                            onChange={(e) =>
                                setInput({ ...input, mark: e.target.value })
                            }
                            type="text"
                            id={'Mark'}
                        />
                    </div>
                    <div className={styles.offerModal__item}>
                        <label htmlFor="Model">Model</label>
                        <input
                            onChange={(e) =>
                                setInput({ ...input, model: e.target.value })
                            }
                            type="text"
                            id={'Model'}
                        />
                    </div>
                    <div className={styles.offerModal__item}>
                        <label htmlFor="Supplier Id">Supplier Id</label>
                        <input
                            onChange={(e) =>
                                setInput({
                                    ...input,
                                    supplier_id: e.target.value,
                                })
                            }
                            type="text"
                            id={'Supplier Id'}
                        />
                    </div>

                    <ControlsButton
                        content={'submit'}
                        handleControlsClick={handleSubmit}
                    />
                </form>
            </div>
        </div>
    );
}
