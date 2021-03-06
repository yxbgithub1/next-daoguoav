import React from 'react'
import Link from 'next/link'

interface Props {}

export const Header: React.FunctionComponent<Props> = () => (
    <header>
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>{' '}
            |{' '}
            <Link href="/about">
                <a>About</a>
            </Link>{' '}
            |{' '}
            <Link href="/news">
                <a>news</a>
            </Link>
        </nav>
    </header>
)
