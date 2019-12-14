import React from 'react'
import cx from 'classnames'
import _ from 'lodash'
import { Logo, Nav, Container } from '../index'
import { getElementType } from '../../lib'
import { HeaderProps } from './index.d'
import './style.scss'

export class Header extends React.Component<HeaderProps> {
    static defaultProps: HeaderProps = {}

    render() {
        const { code, ...rest } = this.props
        const containerClasses = cx('header')
        const ElementType = getElementType(Header, this.props)
        return (
            <ElementType {...rest} id="header" role="header" className={containerClasses}>
                <Container className="flex">
                    <Logo />
                    <Nav />
                </Container>
                {/* <Flex className="container flex"></Flex> */}
            </ElementType>
        )
    }
}
