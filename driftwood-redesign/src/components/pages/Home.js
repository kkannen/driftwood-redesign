import React, { Component } from 'react';
import {Link} from "react-router-dom";

import pavillion from '../../img/pavillion.jpg'
import wineGlasses from '../../img/wineglasses.jpg'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


class Home extends Component {

    

  render() {

    return (
      <div className="Home">
        {/* <!-- ABOUT DRIFTWOOD ESTATE WINERY --> */}
        <div className='aboutDriftwood'>

        <Card>
            <CardMedia 
                style={{height: 300}}
                image={pavillion}/>
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    About Driftwood Estate Winery
                </Typography>
                <hr style={{width: "90%"}}/>
                <Typography component="p">
                    Driftwood Estate Winery and Vineyard embodies the spirit and heart of Texas. Driftwood radiates Texas pride in its production of high quality wines made from Texas grapes. Driftwood Estate Winery sits on a bluff overlooking our Estate Vineyard and the Hill Country from which visitors can enjoy our award winning wines. The view from the bluff is spectacular and the grounds are perfect for a picnic with your favorite glass or bottle of Driftwood Estate wine.
                </Typography>
            </CardContent>
        </Card>
            {/* <!-- WINE TASTING INFO --> */}
        <Card>
            <CardMedia 
                style={{height: 300}}
                image={wineGlasses}/>
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    Wine Tastings
                </Typography>
                <hr style={{width: "90%"}}/>

                <Typography component="p">
                    Taste any 6 wines listed on our tasting sheet for $15.00.  The tasting fee includes a souvenir Riedel wine glass with the Driftwood logo. <br/>
                    Silver, Gold and Platinum Spur Wine Club Members receive a complimentary wine tasting for each member plus 2 guests.  Complimentary tastings do not include a wine glass for more information on wine club click <Link to="/wineclub">here</Link>.<br/>
                    <em>Active duty military receive a free tasting and 10% discount on all wine purchases.  We thank you for your service.</em>
                </Typography>
            </CardContent>
        </Card>
        </div>
        {/* <!-- VISIT US (HOURS AND ADDRESS) --> */}
        <div className='comeVisit'>
            <h2>Come Visit!</h2>
            <hr style={{width: "90%", marginBottom: "1.5em"}}/>
            {/* map */}
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="700" height="433" id="gmap_canvas" src="https://maps.google.com/maps?q=Driftwood%20estate%20winery&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="title"></iframe>
                </div>
            </div>
            {/* end map */}
            <div className='visitorInfo'>
                <Paper className="paper">
                    <h2>Our Hours:</h2>
                    <hr/>
                    <p>Open: Every day 11:00am - 6:00pm</p>
                    <p>Exceptions: we are closed on Easter, Thanksgiving, Christmas and New Year's Day</p>
                    <p>*Note: We are are also closed four Sundays each year for wine club parties. To learn more about our wine club, click here.</p>
                </Paper>
                <Paper className="paper">
                    <h2>Where to Find Us:</h2>
                    <hr/>
                    <p>Driftwood Estate Winery <br/>
                    4001 Elder Hill Road <br/>
                    Driftwood, TX 78619</p>
                    <p>Tasting Room Telephone: (512) 858-9667</p>
                    <p>For reservations or booking special events, please contact Dana Morrison: dana@driftwoodwine.com</p>
                </Paper>
            </div>
        </div>
            {/* <!-- CONTACT INFO --> */}
            <h2>Contact Us</h2>
            <hr style={{width:"40%"}}/>
        <div className='contactInfo'>
            <div className="contact">
                <h3>Tasting Room Manager:</h3>
                <p>Jennifer Lee</p>
                <p>(512) 858-9667</p>
                <p>jennifer@driftwoodwine.com</p>
            </div>
            <div className="contact">
                <h3>Wine Club Manager:</h3>
                <p>Dana Morrison</p>
                <p>(512) 692-6229</p>
                <p>dana@driftwoodwine.com</p>
            </div>
            <div className="contact">
                <h3>Financial Officer:</h3>
                <p>Silvia Hsia</p>
                <p>(512) 692-6229</p>
                <p>info@driftwoodwine.com</p>
            </div>
            <div className="contact">
                <h3>Marketing Director:</h3>
                <p>Laura Elliott</p>
                <p>(512) 692-6229</p>
                <p>laura@driftwoodwine.com</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
