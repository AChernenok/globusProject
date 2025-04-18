import { Box, Button, Paper, Typography } from "@mui/material"
import { Grid } from "@mui/system"
import {
    CheckCircleOutline,
    CheckCircle,
    Check,
    TaskAlt,
    WhatsApp,
    HelpOutline
} from '@mui/icons-material'

const MasterBlock = ({ master }) => {
    const IconMap = {
        CheckCircleOutline,
        CheckCircle,
        Check,
        TaskAlt
    }
    console.log(master)
    return (
        <Box sx={{
            py: 3
        }}>
            <Typography variant='h2'
                sx={{
                    pb: 2,
                    fontSize: '2.25rem'
                }}
            >{master?.title}</Typography>

            <Paper sx={{
                p: 2
            }}>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        {master?.items?.map((item) => {
                            const Icon = IconMap[item.icon]
                            return (
                                <Grid container spacing={0} sx={{ my: 1 }} key={item.id}>
                                    <Grid size={{ xs: 1 }} sx={{ textAlign: 'center' }}>
                                        {Icon ? <Icon sx={{ fontSize: '2rem', color: 'error.dark' }} /> : <HelpOutline />}
                                    </Grid>
                                    <Grid size={{ xs: 11 }} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography variant='body1' fontWeight={600}>
                                            {item.description}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'nowrap',
                            justifyContent: 'space-around',
                            alignItems: 'flex-start'
                        }}
                    >
                        <Typography variant='h5'>{master?.titleBlock}</Typography>
                        <Typography variant='h6'>{master?.descriptionBlock}</Typography>
                        <Button
                            variant='outlined'
                            color='success'
                            href={master?.linkButton}
                            size='medium'
                            startIcon={<WhatsApp />}
                            target='_blank'
                            rel='noopener noreferrer'
                        >{master?.textButton}</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default MasterBlock