import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import {
    Collapse,
    Divider,
    List,
    ListItemButton as MuiListItemButton,
    ListItemButtonProps as MuiListItemButtonProps,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import {
    DIVIDER_COLOR,
    ICON_COLOR,
    ICON_COLOR_ACTIVE,
    SIDEMENU_BG_COLOR_HOVER,
    SIDEMENU_FG_COLOR,
} from '../../main-layout-constants'
import { isCurrentMenu, ISection } from '../../sidebar-menu-define'
import MenuIcon from './MenuIcon'
import MenuItem from './MenuItem'

type Props = {
    section: ISection
    expanded: boolean
    currentHref?: string
    active: boolean
    indent?: boolean
    onClickSection?: () => void
    onClickLink?: () => void
}
const ListItemButton = styled(MuiListItemButton, {
    shouldForwardProp: (p) => p !== 'active',
})<MuiListItemButtonProps & { active: boolean }>(({ theme, active }) => {
    return {
        '&:hover': {
            backgroundColor: SIDEMENU_BG_COLOR_HOVER,
        },
        '& .MuiListItemText-root': {
            color: SIDEMENU_FG_COLOR,
            marginLeft: theme.spacing(1),
        },
        '& .MuiListItemIcon-root': {
            color: ICON_COLOR,
        },
        ...(active && {
            borderTop: `1px solid ${DIVIDER_COLOR}`,
            backgroundColor: 'rgba(0, 0, 0, 0)',
        }),

        '& .MuiIcon-root.sectionIndicator': {
            color: active ? ICON_COLOR_ACTIVE : 'rgba(255,255,255,0.5)',
            marginRight: theme.spacing(1),
        },

        '& + &': {
            marginBottom: theme.spacing(1),
            marginTop: theme.spacing(1),
        },
    }
})

export default function SectionMenu(props: Props) {
    const {
        section,
        active,
        onClickSection: onSectionClick,
        expanded = false,
        currentHref,
        onClickLink: onLinkClick,
    } = props

    return (
        <React.Fragment>
            <ListItemButton onClick={onSectionClick} active={active} sx={{ pl: 1 }}>
                {section.icon && (
                    <ListItemIcon sx={{ display: 'none' }}>
                        <MenuIcon iconName={section.icon} />
                    </ListItemIcon>
                )}
                <ListItemText
                    primary={section.title}
                    sx={{
                        '& .MuiListItemText-primary': {
                            fontWeight: active ? 700 : 500,
                            fontSize: '0.9rem',
                        },
                    }}
                />
                {expanded ? (
                    <KeyboardArrowUpIcon sx={{ color: active ? 'primary.main' : '#bbb' }} />
                ) : (
                    <KeyboardArrowDownIcon sx={{ color: active ? 'primary.main' : '#bbb' }} />
                )}
            </ListItemButton>
            <Collapse
                in={expanded}
                timeout="auto"
                unmountOnExit
                sx={{
                    boxSizing: 'border-box',
                    borderBottom: `1px solid ${DIVIDER_COLOR}`,
                }}
            >
                <List
                    disablePadding
                    sx={{
                        '& > .MuiListItem-root': {
                            pl: 4,
                        },
                    }}
                >
                    {section.submenus?.map((menu, idx) => {
                        if (menu.type === 'divider') {
                            return <Divider key={idx} />
                        }
                        return (
                            <MenuItem
                                key={menu.href + idx}
                                menu={menu}
                                onLinkClick={onLinkClick}
                                active={isCurrentMenu(menu.href, currentHref)}
                            />
                        )
                    })}
                </List>
            </Collapse>
        </React.Fragment>
    )
}
