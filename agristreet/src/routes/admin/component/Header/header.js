import React , {Component} from 'react';
import {Row,Col, Divider , Button} from 'antd';
import Sidebar from './sidebar/sidebar';
import Navbar from './navbar/navbar';
import PageName from './pageName/pageName';
import './header.css';

class Header extends Component{
    constructor(props){
        super(props);

        this.state ={
            isSidebarVisible: true
        }
    }

    onSidebarOpen = () => {
        this.setState({
            isSidebarVisible: true
        })
    }
    onSidebarClose = () =>{
        this.setState({
            isSidebarVisible: false
        })
    }

    render(){
        return(
            <div>
                <Row>
                    <Col span={24}>
                        <div className="header-section">
                            <Row>
                                <Col span={3}>
                                    <div className="header-sidebar-btn">
                                        <Button onClick={this.onSidebarOpen}>Toggle Menu</Button>
                                    </div>
                                </Col>
                                <Col span={21}>
                                    <div className="header-navbar">
                                        <Navbar />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="header-title">
                            <PageName />
                        </div>
                    </Col>
                </Row>
                <Sidebar isSidebarVisible={this.state.isSidebarVisible} onSidebarClose={this.onSidebarClose} />
            </div>
        );
    }
}

export default Header