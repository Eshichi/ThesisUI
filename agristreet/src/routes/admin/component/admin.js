import React, { Component } from "react";
import { Row, Col, Divider, Button, Layout } from "antd";
import Sidebar from "./Header/sidebar/sidebar";
import Navbar from "./Header/navbar/navbar";
import PageName from "./Header/pageName/pageName";
import "./admin.css";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSidebarVisible: true,
        };
    }
    toggleSidebar = () => {
        console.log("clicked");
        this.setState({
            isSidebarVisible: !this.state.isSidebarVisible,
        });
    };

    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className="admin-content-web">
                            <Layout>
                                <Sidebar
                                    toggleSidebar={this.toggleSidebar}
                                    isSidebarVisible={
                                        this.state.isSidebarVisible
                                    }
                                />
                                <Layout className="site-layout">
                                    <Header
                                        className="site-layout-background"
                                        style={{ padding: 0 }}
                                    >
                                        <Row>
                                            <Col span={4}>
                                                {React.createElement(
                                                    this.state.collapsed
                                                        ? MenuUnfoldOutlined
                                                        : MenuFoldOutlined,
                                                    {
                                                        className: "trigger",
                                                        onClick: this
                                                            .toggleSidebar,
                                                    }
                                                )}
                                            </Col>
                                            <Col span={20}>
                                                <Navbar />
                                            </Col>
                                        </Row>
                                    </Header>
                                    <Content
                                        className="site-layout-background"
                                        style={{
                                            margin: "24px 16px",
                                            padding: 24,
                                            minHeight: 280,
                                        }}
                                    >
                                        {this.props.children}
                                    </Content>
                                </Layout>
                            </Layout>
                        </div>
                        <div className="admin-content-mobile">
                            <Layout>
                                <Layout className="site-layout">
                                    <Header
                                        className="site-layout-background"
                                        style={{ padding: 0 }}
                                    >
                                        <Row>
                                            <Col xs={4}>
                                                {React.createElement(
                                                    this.state.collapsed
                                                        ? MenuUnfoldOutlined
                                                        : MenuFoldOutlined,
                                                    {
                                                        className: "trigger",
                                                        onClick: this
                                                            .toggleSidebar,
                                                    }
                                                )}
                                            </Col>
                                            <Col xs={20}>
                                                <Navbar />
                                            </Col>
                                        </Row>
                                    </Header>
                                </Layout>
                            </Layout>
                            <Layout>
                                <Layout className="site-layout">
                                    <Sidebar
                                        toggleSidebar={this.toggleSidebar}
                                        isSidebarVisible={
                                            this.state.isSidebarVisible
                                        }
                                    />
                                    <Content
                                        className="site-layout-background"
                                        style={{
                                            margin: "24px 16px",
                                            padding: 24,
                                            minHeight: 280,
                                        }}
                                    >
                                        {this.props.children}
                                    </Content>
                                </Layout>
                            </Layout>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Admin;
