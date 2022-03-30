import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col} from 'antd';

 
const AppLayout = ({children}) => {
    return (
        <div>
            <Menu mode='horizontal'>
                <Menu.Item>
                <Link href="/"><a>Node Bird</a></Link>
                </Menu.Item>
                <Menu.Item>
                <Link href="/profile"><a>Profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                <Input.Search enterButton style={{ verticalAlign : 'middle'}}/>
                </Menu.Item>
                <Menu.Item>
                <Link href="/signUp"><a>Sign Up</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6} >
                왼쪽 메뉴
                </Col>
                <Col xs={24} md={12} >
                {children}
                </Col>
                <Col xs={24} md={6} >
                오른쪽 메뉴
                </Col>
            </Row>
        </div>
    )
}

AppLayout.propType = {
    children: propTypes.node.isRequired

}

export default AppLayout;