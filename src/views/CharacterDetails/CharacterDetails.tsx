import {Link, useParams} from "react-router-dom";
import {Alert, AlertTitle, Avatar, Box, Button, Divider, LinearProgress, Typography} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";

import {useCharacter} from "../../hooks/useCharacter/useCharacter";
import {BaseLink} from "../../components/BaseLink/BaseLink";

export const CharacterDetails = () => {
    const {id} = useParams();
    const {loading, error, data} = useCharacter({id: Number(id)});

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
        <div>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Avatar
                    src={data.character.image}
                    alt={`${data.character.name} image`}
                    sx={{width: 200, height: 200}}
                />
                <Typography variant="h5" sx={{marginTop: 1}}>{data.character.name}</Typography>
                <Typography variant="subtitle1" sx={{marginBottom: 4}}>{data.character.species}</Typography>
            </Box>
            <Divider/>
            <Typography variant="h5" sx={{marginTop: 2}}>Character details:</Typography>
            <Box sx={{marginTop: 1, marginBottom: 1}}>
                <Typography variant="body1">
                    <strong>Gender: </strong>
                    <span>{data.character.gender}</span>
                </Typography>
                <Typography variant="body1">
                    <strong>Status: </strong>
                    <span>{data.character.status}</span>
                </Typography>
                <Typography variant="body1">
                    <strong>Origin: </strong>
                    {
                        data.character.origin.id ?
                            (
                                <Link to={`/locations/${data.character.origin.id}`}>
                                    {data.character.origin.name}
                                </Link>
                            ) : <span>{data.character.origin.name}</span>
                    }
                </Typography>
                <Typography variant="body1">
                    <strong>Location: </strong>
                    {
                        data.character.location.id ?
                            (
                                <Link to={`/locations/${data.character.location.id}`}>
                                    {data.character.location.name}
                                </Link>
                            ) : <span>{data.character.location.name}</span>
                    }
                </Typography>
            </Box>
            <Divider/>
            <Typography variant="h5" sx={{marginTop: 2}}>Episodes:</Typography>
            <ul>
                {
                    data.character.episode.map((episode) => (
                        <Link to={`/episodes/${episode.id}`} key={episode.id}>
                            <li>
                                <Typography variant="body1">{episode.name}</Typography>
                            </li>
                        </Link>
                    ))
                }
            </ul>
            <Box sx={{marginTop: 4}}>
                <BaseLink path="/characters">
                    <Button variant="outlined">
                        <ArrowBack color="primary"/>
                        <span>Back to list</span>
                    </Button>
                </BaseLink>
            </Box>
        </div>
    );
}
