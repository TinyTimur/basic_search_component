import { ControlsButton } from '../ControlsButton/ControlsButton.jsx';
import styles from './OfferModal.module.scss';
import { useEffect, useState } from 'react';

export function OfferModal({ setOpen, setOffers, isOpen }) {
    const [input, setInput] = useState({
        mark: '',
        model: '',
        supplier_id: '',
    });

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/suppliers')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((err) => console.error('Erorr', err));
    }, [isOpen]);

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
            .then((newOffer) => {
                console.log('New Offer:', newOffer);
                setOffers((prev) => [...prev, newOffer]);
                setOpen(false);
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
                            required={true}
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
                            required={true}
                        />
                    </div>
                    <div className={styles.offerModal__item}>
                        <label htmlFor="Supplier_id">Supplier id</label>
                        <select
                            onChange={(e) =>
                                setInput({
                                    ...input,
                                    supplier_id: e.target.value,
                                })
                            }
                            name=""
                            id=""
                        >
                            {data.map((supplier) => {
                                return (
                                    <option
                                        key={supplier.id}
                                        value={supplier.id}
                                    >
                                        {supplier.name}
                                    </option>
                                );
                            })}
                        </select>
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
