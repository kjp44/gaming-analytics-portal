import React from 'react';

import APIRequest from './APIRequest';
import {Link} from "react-router-dom";


class Category extends React.Component {
    state = {
        products: []
    };

    componentDidMount() {
        this.getProducts()
    };

    getProducts = async () => {
        const temp = await APIRequest.getProducts(this.props.match.params.setID);
        this.setState({ products: temp.data.results });
    };

    renderProducts = () => {
        const products = this.state.products.map( product => {
            return (
                <div className="col-sm-4" key={`${product.productId} - ${product.subTypeName}`}>
                    <Link to={ `/product/${ product.productId }` }>
                        <div className="card text-center" style={{marginTop: '5px', marginBottom: '5px' }}>
                            {product.name}
                        </div>
                    </Link>
                </div>
            )
        });
        return products;
    };

    renderRows = () =>{
        const products = this.renderProducts;
        const rows = []
        for(let i = 0; i < products().length; i += 3){
            rows.push(
                <div className="row" key={i}>
                    { products().slice(i, i+3) }
                </div>
            )
        }
        return rows;
    };

    render(){
        return(
            <div className="container" style={{padding: '20px'}}>
                { this.renderRows() }
            </div>
        )
    }
}

export default Category;