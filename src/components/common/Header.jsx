
import React from 'react';
import { Menu } from 'antd';




const AppHeader = () => {
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i className="fas fa-bolt"></i>
                    <a href="https://google.com">zsoft</a>
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['home']}>

                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="about">About</Menu.Item>
                    <Menu.Item key="features">Features </Menu.Item>
                    <Menu.Item key="howitworks">How it works </Menu.Item>
                    <Menu.Item key="faq">FAQ </Menu.Item>
                    <Menu.Item key="contacts">Contacts</Menu.Item>
                </Menu>

            </div>
        </div>
    )
}

export default AppHeader;
