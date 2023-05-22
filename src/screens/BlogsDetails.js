import React from 'react';
import {   
    useParams
  } from "react-router-dom";

const BlogsDetails = () => {
    const id  = useParams();
   // const thisProduct = productsData.find(prod => prod.id === productId);

    return (
        <div>
            <ul className='blogs-list'>
                <div>
                    <p>Id: {id}</p>
                </div>
            </ul>
        </div>
    );
}

export default BlogsDetails;