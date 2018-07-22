import React, { Component } from 'react';

import calendar from "../../img/calendar.jpg"
import wineClub from "../../img/wineClub.jpg"

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class WineClub extends Component {
  render() {
    return (
      <div className="WineClub">
        {/* <!-- WINE CLUB INFO --> */}
        <div className="wineclubHeader">
          <h1>Drink Local with the Silver Spur Wine Club!</h1>
          <strong>Call Dana Morrison to join Today! (512) 692-6229</strong>
        </div>

        <Card className="clubBenefits">
          <CardMedia
            style={{height: 200}}
            image={wineClub}/>
          <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Membership Benefits:
          </Typography>
          <hr/>
          <Typography gutterBottom component="ul">
            <li>Recieve a three bottle selection four times a year.</li>
            <li>Free glass of wine when picking up your quarterly wine package.</li>
            <li>20% off all glasses of wine and wine bottle sales, and 10% off all non-wine merchandise</li>
            <li>Quarterly Wine Club pick-up parties. Music, wine and food included.</li>
            <li>Invitation to members only events</li>
            <li>Preferred pricing for on-site events like parties, dinners and more!</li>
          </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardMedia
            style={{height: 200}}
            image={calendar}/>
          <CardContent>
            
          <Typography gutterBottom variant="headline" component="h2">
            Important Dates and Upcoming Events
          </Typography>
          <hr/>
          <Typography id="clubDates" component="table">
            <tr>
              <td><strong>Pick-up Parties</strong></td>
              <td><strong>24th Sept, 2017</strong></td>
              <td><strong>3rd Dec,2017</strong></td>
            </tr>

            <tr>
              <td>Next Bill</td>
              <td>11th Sept, 2017</td>
              <td>20th Nov, 2017</td>
            </tr>

            <tr>
              <td><strong>Next Shipment</strong></td>
              <td><strong>25th Sept, 2017</strong></td>
              <td><strong>4th Dec, 2017</strong></td>
            </tr>

            <tr>
              <td>Pick up wine by</td>
              <td>29th Oct, 2017</td>
              <td>7th Jan, 2018</td>
            </tr>
          </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default WineClub;