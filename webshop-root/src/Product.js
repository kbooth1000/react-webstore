import React from 'react';
import SideMenu from './SideMenu';
import Breadcrumbs from './Breadcrumbs';
import {connect} from 'react-redux';
import {activateCategory, activateProduct} from './actions/actions';


let ConnectedProduct = (props) => {
      
 return <main>
  <SideMenu />
  <div className="main-content">
    <Breadcrumbs />
  <section className="product-display">
      <div className="product-image"> PRODUCT IMAGE </div>
      <div className="product-meta">
          <form className="cart" action="https://www.wheeldesks.com/product/notebook/" method="post">
              <div className="quantity">
                  <input type="number" id="quantity" className="input-qty" step="1" min="1" name="quantity" defaultValue="1" title="Qty" size="4"
                      pattern="[0-9]*" inputMode="numeric" />
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

let mapStateToProps = (state) => { 
    return { categories: state.products.categories,
                items: state.products.items,
                activeCategory: state.products.activeCategory };
};

let mapDispatchToProps = () => {
    return({
        activateCategory: activateCategory,
        activateProduct: activateProduct
    });
};

let Product = connect(mapStateToProps)(ConnectedProduct);

export default Product;