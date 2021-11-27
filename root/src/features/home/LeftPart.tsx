import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, Button, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useMeasure } from 'react-use'
import { routerUrlOf } from 'src/lib/urls'

export default function LeftPart() {
    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const [containerRef, { width: containerWidth }] = useMeasure()

    const isNarrow = !isNaN(containerWidth) && containerWidth > 0 && containerWidth < 520

    return (
        <Box
            ref={containerRef}
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    ...(!isNarrow && {
                        pl: 6,
                        pr: 2,
                        mr: 1,
                        minHeight: '600px',
                        height: 'calc(100vh - 80px)',
                    }),
                    ...(isNarrow && {
                        pl: 3,
                        pr: 2,
                        mr: 1,
                    }),
                    position: 'relative',
                    maxWidth: '560px',
                    width: '100%',
                    display: 'flex',
                    border: '0px solid blue',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        fontFamily: 'Black Han Sans',
                        lineHeight: 1.5,
                        display: 'flex',
                        ...(isNarrow && {
                            mt: 8,
                            fontSize: '40px',
                            minHeight: '200px',
                        }),
                        ...(!isNarrow && {
                            fontSize: '56px',
                        }),

                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        color: '#0A1929',
                    }}
                >
                    <Box>@cp949</Box>
                    <Box sx={{ color: '#005CB8' }}>개인 노트</Box>
                </Box>
                <Box
                    sx={{
                        '& em': {
                            color: 'primary.dark',
                            fontStyle: 'normal',
                            ml: '4px',
                            mr: '2px',
                        },
                    }}
                >
                    <Box sx={{ color: '#555', fontSize: '1rem', fontWeight: 400, mt: mdDown ? 8 : 2 }}>
                        개인적인 메모를 정리하는 사이트입니다.
                    </Box>
                </Box>
                <Box
                    component="img"
                    sx={{
                        position: 'absolute',
                        right: '1rem',
                        ...(isNarrow && {
                            top: '120px',
                            width: '90px',
                        }),
                        ...(!isNarrow && {
                            // top: '190px',
                            top: 0,
                            bottom: 0,
                            objectFit: 'contain',
                            border: '0px solid red',
                            width: '100px',
                            height: 'calc(100% - 70px)',
                            minHeight: '200px',
                        }),
                    }}
                    src={routerUrlOf('/images/codiny/3d_movement1.png')}
                />

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                    <Button
                        sx={{ ml: 2 }}
                        variant="contained"
                        size="large"
                        endIcon={<GitHubIcon fontSize="small" />}
                        onClick={() => window?.open('https://github.com/cp949/cp949.github.io')}
                    >
                        GITHUB
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
