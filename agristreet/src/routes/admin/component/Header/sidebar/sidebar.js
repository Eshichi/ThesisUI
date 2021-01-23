import React , {Component} from 'react';
import { Row, Col, Drawer, Button, Radio, Space} from 'antd';
import {Link} from 'react-router-dom';
import './sidebar.css';

class Sidebar extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="sidebar-container">
                <Drawer
                    className="sidebar-drawer"
                    title="Toggle Menu"
                    placement="left"
                    closable={false}
                    onClose={this.props.onSidebarClose}
                    visible={this.props.isSidebarVisible}
                    key="left"
                    >
                        <Row>
                            <Col span={24}>
                                <div className="sidebar-content">
                                    <Row>
                                        <Col span={24}>
                                            <div className="sidebar-tabs">
                                                <Link to="/">Dashboard</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <div className="sidebar-tabs">
                                                <Link to="/">Shortcuts</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <div className="sidebar-tabs">
                                                <Link to="/">Overview</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <div className="sidebar-tabs">
                                                <Link to="/">Events</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <div className="sidebar-tabs">
                                                <Link to="/">Profile</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <div className="sidebar-tabs">
                                                <Link to="/">Status</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                </Drawer>
            </div>
        );
    }
}

export default Sidebar