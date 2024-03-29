export interface IDivider {
    type: 'divider'
}

export interface ILabel {
    type: 'label'
    icon?: string
    title: string
    sectionId?: string
}

export interface IMenu {
    type: 'menu'
    title: string
    href: string
    icon?: string
    sectionId?: string
}

export interface ISection {
    type: 'section'
    icon?: string
    title: string
    sectionId: string
    submenus: (IDivider | IMenu)[]
}

export type ISideMenuItem = ILabel | IDivider | IMenu | ISection

let seq = 0
const nextSectionId = () => 'section' + ++seq

const menusTemp: (ILabel | IDivider | IMenu | ISection)[] = [
    { type: 'divider' },

    {
        type: 'menu',
        icon: 'dashboard',
        title: 'Home',
        href: '/',
    },
    {
        type: 'menu',
        icon: 'dashboard',
        title: '스타일 샘플',
        href: '/post-frame/style-sample',
    },

    // { type: 'divider' },

    // {
    //     type: 'section',
    //     sectionId: nextSectionId(),
    //     icon: 'adb',
    //     title: '기타',
    //     submenus: [
    //         {
    //             type: 'menu',
    //             icon: 'usb',
    //             title: '스타일',
    //             href: '/post-frame/style-sample',
    //         },
    //     ],
    // },

    // {
    //     type: 'menu',
    //     icon: 'logout',
    //     title: '로그아웃',
    //     href: '/logout',
    // },
]

// 라우터 URL로 수정하고, 섹션의 메뉴에는 sectionId를 설정한다
function fixHref(item: ISideMenuItem): ISideMenuItem {
    if (item.type === 'section') {
        item.submenus.forEach((sub) => {
            if (sub.type === 'menu') {
                sub.sectionId = item.sectionId
            }
        })
    }
    return item
}

// 전체 링크를 라우터 URL로 수정
menusTemp.forEach((it) => fixHref(it))

// assign section ids
// 섹션 제목을 섹션의 ID로 설정한다.
// const menus: ISideMenuItem[] = menusTemp.map((menu) => {
//     if (menu.type === 'section') {
//         return { ...menu, sectionId: menu.title }
//     }
//     return menu
// })

const menus: ISideMenuItem[] = menusTemp

export const isCurrentMenu = (menuHref: string, currentPath: string | undefined | null): boolean => {
    // routerPath:/           일때, menuHref:/jobs             path:/faq
    // routerPath:/aimk-admin 일때, menuHref:/aimk-admin/jobs  path:/faq
    if (!currentPath) return false

    if (currentPath === '/') return menuHref === '/'
    if (menuHref === '/') return menuHref === currentPath
    return currentPath.startsWith(menuHref)
}

export const isCurrentSection = (sectionId: string, pathkey: string | null | undefined): boolean => {
    if (!pathkey) return false
    return menusTemp
        .filter((it) => it.type === 'section' && it.sectionId === sectionId)
        .some((it) => {
            const section = it as ISection
            const isYes = section.submenus.some((sub) => sub.type === 'menu' && isCurrentMenu(sub.href, pathkey))
            // if (isYes) console.log(`current sectionId = ${sectionId} , pathkey = ${pathkey}`)
            return isYes
        })
}

export { menus }
