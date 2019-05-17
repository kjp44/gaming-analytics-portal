import React from 'react';

import APIRequest from './APIRequest';

class Category extends React.Component {
    state = {
        productDetails: [],
        productPricing: []
    };

    componentDidMount() {
        this.getProductDetails();
        this.getProductPricing();
    };

    getProductDetails = async () => {
        const temp = await APIRequest.getProductDetails(this.props.match.params.productID)   ;
        this.setState({ productDetails: temp.data.results });
    };

    getProductPricing = async () => {
        const temp = await APIRequest.getProductPricing(this.props.match.params.productID);
        this.setState({ productPricing: temp.data.results });
    };

    renderProductInformation = () => {

        const products = this.state.productDetails.map( product => {
            return (
                <div className="col-sm-12" key={`${product.productId} - ${product.subTypeName}`}>
                    <h2 className={"p-1"}>
                        { product.name }
                    </h2>
                    <img className="ml-5"src={product.imageUrl} alt={product.name}/>
                    { this.state.productPricing.map( productType => {
                        console.log(productType)
                        return(
                            <div className="card p-3 m-1" key={productType.subTypeName}>
                                <h4>{ productType.subTypeName }</h4>
                                <p>Market Price: ${ productType.marketPrice }</p>
                                <p>Low Price: ${ productType.lowPrice }</p>
                                <p>Mid Price: ${ productType.midPrice }</p>
                                <p>High Price: ${ productType.highPrice }</p>
                            </div>
                        )
                    })}
                </div>
            )
        });
        return products;
    };

    render(){
        return(
            <div className="container" style={{padding: '20px'}}>
                {this.renderProductInformation()}
            </div>
        )
    }
}

export default Category;