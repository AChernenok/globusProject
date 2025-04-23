import { Box, Button, ButtonGroup, Paper, Typography } from "@mui/material"
import { Grid } from "@mui/system"
import {
    CheckCircleOutline,
    CheckCircle,
    Check,
    TaskAlt,
    WhatsApp,
    HelpOutline,
    Telegram,
    Send
} from '@mui/icons-material'

const MasterBlock = ({ master }) => {
    const IconMap = {
        CheckCircleOutline,
        CheckCircle,
        Check,
        TaskAlt
    }

    console.log(master?.buttonsGroup?.map((button) => button.buttonLink.includes('wa.me')))
    return (
        <Box sx={{
            py: 3
        }}>
            <Typography variant='h2'
                sx={{
                    pb: 2,
                }}
            >{master?.title}</Typography>

            <Paper sx={{
                p: 2
            }}>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        {master?.items?.map((item) => {
                            const Icon = IconMap[item.icon]
                            return (
                                <Grid container spacing={1} sx={{ my: 1 }} key={item.id}>
                                    <Grid size={{ xs: 3, md: 1 }} sx={{ textAlign: 'center' }}>
                                        {Icon ? <Icon sx={{ fontSize: '2rem', color: 'error.dark' }} /> : <HelpOutline />}
                                    </Grid>
                                    <Grid size={{ xs: 9, md: 11 }} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography variant='body1' fontWeight={600}>
                                            {item.description}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'nowrap',
                            justifyContent: 'space-around',
                            alignItems: 'flex-start'
                        }}
                    >
                        <Typography variant='h3'>{master?.titleBlock}</Typography>
                        <Typography variant='h4' sx={{ my: { xs: 2 } }}>{master?.descriptionBlock}</Typography>
                        <ButtonGroup
                            orientation='vertical'
                            fullWidth
                        >
                            {master?.buttonsGroup?.map((button) => (
                                <Button
                                    key={button?.buttonLink}
                                    variant='outlined'
                                    color={
                                        button?.buttonLink.includes('wa.me')
                                            ? 'success'
                                            : button?.buttonLink.includes('t.me')
                                                ? 'info'
                                                : 'primary'
                                    }
                                    href={button?.buttonLink}
                                    size='medium'
                                    startIcon={
                                        button?.buttonLink.includes('wa.me')
                                            ? <WhatsApp />
                                            : button?.buttonLink.includes('t.me')
                                                ? <Telegram />
                                                : <Send />}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >{button?.buttonText}</Button>
                            ))}
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default MasterBlock