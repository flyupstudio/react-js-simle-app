/**
 * Created by maximvlasenko on 12/22/16.
 */
import React from 'react';
import './ProductsInformation.css';
import axios from 'axios';
import logotype from './logo.svg';


import { Navigation, Link, Router, Route, IndexRoute, browserHistory } from 'react-router'

var ProductInformation = React.createClass({
    getInitialState: function() {
        return {
            product: []
        }
    },
    componentDidMount: function() {
        var _this = this;
        console.log('http://flyupstudio.com/api' + browserHistory.getCurrentLocation().pathname + '.json');
        this.serverRequest =
            axios.get('http://flyupstudio.com/api' + browserHistory.getCurrentLocation().pathname + '.json')
                .then((res) => {
                console.log(res.data[0]);
                _this.setState({
                product: res.data[0]
            });
        });
    },
    render: function() {
        return (
            <div className='productsGridImformation'>
            <img src={logotype} />
            <div>
                <h1>{this.state.product.caption}</h1>
                <img src={this.state.product.image} alt={this.state.product.caption} />
        <h3>{this.state.product.price}</h3>
            <p>{this.state.product.description}</p>
                </div>
            </div>
        )
    }
});

export default ProductInformation;
