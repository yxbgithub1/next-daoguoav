import React from 'react'
import { GenericProps } from '../generic'

export interface HeaderProps extends GenericProps {
    code?: string
}

type NavMenuItem = {
    text: string
    path: string
}
export interface NavProps extends GenericProps {
    menus?: Array<NavMenuItem>
}

declare class Header extends React.Component<HeaderProps, {}> {}

export default Header
