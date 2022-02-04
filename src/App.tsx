import React from 'react';
import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";

import {Navbar} from "./components/Navbar/Navbar";
import {CharactersListView} from "./views/CharactersList/CharactersListView";
import {CharacterDetails} from "./views/CharacterDetails/CharacterDetails";
import {EpisodesListView} from "./views/EpisodesList/EpisodesListView";
import {EpisodeDetails} from "./views/EpisodeDetails/EpisodeDetails";
import {LocationsListView} from "./views/LocationsList/LocationsListView";
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
    return (
        <div>
            <Navbar title={appTitle} items={pages} />
            <Box sx={{margin: 2}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="characters" element={<CharactersListView/>}/>
                    <Route path="characters/:id" element={<CharacterDetails/>}/>
                    <Route path="episodes" element={<EpisodesListView/>}/>
                    <Route path="episodes/:id" element={<EpisodeDetails/>}/>
                    <Route path="locations" element={<LocationsListView/>}/>
                    <Route path="locations/:id" element={<LocationDetails/>}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Box>
        </div>
    );
}

export default App;
