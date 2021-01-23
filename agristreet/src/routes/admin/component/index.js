import React , {Component ,Fragment} from 'react';
import {Row,Col, Divider , Button} from 'antd';
import Header from './Header/header';

class Admin extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Row>
                    <Col span={24}>
                        <Header />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Admin