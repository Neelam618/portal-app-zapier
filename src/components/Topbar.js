import React from 'react'
import { Menu, Dropdown, Button } from 'antd';
import { useUserContext } from '../context/UserContext';

function Topbar() {
    const {user, logoutUser} = useUserContext()
    const menu = (
        <Menu>
            <Menu.Item>
                <a href=''>
                    Settings
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href='' onClick={logoutUser} >
                    Log out
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 1em', borderBottom: '1px solid #e6e6e6'}}>
            <div>InnerKore</div>
            <div>
                <Dropdown overlay={menu} placement="bottomLeft" arrow>
                    <Button>{user.displayName}</Button>
                </Dropdown>
            </div>
        </div>
    )
}

export default Topbar
