import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { routerUrlOf } from 'src/lib/urls'
import PageLink from './components/PageLink'

export default function SiteListPart() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    // const pageLinkClassName = useMemo(() => randomCssClassName('pagelink-'), [])
    const pageLinkClassName = 'pagelink'

    return (
        <Box
            sx={{
                position: 'relative',
                py: 8,
                minHeight: 'calc(100vh - 120px)',
            }}
        >
            <Typography
                variant="h4"
                sx={{ mt: 8, textAlign: 'center', fontSize: '1.6rem', color: 'primary.main', fontWeight: 600 }}
            >
                관련 정보 및 자료
            </Typography>

            <Box
                mt={2}
                sx={{
                    '& > div + div': {
                        mt: 2,
                    },
                }}
            >
                <Typography variant="h6" sx={{ color: '#222', textAlign: 'center', fontWeight: 400, mt: 8, mb: 2 }}>
                    나의 GITHUB
                </Typography>

                <PageLink
                    className={pageLinkClassName}
                    title="웹사이트 소스 코드"
                    subtitle="웹사이트의 소스코드가 GITHUB에 공개되어 있습니다."
                    imageSrc={routerUrlOf('/images/home/github-120.png')}
                    href={'https://github.com/cp949/cp949.github.io.git'}
                />
                {/*
                <PageLink
                    className={pageLinkClassName}
                    title="하드웨어 인터페이스 라이브러리 NPM 저장소"
                    subtitle="하드웨어 인터페이스 라이브러리가 NPM에 등록되어 있습니다."
                    imageSrc={routerUrlOf('/images/home/nodejs2.png')}
                    href="https://www.npmjs.com/package/@ktaicoder/hw-proto"
                /> */}
            </Box>
        </Box>
    )
}
