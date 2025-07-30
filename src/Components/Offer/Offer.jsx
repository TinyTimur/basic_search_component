import styles from './Offer.module.scss';

export function Offer({ id, mark, model, supplier_id, reg_date }) {
    return (
        <>
            <div className={styles.offer} key={id}>
                <h1>{mark}</h1>
                <h2>{model}</h2>
                <h2>{supplier_id}</h2>
                <p>{reg_date}</p>
            </div>
        </>
    );
}
