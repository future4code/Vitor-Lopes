import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '45vw',
    minHeight: '30vh',
    marginTop: 50,
  },
  media: {
    height: 100,
  },
};

function TripsCards(props) {
  const { classes } = props;
  return (
    <Card id={props.id} className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography component="p">
            {props.description}
          </Typography>
          <Typography component="p">
            Planeta: {props.planet}
          </Typography>
          <Typography component="p">
            Duração: {props.durationInDays}
          </Typography>
          <Typography component="p">
            Data da viagem: {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Inscrever-se
        </Button>
      </CardActions>
    </Card>
  );
}

TripsCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TripsCards);