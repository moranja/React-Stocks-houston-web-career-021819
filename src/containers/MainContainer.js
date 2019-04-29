import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    filter: "",
    sort: ""
  }

  updateSort = (e) => {
    e.persist()
    console.log(e)
    this.setState({sort: e.target["value"]})
  }

  updateFilter = (e) => {
    e.persist()
    this.setState({filter: e.target["value"]})
  }

  componentDidMount() {
    fetch('http://localhost:3001/stocks')
    .then(res=>res.json())
    .then(stocks=>this.setState({
      stocks: stocks.map(stock => {return {...stock, count: 0}})
    }))
  }

  purchaseOrSellStock = (id, plusMinus) => {
    let stockInPortfolio = this.state.stocks.find(stock => stock.id === id)
    plusMinus === "+" ? stockInPortfolio.count += 1 : stockInPortfolio.count -= 1
    this.setState({
      portfolio: this.state.stocks.map(stock => stock.id === stockInPortfolio.id ? stockInPortfolio : stock)
    })
  }

  portfolioStocks = () => {
    return this.filteredStocks().filter(stock => stock.count > 0)
  }

  sortedStocks = () => {
    const stocksToBeSorted = [...this.state.stocks]
    if (this.state.sort === "alphabetically") {
      return stocksToBeSorted.sort((a,b) => a.name < b.name ? -1 : 1)
    } else if (this.state.sort === "price") {
      return stocksToBeSorted.sort((a,b) => a.price > b.price ? -1 : 1)
    } else {
      return this.state.stocks
    }
  }

  filteredStocks = () => {
    const stocksToBeFiltered = [...this.sortedStocks()]
    return stocksToBeFiltered.filter(stock => stock.type.includes(this.state.filter))
  }

  render() {
    return (
      <div>
        <SearchBar sort={this.state.sort} updateSort={this.updateSort} updateFilter={this.updateFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.filteredStocks()} purchaseOrSellStock={this.purchaseOrSellStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.portfolioStocks()} purchaseOrSellStock={this.purchaseOrSellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
