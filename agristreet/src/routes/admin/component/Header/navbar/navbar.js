import React , {Component ,Fragment} from 'react';
import { Link } from "react-router-dom";
import {Row,Col, Divider , Button ,Dropdown ,Menu} from 'antd';
import './navbar.css';
import { DownOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );
class Navbar extends Component{
    constructor(props){
        super(props);
    }

    render(){
       
        return(
                <Row>
                    <Col span={24}>
                        <div className="navbar-section">
                            <Row>
                                <Col span={4} offset={20}>
                                    <div className="navbar-content">
                                        <Link to="/">Home</Link>
                                        <Link to="/">Link</Link>
                                        <Dropdown overlay={menu}>
                                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            Hover me <DownOutlined />
                                            </a>
                                        </Dropdown>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
        );
    }
}

export default Navbar