import React , {Component} from 'react';
import {Link} from 'react-router-dom'
import {Row,Col, Divider , Button , Breadcrumb} from 'antd';
import './pageName.css';

class PageName extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="page-title-container">
                <Row>
                    <Col span={24}>
                        <div className="page-title">
                            <Row>
                                <Col span={4}>
                                    <div className="page-title">
                                        Dashboard
                                    </div>
                                </Col>
                                <Col span={3} offset={17}>
                                    <div className="page-title-button">
                                        <Breadcrumb>
                                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                                            <Breadcrumb.Item>
                                                <Link to="/">Dashboard</Link>
                                            </Breadcrumb.Item>
                                        </Breadcrumb>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PageName