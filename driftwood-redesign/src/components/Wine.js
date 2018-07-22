import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper"


class Wine extends Component {
  render() {
    return (
      <Paper className="Wine">
        <div className='wineCaption'>
          <h3>{this.props.name}</h3>
          <hr/>
          <p>{this.props.description}</p>
          <h4>{this.props.price}</h4>
        </div>
        <img src={this.props.image} alt={this.props.title}/>
      </Paper>
    );
  }
}

export default Wine;