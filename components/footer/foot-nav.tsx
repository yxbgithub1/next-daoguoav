import React, { Fragment } from 'react'
import Link from 'next/link'
import { Row, Col } from 'antd'
import { NavMenuLink, FootNavMenuProps } from './index.d'
import './style.scss'

const FootNavMenu = (props: FootNavMenuProps) => {
    const { title, menu } = props
    return (
        <dl className="footer-nav">
            {menu && (
                <Fragment>
                    <dt className="font-16 pg-b10">{title}</dt>
                    {menu.map((link: NavMenuLink) => (
                        <dd key={link.path}>
                            <Link href={link.path}>
                                <a>{link.text}</a>
                            </Link>
                        </dd>
                    ))}
                </Fragment>
            )}
        </dl>
    )
}

const menu = [
    {
        text: '岛国AV',
        path: '1a',
    },
    {
        text: '岛国AV',
        path: '2a',
    },
    {
        text: '岛国AV',
        path: '3a',
    },
    {
        text: '岛国AV',
        path: '4a',
    },
]

export class FootNav extends React.PureComponent {
    render() {
        return (
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <FootNavMenu title="友情链接" menu={menu} />
                </Col>
                {/* <Col span={6}>
                    <FootNavMenu title="友情链接" menu={menu} />
                </Col>
                <Col span={6}>
                    <FootNavMenu title="友情链接" menu={menu} />
                </Col> */}
            </Row>
        )
    }
}
