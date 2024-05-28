import { useState } from "react";
import NavBar from "../../layout/Navbar/Navbar";
import NoteCard from "../../Cards/NoteCard";
import AddEditNotes from "./AddEditNotes/AddEditNotes";

import './Home.css';


const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const cancel = () => {
        setSearchValue('');
    };
    const setOnChange = (e) => {
        setSearchValue(e.target.value);
    };

    const data = {
        title: "Shrimp and Chorizo Paella",
        date: "September 14, 2016",
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, repellendus incidunt reprehenderit assumenda atque eligendi ducimus quisquam officia inventore, modi repudiandae dolores libero ea aliquam similique soluta impedit saepe? Quibusdam maiores odio perspiciatis rem error distinctio et, praesentium officiis architecto cum iure assumenda quod reprehenderit eligendi vero velit possimus nobis laborum magnam soluta accusantium quis ipsum sequi. A, accusamus ullam!',
        isPinned: false,
        tags: ['Lorem', 'Ipsum', 'dolor', 'sit'],
        onEdit: () => { },
        onDelete: () => { },
        onPinNote: () => { }
    };

    const [modal, setModal] = useState(false);

    function handleOpenModal(e) {
        e.stopPropagation();
        setModal(true);
    };
    function handleCloseModal() {
        setModal(false);
    };


    return (
        <div >
            <NavBar login={'login'} searchValue={searchValue} cancel={cancel} setOnChange={setOnChange} />
            <div className="NoteCardContainer">
                <NoteCard data={data} handleOpenModal={handleOpenModal} />
                <AddEditNotes modal={modal} handleCloseModal={handleCloseModal} />
            </div>
        </div>
    );
};

export default Home;
