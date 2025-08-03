import { Supplier } from '../Supplier/Supplier.jsx';
import { useEffect } from 'react';
import styles from './Suppliers.module.scss';

export function Suppliers({ suppliers, setSuppliers, sortOrder }) {
    useEffect(() => {
        const url = sortOrder ? `/suppliers?order=${sortOrder}` : '/suppliers';

        fetch(url)
            .then((res) => res.json())
            .then((data) => setSuppliers(data))
            .catch((err) => console.error(err));
    }, [sortOrder]);

    useEffect(() => {
        fetch('/suppliers')
            .then((res) => res.json())
            .then((data) => {
                setSuppliers(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    function handleDeleteClick(id) {
        fetch(`/suppliers/${id}`, {
            method: 'DELETE',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
            }),
        })
            .then(async (response) => {
                const data = await response.json();

                if (!response.ok) {
                    if (data?.errno === 1451) {
                        alert('Cannot delete referenced supplier');
                    } else {
                        alert(`Ошибка: ${data?.sqlMessage}`);
                    }
                    throw new Error(data?.sqlMessage);
                }
            })
            .then(() => {
                setSuppliers((prev) =>
                    prev.filter((supplier) => supplier.id !== id)
                );
            })
            .catch((error) => console.log(error));
    }

    return (
        <>
            <div className={styles.suppliers}>
                {suppliers.length > 0
                    ? suppliers.map((supplier) => {
                          return (
                              <Supplier
                                  offersAmount={supplier.offerCount}
                                  key={supplier.id}
                                  {...supplier}
                                  handleDeleteClick={() =>
                                      handleDeleteClick(supplier.id)
                                  }
                              />
                          );
                      })
                    : 'No suppliers found'}
            </div>
        </>
    );
}
