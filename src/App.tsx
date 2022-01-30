import React, {ChangeEvent} from 'react';
import {Box} from "@mui/material";

import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {CharactersListView} from "./views/CharactersList/CharactersListView";
import {CharacterDetails} from "./views/CharacterDetails/CharacterDetails";
import {EpisodesList} from "./views/EpisodesList/EpisodesList";
import {EpisodeDetails} from "./views/EpisodeDetails/EpisodeDetails";
import {LocationsList} from "./views/LocationsList/LocationsList";
import {LocationDetails} from "./views/LocationDetails/LocationDetails";
import {Home} from "./views/Home/Home";
import {NotFound} from "./views/NotFound/NotFound";

const appTitle = "Rick & Morty";
const pages = [
    { label: 'Characters', path: "characters" },
    { label: 'Episodes', path: 'episodes' },
    { label: 'Locations', path: 'locations' },
];

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
                    <Route path="characters" element={<CharactersListView/>}/>
                    <Route path="characters/:id" element={<CharacterDetails/>}/>
                    <Route path="episodes" element={<EpisodesList/>}/>
                    <Route path="episodes/:id" element={<EpisodeDetails/>}/>
                    <Route path="locations" element={<LocationsList/>}/>
                    <Route path="locations/:id" element={<LocationDetails/>}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Box>
        </div>
    );
}

export default App;
