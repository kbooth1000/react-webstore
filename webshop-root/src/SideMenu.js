import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {activateCategory, activateProduct} from './actions/actions';
import store from './store';
import bindActionCreators from 'redux';

let ConnectedSideMenu = (props) => {
    let handleCatClick = (category) => {
        store.dispatch( activateCategory( category ) );
    }
    let handleClick = (item, category) => {
        if(item){
        console.log('handleClick item: ', item);
        store.dispatch( activateProduct( item ) );
        store.dispatch( activateCategory( category ));
        } else {
           //somehow make activeProduct be null
        }
    }
console.log('activeCategory(sidemenu): ', props.activeCategory);
    let listCategories = () => {
        return (
            props.categories.map(category => (
                <li className="product-category" key={category.name} >
                    <NavLink to={`/product/${category.name}`} onClick={ (event)=>handleClick(null, category) }>
                        {category.name}
                    </NavLink>
                    <ul>
                    {props.items.filter(item => item.categoryId===category.id).map(item => (
                        <li key={category.name + item.name}>
                            <NavLink to={`/product/${category.name}/${item.name}`} onClick={(event)=>handleClick(item, category)}>{item.name}</NavLink>
                        </li>
                    ))}
                    </ul>
                </li>
            ))
        )
    }
    
    return <section className="sidebar-left">
    <ul className="product-categories-list">
        {listCategories()}
    </ul>
</section>
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

let SideMenu = connect(mapStateToProps, mapDispatchToProps)(ConnectedSideMenu);


export default SideMenu;