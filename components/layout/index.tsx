import React, { Fragment } from 'react'
import Head from 'next/head'
import { Header, Footer } from '../index'
import './style.scss'

type Props = {
    title?: string
}

export const Layout: React.FunctionComponent<Props> = ({ title = '默认文档标题', children }) => (
    <Fragment>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Fragment>
            <Header />
            <div className="main">{children}</div>
            <Footer>公共脚部</Footer>
        </Fragment>
    </Fragment>
)
