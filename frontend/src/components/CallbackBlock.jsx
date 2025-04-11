import { Box, Button, ButtonGroup, Grid, Paper, Typography } from "@mui/material"
import { WhatsApp as WhatsAppIcon, Telegram as TelegramIcon } from '@mui/icons-material'

const CallbackBlock = () => {

    return (
        <Paper elevation={3}>
            <Box sx={{
                p: 2
            }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant='h4'>Напиши нам</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 9 }}>
                        <Typography variant='body1' sx={{ mb: 2 }}>В WhatsApp или Telegram чтобы обсудить цену с мастером</Typography>
                        <ButtonGroup variant='outlined' fullWidth size='medium'>
                            <Button color='success' startIcon={<WhatsAppIcon />}>WhatsApp</Button>
                            <Button startIcon={<TelegramIcon />}>Telegram</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>

            </Box>
        </Paper>
    )
}

export default CallbackBlock;