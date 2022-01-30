import React, {ChangeEvent} from 'react';
import {Box} from "@mui/material";

import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {CharactersList} from "./views/CharactersList/CharactersList";
import {CharacterDetails} from "./views/CharacterDetails/CharacterDetails";
import {EpisodesList} from "./views/EpisodesList/EpisodesList";
import {EpisodeDetails} from "./views/EpisodeDetails/EpisodeDetails";
import {LocationsList} from "./views/LocationsList/LocationsList";
import {LocationDetails} from "./views/LocationDetails/LocationDetails";
import {Home} from "./views/Home/Home";

const appTitle = "Rick & Morty";
const pages = ['Characters', 'Episodes', 'Locations'];

function App() {
    const handleOnSearch = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("Search - ", event.target.value);
    };

    return (
        <div>
            <Navbar title={appTitle} items={pages} onSearch={handleOnSearch} />
            <Box sx={{margin: 2}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="characters" element={<CharactersList/>}/>
                    <Route path="characters/:id" element={<CharacterDetails/>}/>
                    <Route path="episodes" element={<EpisodesList/>}/>
                    <Route path="episodes/:id" element={<EpisodeDetails/>}/>
                    <Route path="locations" element={<LocationsList/>}/>
                    <Route path="locations/:id" element={<LocationDetails/>}/>
                </Routes>
            </Box>
        </div>
    );
}

export default App;
