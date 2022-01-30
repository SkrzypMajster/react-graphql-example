import {CharacterListItemProps} from "./CharacterListItem.types";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

const IMAGE_SIZE = 200;

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
                <Typography gutterBottom variant="h6" component="div" align="center">
                    {name}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);
