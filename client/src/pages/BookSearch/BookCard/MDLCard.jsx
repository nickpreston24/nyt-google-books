import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

export const MDLCard = (props) => (
    <Card shadow={0} style={{width: '512px', margin: 'auto', zIndex: -2}}>    
        {
            props.img ?
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://picsum.photos/640/360) center / cover' }}>{props.name}</CardTitle> :
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>{props.name}</CardTitle>
        }
        {
            props.description ?
            <CardText style={{color: '#f20c4a'}}>{props.description}</CardText>:
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
        }

        <CardActions border>
            <Button href={props.link} colored>View it!</Button>
        </CardActions>

        <CardMenu style={{color: '#fff'}}>
            {/* <IconButton name="share" /> */}
        </CardMenu>
    </Card>
)