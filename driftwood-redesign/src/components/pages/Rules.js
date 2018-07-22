import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

class Rules extends Component {
  render() {
    return (
      <div className="Rules">
      <h1>House Rules</h1>
      <hr/>
      <div className='rulesGrid'>
      {/* <!-- GENERAL POLICIES --> */}
      <Paper className="genPol">
        <h2>General Policies</h2>
        <ul>
          <li>No outside alcohol permitted on the property</li>
          <li>We are a 100% <strong>smoke free</strong> facility. Smoking and vaping is strictly prohibited anywhere on the property</li>
          <li>Government-issued ID required if you are under 30</li>
          <li>Wine will not be sold to anyone appearing to be intoxicated</li>
          <li>Wine sales for consumption <strong>on-premises</strong>  end <strong>15 minutes before closing</strong></li>
          <li>Our outdoor facilities are for the use of winery customers only</li>
          <li>For the safety and enjoyment of our adult guests we do not allow any sports equipment to be used on our premises</li>
          <li>Any commercial use of the winery property must be approved in advance.</li>
          <li>Sorry, but we do not host weddings.</li>
        </ul>
        <p>For more details on our alcohol policies, click <a href="#alcoholPolicy">here</a>.</p>
      </Paper>

      {/* <!-- WHAT TO DO WITH YOUR KIDS --> */}
      
      <Paper className="minors">
        <h2>Are minors allowed?</h2>
        <p>Minors are allowed on the property as long as they are well-behaved and accompanied by a legal adult.</p>
        <p>Children and infants are not allowed in the tasting room, and may not be served alcohol under any circumstances.</p><br/>
      </Paper>

      {/* <!-- WHAT TO DO WITH DOGS --> */}
      <Paper className="dogs">
        <h2>Can I bring my dog?</h2>
        <p>Dogs are welcome on the property as long as they are well-behaved, and kept on a leash at all times. We also ask that you please clean up after your dog. <strong>No dogs are allowed inside the tasting room</strong> per health department regulations</p>
      </Paper>

      {/* <!-- WHAT TO DO WITH LARGE GROUPS --> */}
      <Paper className="largeGroups">
        <h2>Limo, van and bus group policies:</h2>
        <p>Limo, van and bus groups are welcomed at Driftwood Estate Winery <strong>Monday through Friday</strong>. Groups of <strong>six or fewer</strong> are welcome at any time during operating hours. <strong>Groups of more than six people or those wishing to visit on Saturday or Sunday must make a reservation 48 hours in advance.</strong></p>
        <p>To make a reservation for your group, please contact Dana Morrison: <br/>
        (512) 692-6229 <br/>
        dana@driftwoodwine.com</p>
      </Paper>

    {/* <!-- DETAILED AND BORING ALCOHOL POLICY--> */}
      <Paper className="alcoholPolicy">
        <h2>Alcohol Policy</h2>
        <p>Absolutely NO alcoholic beverages are allowed on the primises OTHER THAN wine from our winery.  This is a legal requirement that applies to “bonded facilities” (wineries) and your entire group will be asked to leave if even one person violates this rule, so please comply. Public intoxication is unlawful, regardless of whether you have a designated driver or are in a limo/bus/shuttle. If a group arrives, and our Constable determines that anyone in that group is intoxicated, that group will be asked to leave. This policy also applies to inPaperiduals arriving in private cars. It is against the law to serve or sell alcohol to an intoxicated person. Winery servers cannot serve anyone they suspect is over or near the “legal limit” of alcohol.  It is a judgment call and the winery management will support our TABC trained employees. If you are advised you cannot be served, please do not argue with our staff. Additionally, wineries, by law, can refuse service to the entire group if ONE person is considered “over the limit” of alcohol.
        </p>
      </Paper>
      </div>
      </div>
    );
  }
}

export default Rules;