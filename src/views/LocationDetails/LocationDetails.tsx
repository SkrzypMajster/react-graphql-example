import {useParams} from "react-router-dom";
import {useLocation} from "../../hooks/useLocation/useLocation";
import {Alert, AlertTitle, Avatar, Box, Button, Divider, LinearProgress, Typography} from "@mui/material";
import {BaseLink} from "../../components/BaseLink/BaseLink";
import {ArrowBack} from "@mui/icons-material";

export const LocationDetails = () => {
    const {id} = useParams();
    const {loading, error, data} = useLocation({id: Number(id)});

    if (loading) {
        return <LinearProgress/>;
    }

    if (error || !data) {
        return (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Something went wrong with fetching location details. Please try again later!
            </Alert>
        );
    }

    return (
        <Box>
            <Typography variant="h5" sx={{marginTop: 1}}>Location: {data.location.name}</Typography>
            <Typography variant="body1" sx={{marginTop: 1}}>
                <strong>Type: </strong>
                <span>{data.location.type}</span>
            </Typography>
            <Typography variant="body1" sx={{marginTop: 1}}>
                <strong>Dimension: </strong>
                <span>{data.location.dimension}</span>
            </Typography>
            <Divider/>
            <Typography variant="h5" sx={{marginTop: 1, marginBottom: 2}}>Residents:</Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2}}>
                {
                    data.location.residents.map((resident) => (
                        <BaseLink path={`/characters/${resident.id}`}>
                            <Avatar
                                src={resident.image}
                                alt={`${resident.name} image`}
                                sx={{width: 56, height: 56}}
                            />
                        </BaseLink>
                    ))
                }
            </Box>
            <Box sx={{marginTop: 4}}>
                <BaseLink path="/locations">
                    <Button variant="outlined">
                        <ArrowBack color="primary"/>
                        <span>Back to list</span>
                    </Button>
                </BaseLink>
            </Box>
        </Box>
    );
}
