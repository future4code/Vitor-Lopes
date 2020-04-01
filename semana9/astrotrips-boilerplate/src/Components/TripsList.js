import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    width: '48vw',
    minHeight: '10vh',
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
          <Button size="small" color="primary">
            Detalhes
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

TripsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TripsList);