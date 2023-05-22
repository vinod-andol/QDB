import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, generatePath} from "react-router-dom";
import axios from "axios";

const Blogs = () => {
    const [blogsdata, setBlogsData] = useState();
    const [id, setId] = useState();
    const history = useNavigate();
   
    useEffect(() => {          
            async function loadBlogsData() {   
              const result = await axios(
                  `https://jsonplaceholder.typicode.com/users/2/posts`
              );
              setBlogsData(result.data);
              setId();
          }
          loadBlogsData();          
    }, []);

    const handleProceed = (e) => {
        console.log(e)
        id && history.push(generatePath("/Dashboard/BlogsDetails/:id", { id }));
      };

    const listItems = blogsdata?.map((blog) =>
        <li key={blog.id}>
            <h5>{blog.title}</h5>
            <p>{blog.body}</p>
            <Link to={`/Dashboard/BlogsDetails/${blog.id}`} onClick={handleProceed}>Read more</Link>
        </li> 
    );

    return (
        <div>           
            <ul className='blogs-list'>
            {listItems}
                </ul>
        </div>
    );
}

export default Blogs;