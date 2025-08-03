import { Offers } from './Components/OffersContainer/Offers.jsx';
import { Suppliers } from './Components/Suppliers/Suppliers.jsx';
import { Header } from './Components/Header/Header.jsx';
import { useState } from 'react';
import { OfferModal } from './Components/OfferModal/OfferModal.jsx';
import { SearchComponent } from './Components/SearchComponent/SearchComponent.jsx';
import { Filter } from './Components/FilterComponent/Filter.jsx';

function App() {
    const [openTab, setOpenTab] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [isOpen, setOpen] = useState(false);
    const [offers, setOffers] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [sortOrder, setSortOrder] = useState('');

    let modal;
    let content;

    if (openTab === 'offers') {
        content = (
            <>
                {' '}
                <SearchComponent
                    setSearchInput={setSearchInput}
                    searchInput={searchInput}
                    searchFor={'offer with supplier id of'}
                />{' '}
                <Offers
                    offers={offers}
                    setOffers={setOffers}
                    searchInput={searchInput}
                />{' '}
            </>
        );
    } else if (openTab === 'suppliers') {
        content = (
            <>
                <Filter onChange={setSortOrder} />
                <Suppliers
                    suppliers={suppliers}
                    setSuppliers={setSuppliers}
                    sortOrder={sortOrder}
                />
            </>
        );
    } else {
        content = <p>Please select a tab</p>;
    }

    if (isOpen) {
        document.body.style.overflow = 'hidden';
        modal = (
            <OfferModal
                offers={offers}
                setOffers={setOffers}
                isOpen={isOpen}
                setOpen={setOpen}
                setSuppliers={setSuppliers}
            />
        );
    } else {
        document.body.style.overflow = 'auto';
        modal = null;
    }

    return (
        <>
            <Header
                setOpenTab={setOpenTab}
                setModalOpen={setOpen}
                isModalOpen={isOpen}
            />
            {modal}
            {content}
        </>
    );
}

export default App;
