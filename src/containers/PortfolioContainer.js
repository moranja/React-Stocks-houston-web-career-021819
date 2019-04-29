import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  state = {
    plusMinus: "-"
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.stocks.map(stock => <Stock {...stock} plusMinus={this.state.plusMinus} purchaseOrSellStock={this.props.purchaseOrSellStock} key={stock.id}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
