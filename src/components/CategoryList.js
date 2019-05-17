import React from 'react';
import { Link } from 'react-router-dom';

import APIRequest from './APIRequest';

class CategoryList extends React.Component {
    state = {
        categories: []
    };

    componentDidMount() {
        this.getCategories()
    };

    getCategories = async () => {
        const temp = await APIRequest.getCategories();
        this.setState({ categories: temp.data.results });
    }

    renderCategories = () => {
        const categories = this.state.categories.map( category => {
            return (
                <div className="col-sm-3" key={ category.categoryId }>
                    <Link to={ `/category/${ category.categoryId }` }>
                        <div className="card text-center" style={{marginTop: '5px', marginBottom: '5px' }}>
                            <img src={require(`../images/${ category.categoryId }.jpg`)} alt={category.name} style={{ maxHeight: '135px', padding: '5px' }} />
                        </div>
                    </Link>
                </div>
            )
        });
        return categories;
    };

    renderRows = () =>{
        const categories = this.renderCategories;
        const rows = []
        for(let i = 0; i < categories().length; i += 4){
            rows.push(
                <div className="row" key={i}>
                    { categories().slice(i, i+4) }
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


export default CategoryList;