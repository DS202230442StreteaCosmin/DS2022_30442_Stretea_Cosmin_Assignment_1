import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  description: string;
  onEdit: () => void;
  onDelete: () => void;
};

const AppointmentCard = (props: Props) => {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345, minWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" fontWeight={900}>
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={props.onEdit}>
            Edit
          </Button>
          <Button size="small" onClick={props.onDelete}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AppointmentCard;
