import React from 'react'
import Link from 'next/link'

interface Props {}

export const Header: React.FunctionComponent<Props> = () => (
    <header>
        <nav>
            <Link href="/">
                <a>首页</a>
            </Link>{' '}
            |{' '}
            <Link href="/about">
                <a>关于</a>
            </Link>{' '}
            |{' '}
            <Link href="/news">
                <a>新闻</a>
            </Link>
        </nav>
    </header>
)
