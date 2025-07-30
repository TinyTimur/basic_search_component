import styles from './Supplier.module.scss';

export function Supplier({ name, reg_date }) {
    return (
        <div className={styles.supplier}>
            <h2>{name}</h2>
            <h3>{reg_date}</h3>
        </div>
    );
}
