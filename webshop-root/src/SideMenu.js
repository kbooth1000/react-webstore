import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Product from './Product';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateToProps = (state) => { 
    return { categories: state.products.categories,
                items: state.products.items };
};

let ConnectedSideMenu = (props) => {
    

    let listCategories = () => {
        return (
            props.categories.map(category => (
                <li class="product-category">
                    <NavLink to={`/product/${category.name}`}>
                        {category.name}
                    </NavLink>
                    <ul>
                    {props.items.filter(item => item.categoryId===category.id).map(item => (
                        <li>
                            <NavLink to={`/product/${category.name}/${item.name}`}>{item.name}</NavLink>
                        </li>
                    ))}
                    </ul>
                </li>
            ))
        )
    }
    
    return <section class="sidebar-left">
    <ul class="product-categories-list">
        {listCategories()}
    </ul>
</section>
};

let SideMenu = connect(mapStateToProps)(ConnectedSideMenu);


export default SideMenu;