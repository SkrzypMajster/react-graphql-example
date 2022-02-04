import {useParams} from "react-router-dom";
import {useEpisode} from "../../hooks/useEpisode/useEpisode";
import {Alert, AlertTitle, Avatar, Box, Button, Divider, LinearProgress, Typography} from "@mui/material";
import {BaseLink} from "../../components/BaseLink/BaseLink";
import {ArrowBack} from "@mui/icons-material";

export const EpisodeDetails = () => {
    const {id} = useParams();
    const {loading, error, data} = useEpisode({id: Number(id)});

    if (loading) {
        return <LinearProgress/>;
    }

    if (error || !data) {
        return (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Something went wrong with fetching characters details. Please try again later!
            </Alert>
        );
    }

    return (
        <Box>
            <Typography variant="h5" sx={{marginTop: 1}}>Episode: {data.episode.episode}</Typography>
            <Typography variant="body1" sx={{marginTop: 1}}>
                <strong>Name: </strong>
                <span>{data.episode.name}</span>
            </Typography>
            <Typography variant="body1" sx={{marginTop: 1}}>
                <strong>Air date: </strong>
                <span>{data.episode.air_date}</span>
            </Typography>
            <Divider/>
            <Typography variant="h5" sx={{marginTop: 1, marginBottom: 2}}>Characters:</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2}}>
                {
                    data.episode.characters.map((character) => (
                        <BaseLink path={`/characters/${character.id}`}>
                            <Avatar
                                src={character.image}
                                alt={`${character.name} image`}
                                sx={{width: 56, height: 56}}
                            />
                        </BaseLink>
                    ))
                }
            </Box>
            <Box sx={{marginTop: 4}}>
                <BaseLink path="/episodes">
                    <Button variant="outlined">
                        <ArrowBack color="primary"/>
                        <span>Back to list</span>
                    </Button>
                </BaseLink>
            </Box>
        </Box>
    );
}
