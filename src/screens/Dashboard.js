import React from "react";
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import {  Layout, theme } from 'antd';
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
    // const [data, setData] = useState({ hits: [] });
    // useEffect(() => {
    //     async function loadData() {
    //         const result = await axios(
    //             "https://uat-ag-api.mirrahealthcare.com/api/Reports/GetAllCasesChartDetails?accountId=41"
    //         );
    //         setData(result.data);
    //        // https://uat-ag-api.mirrahealthcare.com/api/User/GetUserDetails?id=-1
    //     }
    //     loadData();
    // }, []);


    // return (
    // <div>
    //     <h2>hello world</h2>
    //     
    //     <Outlet />
    // </div>
    // <div className="wrapper">
    //     <aside className="sidebar-wrapper">
    //         <div className="sidebar-brand">
    //             <h2>Logo</h2>
    //         </div>
    //         <Sidebar />
    //     </aside>
    //     <div id="content">
    //         <Header />
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-md-12">
    //                     <Outlet />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>


    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider >
                <div className="demo-logo-vertical" />
                <Sidebar />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                   
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default Dashboard;