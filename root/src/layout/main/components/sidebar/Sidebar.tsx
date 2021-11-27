import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Box, Divider, IconButton, List, ListItem, ListItemText, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import { routerUrlOf } from 'src/lib/urls'
import useStore from 'src/store/useStore'
import { SIDEMENU_BG_COLOR, SIDEMENU_FG_COLOR } from '../../main-layout-constants'
import { IMenu, isCurrentMenu, isCurrentSection, ISection, menus } from '../../sidebar-menu-define'
import DrawerHeader from '../drawer-header/DrawerHeader'
import MenuItem from './MenuItem'
import SectionMenu from './SectionMenu'

const ALL_MENUS = menus

function Sidebar() {
    const theme = useTheme()
    const { asPath: pathkey } = useRouter()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const { sidebarStore } = useStore()
    const _onClickLink = () => {
        if (smDown) {
            sidebarStore.setOpen(false)
        }
    }
    const isOpen = sidebarStore.isOpen

    return (
        <Box
            component="nav"
            sx={{
                position: 'relative',
                color: SIDEMENU_FG_COLOR,
                backgroundColor: SIDEMENU_BG_COLOR,
                '& > .MuiDivider-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    marginTop: 8,
                    marginBottom: 8,
                },
                height: '100%',
                '::before': {
                    position: 'absolute',
                    content: "''",
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    background: `url(${routerUrlOf('/images/sidebar/bg_sidebar.jpg')})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // filter: 'blur(0.5px)',
                },
            }}
        >
            <DrawerHeader sx={{ justifyContent: 'flex-start', color: '#FFF' }}>
                <Box
                    component="a"
                    sx={{
                        display: 'block',
                        flexGrow: 1,
                        pl: 1,
                        pr: 1,
                        pt: '6px',
                        zIndex: 1,
                        borderRadius: 1,
                        fontSize: '1.1rem',
                        textDecoration: 'none',
                        ':hover .title1': {
                            color: '#005CB8',
                            fontWeight: 500,
                        },
                        ':hover .title2': {
                            color: '#005CB8',
                        },
                    }}
                    href={routerUrlOf('/')}
                >
                    <Box
                        className="title2"
                        sx={{
                            flexGrow: 1,
                            mt: '4px',
                            color: '#fff',
                            fontSize: '1.1rem',
                            fontFamily: 'Black Han Sans',
                            textDecoration: 'none',
                        }}
                    >
                        @cp949
                    </Box>
                </Box>
                <IconButton
                    size="small"
                    onClick={sidebarStore.toggleOpen}
                    sx={{
                        color: '#fff',
                    }}
                >
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <List disablePadding>
                {ALL_MENUS.map((item, idx) => {
                    if (item.type === 'menu') {
                        return (
                            <MenuItem
                                key={idx}
                                menu={item as IMenu}
                                onLinkClick={_onClickLink}
                                active={isCurrentMenu(item.href, pathkey)}
                            />
                        )
                    } else if (item.type === 'divider') {
                        return <Divider key={idx} light />
                    } else if (item.type === 'label') {
                        return (
                            <ListItem
                                key={idx}
                                sx={{
                                    pl: 2,
                                    '& .MuiListItemText-root .MuiTypography-root': {
                                        color: SIDEMENU_FG_COLOR,
                                        opacity: 0.8,
                                    },
                                }}
                                dense
                            >
                                <ListItemText>{item.title}</ListItemText>
                            </ListItem>
                        )
                    } else if (item.type === 'section') {
                        const section = item as ISection
                        return (
                            <SectionMenu
                                key={idx}
                                active={isCurrentSection(section.sectionId, pathkey)}
                                section={section}
                                currentHref={pathkey}
                                expanded={sidebarStore.expandedSectionIds.includes(section.sectionId)}
                                onClickLink={_onClickLink}
                                onClickSection={() => sidebarStore.toggleExpandSection(section.sectionId)}
                            />
                        )
                    } else {
                        return <div>{JSON.stringify(item)}</div>
                    }
                })}
            </List>
        </Box>
    )
}

export default observer(Sidebar)
