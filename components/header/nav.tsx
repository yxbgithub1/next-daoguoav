import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { getElementType } from '../../lib'
import { NavProps } from './index.d'
import './style.scss'

export class Nav extends React.PureComponent<NavProps> {
    static defaultProps: NavProps = {
        as: 'nav',
        menus: [
            {
                text: '首页',
                path: '/',
            },
            {
                text: '电影',
                path: '/about',
            },
            {
                text: '图库',
                path: '/news',
            },
        ],
    }

    render() {
        const { as, menus, className, children, ...rest } = this.props
        const classes = cx('nav', className)
        const ElementType = getElementType(Nav, this.props)

        return (
            <ElementType as={as} {...rest} id="nav" className={classes}>
                {menus.map(m => (
                    <Link key={m.path} href={m.path}>
                        <a>{m.text}</a>
                    </Link>
                ))}
                <div className="ft-r">{children}</div>
            </ElementType>
        )
    }
}
