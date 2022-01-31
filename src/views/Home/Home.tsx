import {Box} from "@mui/material";

import {HomepageTile} from "../../components/HomepageTile/HomepageTile";

export const Home = () => (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
        <HomepageTile path="/characters" title="Characters" subtitle="Check characters list and it's details." />
        <HomepageTile path="/episodes" title="Episodes" subtitle="Check episodes list and it's details." />
        <HomepageTile path="/locations" title="Locations" subtitle="Check locations list and it's details." />
    </Box>
);
