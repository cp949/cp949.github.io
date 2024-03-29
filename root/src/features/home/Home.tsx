import { Box, Container, Grid, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import LeftPart from './LeftPart'
import SiteListPart from './SiteListPart'

export default function Home() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box sx={{ p: smDown ? 0 : 0 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={7} style={{ border: '0px solid red' }}>
                    <LeftPart />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={5} style={{ border: '0px solid green' }}>
                    <Box sx={{ background: '#f5f5f5' }}>
                        <Container maxWidth="sm">
                            <SiteListPart />
                        </Container>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
