import React from 'react';
import { useHistory } from 'react-router';

import { Menu } from 'antd';

import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    SecurityScanOutlined
} from '@ant-design/icons';

const { Item } = Menu;

const SideNav = ({ collapsed }) => {
    const history = useHistory();
    const handleUserClick = () => {
        history.push('/users');
    }

    return (
        <div>
            <div style={{ height: "32px", color: '#fff', fontSize: '1.5rem', background: "rgba(255, 255, 255, 0.2)", margin: "16px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SecurityScanOutlined />
                {!collapsed && <span style={{ padding: '0 .5rem' }}>AUTH</span>}
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Item key="1" onClick={handleUserClick}>
                    <UserOutlined />
                    <span> Users</span>
                </Item>
            </Menu>
        </div>
    );
}
export default SideNav;
