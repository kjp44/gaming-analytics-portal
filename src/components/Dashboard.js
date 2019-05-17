import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    renderProductInformation = () => {
        const products = this.props.dashboardProducts.map( product => {
            return (
                <div className="col-sm-12" key={`${product.name} - ${product.subTypeName}`}>
                    <h5 className={"p-1"}>
                        { product.name } - { product.subTypeName }
                    </h5>
                    <img className="m-3"src={product.imageUrl} alt={product.name}/>
                    <div className="card pl-3 pt-3 mb-3" key={`${product.name} - ${product.subTypeName}`}>
                        <p>Low Price: ${ product.lowPrice }</p>
                        <p>Mid Price: ${ product.midPrice }</p>
                        <p>High Price: ${ product.highPrice }</p>
                    </div>
                </div>
            )
        });
        return products;
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
                <h3>Your Collection</h3>
                {this.renderProductInformation()}
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

export default connect(mapStateToProps)(Dashboard);;