import styles from './SearchComponent.module.scss';

export function SearchComponent({ setSearchInput, searchInput, searchFor }) {
    return (
        <>
            <div className={styles.input}>
                <label htmlFor="{'searchBar'}">Search for {searchFor}</label>
                <input
                    id={'searchBar'}
                    className={'title'}
                    type="text"
                    placeholder={'1'}
                    onChange={(e) => {
                        console.log(searchInput);
                        setSearchInput({
                            ...searchInput,
                            offers: e.target.value,
                        });
                    }}
                    maxLength={1}
                ></input>
            </div>
        </>
    );
}
