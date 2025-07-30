import { Supplier } from '../Supplier/Supplier.jsx';
import { useEffect, useState } from 'react';
import styles from './Suppliers.module.scss';

export function Suppliers() {
    const [suppliers, setSuppliers] = useState([]);
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

    return (
        <>
            <div className={styles.suppliers}>
                {suppliers.map((supplier) => {
                    return <Supplier key={supplier.id} {...supplier} />;
                })}
            </div>
        </>
    );
}
