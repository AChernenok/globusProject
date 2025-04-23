import { Box, Grid, Paper, Typography } from "@mui/material"
import {
    Discount,
    CleaningServices,
    SentimentSatisfiedAlt,
    ShowChart,
    HelpOutline,
    VerifiedUser
} from '@mui/icons-material'

const Advantages = ({ advantages }) => {
    const iconMap = {
        Discount,
        CleaningServices,
        SentimentSatisfiedAlt,
        ShowChart,
        VerifiedUser,
        HelpOutline
    }

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
                <Typography variant='h2' fontSize={'2.25rem'}>{advantages?.title}</Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
                <Grid container spacing={2}>
                    {advantages?.card?.map((item) => {
                        const Icon = iconMap[item.icon]
                        return (
                            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                                <Paper elevation={2} sx={{
                                    p: 2,
                                    height: '100%'
                                }}>
                                    <Grid container spacing={2} sx={{ height: '100%' }}>
                                        <Grid size={{ xs: 3 }} sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            alignItems: 'flex-start',
                                        }}>
                                            {Icon ? <Icon sx={{ fontSize: '3rem', color: 'error.dark', mr: '1rem' }} /> : <HelpOutline />}
                                        </Grid>
                                        <Grid size={{ xs: 9 }} sx={{ alignItems: 'center' }}>
                                            <Typography variant='h5' color="error.dark" fontWeight={600}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant='body2' color='primaryMain'>
                                                {item.description}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>)
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Advantages