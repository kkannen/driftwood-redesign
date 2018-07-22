import React, { Component } from 'react';

class News extends Component {
  render() {
    return (
      <div className="News">
           {/* <!-- NEWS --> */}
      <h1>News and Upcoming Events</h1>
      <h3>Driftwood Estate Winery was Recently Awarded PRIME Living's Readers' Choice Award</h3>

      {/* <!-- WINE CLUB MEMBERS ONLY AREA div --> */}
      <div class="styleOne">
        <h3>Wine Club Memebers Only Area</h3>
        <p>The pavilion and pavilion patio are now reserved on <em>Saturday and Sunday</em> for wine club memebers only. We will soon be adding a wine tasting bar in the Pavilion so that the wine club members will be able to bypass the tasting room and get everything they need in the Pavilion.</p>
        <p>To learn more about our wine club, click <a href="wineclub.html">here</a></p>
      </div>
      

      {/* <!-- WOUNDED WARRIOR PROGRAM --> */}
      <div class="styleTwo">
        <h3>Wounded Warrior Program</h3>
        <p>During the month of October, 2016 Driftwood Estate Winery raised $12,500. for the National Wounded Warrior Center.  The donation was presented to the National Wounded Warrior Center of the Disabled Sports Eastern Sierra (DSES) at the December 10th fundraiser in Mammoth Lakes.</p>
      </div>
      

      {/* <!-- MORE WOUNDED WARRIOR INFO --> */}
      <div class="styleOne">
        <h3>What is the National Wounded Warrior Center?</h3>
        <p>The National Wounded Warrior Center will be a fully accessible, state-of-the-art, environmentally friendly facility located in Mammoth Lakes, California adjacent to Cerro Coso Community College.</p>
        <p>The National Wounded Warrior Center empowers wounded, ill and injured servicemen and women by facilitating their transition into fulfilling civilian lives through education, rehabilitation, health and wellness.</p>
        <p><em>You can’t put a price tag on an opportunity to come to a place as soothing as Mammoth for these Wounded Warriors–to feel like they’re not alone, that they’re not forgotten It’s one thing for the government to do it, but it’s when private citizens and communities are doing it for the love of fellow man that really touches the young soldiers. It’s a chance to fundamentally save or change a person for the rest of their life.</em> <br/><strong>–Larry D. Nicholson, Commanding General, 1st Marine Division</strong></p>
        <p><em>I have been up to Mammoth and watched Kathy Copeland and her incredible team firsthand. The work they do for our wounded, ill and injured Marines is amazing, and gives recovering Marines and Sailors self-esteem and self-confidence like few things I have seen.</em> <br/><strong>–Col. Willard A. Buhl USMC</strong></p>
        <p>for more information on Wounded Warriors, click <a href="http://www.woundedwarriorsmammoth.org/" target="new">here</a>.</p>
      </div>
      

      {/* <!-- AWARDS --> */}
      <div class="awards">
        <h2>Awards</h2>
      <p>2016 Houston Livestock Show International Wine Competition <br/>
        2015 Cuvee Blanc ~ Gold Medal, Texas Class Champion, International <br/> Reserve Class Champion <br/>
        2015 Orange Muscat ~ Silver Medal, Texas Class Champion, International br Class Champion <br/>
        2013 Longhorn Red ~ Silver Medal, Texas Class Champion <br/>
        2013 Syrah ~ Silver Medal, Texas Class Champion <br/>
        2013 Alamo Red ~ Gold Medal <br/>
        2013 Sangiovese ~ Silver Medal <br/>
        2013 Cabernet Sauvignon ~ Silver Medal <br/>
        2015 Dry Rose’ ~ Silver Medal <br/>
        2015 Viognier ~ Silver Medal <br/>
        2015 Chardonnay ~ Bronze Medal <br/>
        2013 Merlot ~ Bronze Medal <br/>
        2015 Viognier ~ Double Gold Medal, Reserve Class Champion, Reserve Texas Class Champion<br/>
        2015 Orange Muscat ~ Gold Medal, Texas Class Champion<br/>
        2015 Chardonnay ~ Silver Medal, Reserve Class Champion, Reserve Texas Class Champion<br/>
        2014 Longhorn Red ~ Silver Medal, Reserve Texas Class Champion
        2014 Syrah ~ Silver Medal, Texas Class Champion<br/>
        2014 Lone Star Cab ~ Silver Medal, Reserve Texas Class Champion<br/>
        2014 Sangiovese ~ Silver Medal<br/>
        2014 Dry Rose’ ~ Silver Medal<br/>
        2014 Alamo Red ~ Bronze Medal<br/>
        2014 Merlot ~ Bronze Medal</p>
      </div>
 
      </div>
    );
  }
}

export default News;