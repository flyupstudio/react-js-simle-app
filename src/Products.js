/**
 * Created by maximvlasenko on 12/22/16.
 */
import React from 'react';
import './Products.css';
import logotype from './logo.svg';
import { Navigation, Link, Router, Route, IndexRoute, browserHistory } from 'react-router'
import SetTimeoutMixin from './mixins/settimeout';
import axios from 'axios';

let timeOut = null;
let url = '';
var ProductItem = React.createClass({
    mixins: [SetTimeoutMixin],
    handleClick: function(event, param) {
        clearTimeout(timeOut);
        this.timeouts.forEach(clearTimeout);
        if (typeof param === 'undefined') {
            event.preventDefault();
            var t = event;
            var _this = this;
            timeOut = setTimeout(function(){
                console.log(t, 'do something');
                _this.handleClick(t,_this.props.href);

            }, 2000);
        } else {
            browserHistory.push(param);
        }
    },
    render: function() {
        return (
            <div className='productItem'>
                <img src={this.props.image} />
                <div className='bar'>
                    <Link onClick={this.handleClick} to={this.props.href}><span>{this.props.caption}</span></Link>
                    <h3>{this.props.price}</h3>
                </div>
            </div>
        )
    }
});

var Products = React.createClass({
    getInitialState: function() {
        return {
            products: []
        }
    },
    componentDidMount: function() {
        var _this = this;
        this.serverRequest =
            axios.get('http://flyupstudio.com/api/products.json')
                .then((res) => {
                _this.setState({
                products: res.data
            });
        });
    },
    render: function() {
        var products = this.state.products.map(function(product) {
            return <ProductItem image={product.image} href={product.href} price={product.price} caption={product.caption} />
        });
        return (
            <div className='productsGrid'>
                <img src={logotype} />
                {products}
            </div>
        )
    }
});

export default Products;
