import React from 'react'
import cx from 'classnames'
import _ from 'lodash'
import { Logo, Nav, Search, Container } from '../index'
import { getElementType } from '../../lib'
import { HeaderProps } from './index.d'
import { Button } from 'antd'
import './style.scss'

export class Header extends React.Component<HeaderProps> {
    render() {
        const { code, ...rest } = this.props
        const containerClasses = cx('header')
        const ElementType = getElementType(Header, this.props)
        return (
            <ElementType {...rest} id="header" role="header" className={containerClasses}>
                <Container flex>
                    <Logo href="#">LOGO</Logo>
                    <Nav>
                        <Search />
                        <a title="登录以后看更多大片">
                            <Button type="danger">Login</Button>
                        </a>
                    </Nav>
                </Container>
            </ElementType>
        )
    }
}
