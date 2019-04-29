import React from 'react'

const Stock = ({id, name, price, count, plusMinus, purchaseOrSellStock}) => (
  <div>

    <div className="card" onClick={() => purchaseOrSellStock(id, plusMinus)}>
      <div className="card-body">
        <h5 className="card-title">{
            name
          }</h5>
        <p className="card-text">{price} {count > 0 ? `(${count})` : null}</p>
      </div>
    </div>


  </div>
);

export default Stock
