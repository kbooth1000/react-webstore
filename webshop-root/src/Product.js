import React, { Component } from 'react';
import SideMenu from './SideMenu';
import {connect} from 'react-redux';

let mapStateToProps = (state) => { 
    return { categories: state.categories };
};

// let mapDispatchToProps = (dispatch) => { 
// return { dispatch: dispatch };
// };

let ConnectedProduct = (props) => {
      
 return <main>
  <SideMenu />
  <div className="main-content">
  <div className="breadcrumbs">
      <p>
          <span className="category">Rocks</span>
          <span className="item">Small Purple Stone</span>
      </p>
  </div>
  <section className="product-display">
      <div className="product-image"> PRODUCT IMAGE </div>
      <div className="product-meta">
          <form className="cart" action="https://www.wheeldesks.com/product/notebook/" method="post" enctype="multipart/form-data">
              <div className="quantity">
                  <input type="number" id="quantity" className="input-qty" step="1" min="1" max="" name="quantity" value="1" title="Qty" size="4"
                      pattern="[0-9]*" inputmode="numeric" />
              </div>
              <button type="submit" name="add-to-cart" className="add-to-cart">Add to cart</button>
          </form>
      </div>
      <div className="product-info">
          <h1 className="product-title">Small Purple Stone</h1>
          <h3>Description:</h3>
          <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia soluta inventore suscipit velit totam, dolorum minus illum ipsa corrupti! Optio ratione praesentium quo odio inventore dignissimos eligendi repellendus fugiat.</p>
      </div>
  </section>
</div>
</main>;
};

let Product = connect(mapStateToProps)(ConnectedProduct);

export default Product;