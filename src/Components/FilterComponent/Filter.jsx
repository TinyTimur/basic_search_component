import styles from './FIlter.module.scss';

export function Filter({ onChange }) {
    return (
        <>
            <div className={styles.filterBox}>
                <label htmlFor="filter">Sort by amount of offers</label>
                <select
                    name=""
                    id="filter"
                    onChange={(e) => onChange(e.target.value)}
                >
                    <option defaultValue={'default'}>Default</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </>
    );
}
