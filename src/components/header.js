import React, { Component } from 'react';
import { Layout, Menu, Icon, Input, Dropdown } from 'antd';
import './navbaronly.css';
import tmobiles from './tmobiles.png';
import '../index.css';
import "antd/dist/antd.css";
const { Header } = Layout;
const Search = Input.Search;

class Navbaronly extends Component {

  render() {
    return (
      <Header>

        <div className="logo">
          <img src={tmobiles} alt="tmobiles" className="logo_img" />
        </div>



        <div className="logo" />
        <Menu className="nav-area"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Icon className="icon" type="user" theme="filled" />

          <Search className="nav-area1"
            placeholder=" search here"
            onSearch={value => console.log(value)}
            enterButton
          />
          
 
          
            <div className="iconlist"  >
            <Icon type="bell" className="iconbell" />
            <Icon type="message" className="iconmsg" />
            <Icon type="user" className="iconuser" />
          </div>
          



          {/* <Menu.Item key="1"><Icon type="search" />Search</Menu.Item>  */}




        </Menu>
      </Header>


    );
  }
}

export default Navbaronly; 