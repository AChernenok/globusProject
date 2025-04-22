import { Paper, Typography, ButtonGroup, Button, Box } from '@mui/material'
import { WhatsApp, Telegram } from '@mui/icons-material'

const CallbackBlockSmall = () => {
    return (
        <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant='h5'>Вызвать мастера</Typography>
            <Box sx={{ my: 2 }}>
                <Typography variant='body1'>Оставьте сообщение в WhatsApp или Telegram.</Typography>
                <Typography variant='body1'>Мы не передаем данные третьим лицам и не рассылаем рекламу.</Typography>
            </Box>
            <ButtonGroup variant='outlined' fullWidth size='medium'>
                <Button
                    color='success' startIcon={<WhatsApp />}
                    href='https://wa.me/79150362546'
                    target='_blank'
                    rel='noopener noreferrer'
                >WhatsApp</Button>
                <Button
                    startIcon={<Telegram />}
                    href='https://t.me/Office_globus_okna'
                    target='_blank'
                    rel='noopener noreferrer'
                >Telegram</Button>
            </ButtonGroup>
        </Paper>
    )
}

export default CallbackBlockSmall