import { Offers } from './Components/OffersContainer/Offers.jsx';
import { Suppliers } from './Components/Suppliers/Suppliers.jsx';
import { Header } from './Components/Header/Header.jsx';
import { useState } from 'react';
import { OfferModal } from './Components/OfferModal/OfferModal.jsx';

function App() {
    const [openTab, setOpenTab] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [isOpen, setOpen] = useState(false);

    let content;
    if (openTab === 'offers') {
        content = <Offers searchInput={searchInput} />;
    } else if (openTab === 'suppliers') {
        content = <Suppliers />;
    } else {
        content = <p>Please select a tab</p>;
    }

    let modal;

    if (isOpen) {
        modal = <OfferModal setOpen={setOpen} />;
    } else {
        modal = null;
    }

    return (
        <>
            <Header
                setOpenTab={setOpenTab}
                setSearchInput={setSearchInput}
                setModalOpen={setOpen}
                isModalOpen={isOpen}
            />
            {modal}
            {content}
        </>
    );
}

export default App;
