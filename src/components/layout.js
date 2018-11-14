import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, DatePicker } from 'antd';
import SideGrid from './sidegrid';
import 'antd/dist/antd.css';
import Tables from '../pages/table';

const { Header, Content, Footer, Sider } = Layout;

class Layot extends Component {
    
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible><SideGrid/></Sider>  
          <Layout>
            
           
          </Layout>
        </Layout>
      );
    }
  }

  export default Layot;