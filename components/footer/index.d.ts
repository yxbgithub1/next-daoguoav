import { GenericProps } from '../generic'
export interface FooterProps extends GenericProps {}

interface NavMenuLink {
    text: string
    path: string
}
export interface FootNavMenuProps extends GenericProps {
    menu: Array<NavMenuLink>
    title?: string
}
