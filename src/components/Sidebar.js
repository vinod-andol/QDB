import { NavLink } from "react-router-dom";
import {
    UserOutlined,
    AppstoreOutlined,
    MenuOutlined
} from '@ant-design/icons';
import { useState, useEffect } from 'react';
import axios from "axios";


const Sidebar = () => {
    const [usersdata, setData] = useState({ hits: [] });
   
    useEffect(() => {          
            async function loadData() {   
              const result = await axios(
                  `https://jsonplaceholder.typicode.com/users/2`
              );
              setData(result.data);
          }
          loadData();          
    }, []);

    return (
        <div>
            <div className="sidebar-logo">
                <img src={require('../images/logo.jpg')} alt=""/>
                <MenuOutlined style={{ fontSize: '20px', float: 'right', marginTop: '18px', color: '#fff' }} />
            </div>

            <div className="user-panel">
            <img src={require('../images/user.png')} alt=""/>
            <h5>
                <span>Hello</span>
                {usersdata.name}
            </h5>
            </div>
            <ul className='sidebar-nav'>
                <li>
                        <NavLink exact="true" activeclassname="d-flex align-items-center active" to=" ">
                            <AppstoreOutlined /> Dashboard</NavLink>
                </li>
                <li>
                    <NavLink activeclassname="d-flex align-items-center active" to="Blogs">
                        <UserOutlined />Blogs</NavLink>
                </li>
            </ul>           
        </div>
    )
}

export default Sidebar;