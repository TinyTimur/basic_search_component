import { Offers } from './Components/OffersContainer/Offers.jsx';
import { Suppliers } from './Components/Suppliers/Suppliers.jsx';
import { Header } from './Components/Header/Header.jsx';
import { useState } from 'react';
import { OfferModal } from './Components/OfferModal/OfferModal.jsx';

function App() {
    const [openTab, setOpenTab] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    let content;
    if (openTab === 'offers') {
        content = <Offers searchInput={searchInput} />;
    } else if (openTab === 'suppliers') {
        content = <Suppliers />;
    } else {
        content = <p>Please select a tab</p>;
    }

    return (
        <>
            <Header setOpenTab={setOpenTab} setSearchInput={setSearchInput} />
            {content}
        </>
    );
}

export default App;
