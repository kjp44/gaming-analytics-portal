import React from 'react';

import APIRequest from './APIRequest';
import {Link} from "react-router-dom";


class Category extends React.Component {

    state = {
        sets: []
    };

    componentDidMount() {
        this.getSets()
    };

    getSets = async () => {
        const temp = await APIRequest.getSets(this.props.match.params.categoryID);
        this.setState({ sets: temp.data.results });
    };

    renderSets = () => {
        const sets = this.state.sets.map( set => {
            return (
                <div className="col-sm-4" key={ set.groupId } >
                    <Link to={ `/set/${ set.groupId }` }>
                        <div className="card text-center" style={{marginTop: '5px', marginBottom: '5px' }}>
                            { set.name }
                        </div>
                    </Link>
                </div>
            )
        });
        return sets;
    };

    renderRows = () =>{
        const sets = this.renderSets;
        const rows = []
        for(let i = 0; i < sets().length; i += 3){
            rows.push(
                <div className="row" key={i}>
                    { sets().slice(i, i+3) }
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