import React from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const Product = ({item, index}) => {

    const params = useParams();

    return (
        <div className="item-card">
            <Link to={`/getUserPosts/${item.username}`}><b>{item.username}</b></Link>
            <img src={item.image} alt=""/>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;