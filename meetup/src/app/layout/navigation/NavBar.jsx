import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

export const NavBar = () => {
    return (
        <div>
            <Menu>
                <Menu.Item name='home' />
                <Menu.Item name='Friend' />
                <Menu.Item name='About' />
                <Menu.Item position='right'>
                    <Button inverted color='blue'>
                        SIGN IN
                    </Button>
                    <Button inverted color='pink' style={{ marginLeft: 10 }}>
                        SIGN UP
                    </Button>
                </Menu.Item>
            </Menu>

        </div >
    )
}


export default NavBar