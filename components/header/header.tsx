import React from 'react'
import cx from 'classnames'
import _ from 'lodash'
import { Logo, Nav, Flex } from '../index'
import { getElementType } from '../../lib'
import { HeaderProps } from './index.d'
import './style.scss'

const defaultProps = {
    code: '111222',
}

export class Header extends React.Component<HeaderProps> {
    static defaultProps: HeaderProps = defaultProps

    render() {
        const { code, ...rest } = this.props
        const containerClasses = cx('header')
        const ElementType = getElementType(Header, this.props)
        return (
            <ElementType {...rest} id="header" role="header" className={containerClasses}>
                <Flex className="container flex">
                    <Logo />
                    <Nav />
                </Flex>
                <div>{code}</div>
            </ElementType>
        )
    }
}
