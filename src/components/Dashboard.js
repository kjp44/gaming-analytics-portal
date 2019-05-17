import React from 'react';
import { connect } from 'react-redux';

import { removeProductFromDashboard } from "../actions";

class Dashboard extends React.Component {
    sortProductsByPrice = () => {
        let products = this.props.dashboardProducts.sort((a, b) => {
           return b.midPrice - a.midPrice
        });
        return products;
    }

    renderDashboardProducts = () => {

        let products = this.sortProductsByPrice().map( product => {
            return (
                <div className="col-sm-3" key={`${product.productId} - ${product.subTypeName}`}>
                    <div className="card">
                        <h5 className={"pl-2 pt-2"}>
                            { product.name } - { product.subTypeName }
                        </h5>
                        <img className="container-fluid p-2"src={product.imageUrl} alt={product.name}/>
                        <div className="card pl-3 pt-3 m-2" key={`${product.name} - ${product.subTypeName}`}>
                            <p>Low Price: ${ product.lowPrice }</p>
                            <p>Mid Price: ${ product.midPrice }</p>
                            <p>High Price: ${ product.highPrice }</p>
                        </div>
                        <button type="button"
                                onClick={() => { this.props.removeProductFromDashboard(product.productId, product.subTypeName)}}
                                className="m-2 btn btn-danger">
                            Remove
                        </button>
                    </div>
                </div>
            )
        });
        return products;
    };

    renderRows = () =>{
        const dashboardProducts = this.renderDashboardProducts();
        const rows = []
        for(let i = 0; i < dashboardProducts.length; i += 4){
            rows.push(
                <div className="row mb-3" key={i}>
                    { dashboardProducts.slice(i, i+4) }
                </div>
            )
        }
        return rows;
    };

    render() {
        if (this.props.dashboardProducts.length === 0){
            return(
                <div className="container" style={{marginTop: '15px'}}>
                    <div className="col-sm-12">
                        <h3 className={"p-1"}>
                            Your collection is empty!
                        </h3>
                    </div>
                </div>
            )
        } else {
            return(
            <div className="container" style={{marginTop: '15px'}}>
                <h3 className="mb-3">Your Collection</h3>
                {this.renderRows()}
            </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        dashboardProducts: state.dashboardProducts.dashboardProducts
    }
};

export default connect(mapStateToProps, { removeProductFromDashboard })(Dashboard);;