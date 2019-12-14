import React from 'react'
import Link from 'next/link'
import './style.scss'

interface Props {}

export const Nav: React.FunctionComponent<Props> = () => (
    <nav id="nav" role="nav">
        <Link href="/">
            <a>首页</a>
        </Link>
        <Link href="/about">
            <a>关于</a>
        </Link>
        <Link href="/news">
            <a>新闻</a>
        </Link>
    </nav>
)
