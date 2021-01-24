import React, { Component } from "react";
import { Row, Col, Drawer, Button, Radio, Space, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./sidebar.css";
import Logo from "../../../../../Image/logo.jpeg";
import {
    UnorderedListOutlined,
    TagsOutlined,
    ImportOutlined,
    DeliveredProcedureOutlined,
    ToolOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let path = window.location.pathname.split("/");
        let activeTab = "1";
        switch (path[2]) {
            case "order":
                activeTab = "2";
                break;
            case "inventory":
                activeTab = "3";
                break;
            case "product":
                activeTab = "4";
                break;
            case "maintenance":
                activeTab = "5";
                break;
            default:
                break;
        }

        return (
            <div className="sidebar-container">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.props.isSidebarVisible}
                >
                    <div className="logo">
                        <img src={Logo} />
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={[`${activeTab}`]}
                    >
                        <Menu.Item key="1" icon={<UnorderedListOutlined />}>
                            <Link to="/admin">Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<TagsOutlined />}>
                            <Link to="/admin/order">Order</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<ImportOutlined />}>
                            <Link to="/admin/inventory">Inventory</Link>
                        </Menu.Item>
                        <Menu.Item
                            key="4"
                            icon={<DeliveredProcedureOutlined />}
                        >
                            <Link to="/admin/product">Product</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<ToolOutlined />}>
                            <Link to="/admin/maintenance">Maintenance</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </div>
        );
    }
}

export default Sidebar;
