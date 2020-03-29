import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: '45vw',
    minHeight: '20vh',
    marginTop: 10,
  },
  media: {
    height: 100,
  },
};

function TripsList(props) {
  const { classes } = props;
  return (
    <Card id={props.id} className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
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
          Detalhes
        </Button>
      </CardActions>
    </Card>
  );
}

TripsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TripsList);