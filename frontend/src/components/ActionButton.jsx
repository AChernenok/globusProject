import { AlternateEmail, Chat, Close, Phone, Telegram } from "@mui/icons-material"
import { Fab, Box, Zoom } from "@mui/material"
import { useState } from "react"

const ActionButton = ({ data }) => {
    const [openCollapse, setOpenCollapse] = useState(false);

    const handleOpenCollapse = () => {
        setOpenCollapse(!openCollapse);
    }
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                zIndex: 2
            }}
        >
            <Zoom in={openCollapse}>
                <Fab
                    color='secondary'
                    size='small'
                    aria-label='Отправить email'
                    href={`mailto:${data?.email}`}
                >
                    <AlternateEmail />
                </Fab>
            </Zoom>
            <Zoom in={openCollapse}>
                <Fab
                    color='secondary'
                    size='small'
                    aria-label='Позвонить'
                    href={`tel:${data?.phone}`}
                >
                    <Phone />
                </Fab>
            </Zoom>
            <Zoom in={openCollapse}>
                <Fab
                    color='secondary'
                    size='small'
                    aria-label='Написать в Telegram'
                    href={data?.telegramLink}
                    target='_blank'
                >
                    <Telegram />
                </Fab>
            </Zoom>
            <Fab
                size='large'
                color='primary'
                aria-label='Связаться с нами'
                variant='circular'
                onClick={handleOpenCollapse}
            >
                {openCollapse ? <Close /> : <Chat />}
            </Fab>
        </Box>
    )
}

export default ActionButton;