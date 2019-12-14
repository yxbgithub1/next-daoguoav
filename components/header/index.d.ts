import React from 'react'

export interface HeaderProps extends StrictHeaderProps {
    [key: string]: any
}
export interface StrictHeaderProps {
    code?: string
}

declare class Header extends React.Component<HeaderProps, {}> {}

export default Header
