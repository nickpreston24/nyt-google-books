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
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);




// import Card from '@material-ui/core/Card';

// export const MUICard = (props) => (
//     <Card shadow={0} style={{width: '512px', margin: 'auto', zIndex: -2}}>    
//         {
//             props.img ?
//                 <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://picsum.photos/640/360) center / cover' }}>{props.name}</CardTitle> :
//                 <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>{props.name}</CardTitle>
//         }
//         {
//             props.description ?
//             <CardText style={{color: '#f20c4a'}}>{props.description}</CardText>:
//             <CardText>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Mauris sagittis pellentesque lacus eleifend lacinia...
//             </CardText>
//         }

//         <CardActions border>
//             <Button href={props.link} colored>View it!</Button>
//         </CardActions>

//         <CardMenu style={{color: '#fff'}}>
//             {/* <IconButton name="share" /> */}
//         </CardMenu>
//     </Card>
// )