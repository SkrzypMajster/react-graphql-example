import {CharacterListItemProps} from "./CharacterListItem.types";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {SxProps} from "@mui/system";

const IMAGE_SIZE = 200;

const labelStyles: SxProps = {
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    overflowX: 'hidden'
};

export const CharacterListItem = ({name, image}: CharacterListItemProps) => (
    <Card sx={{width: IMAGE_SIZE}}>
        <CardActionArea>
            <CardMedia
                component="img"
                height={IMAGE_SIZE}
                image={image}
                alt={`${name} image`}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" align="center" sx={labelStyles}>
                    {name}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);
