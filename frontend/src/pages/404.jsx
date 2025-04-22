import { Container, Alert, Typography } from '@mui/material'
import LinkWrapper from '../components/LinkWrapper'

const Page404 = () => {
    return (
        <Container sx={{
            py: 2,
        }}>
            <Alert variant='filled' severity='error' sx={{
                '& .MuiAlert-icon': {
                    alignItems: 'center'
                }
            }}>
                <Typography variant='h1' fontSize={'3rem'}>404 - Страница не найдена</Typography>
                <LinkWrapper href={process.env.NEXT_PUBLIC_URL}>
                    <Typography
                        variant='h5'
                        sx={{
                            textDecoration: 'underline'
                        }}
                    >
                        Вернуться на главную
                    </Typography>
                </LinkWrapper>
            </Alert>
        </Container>)
}

export default Page404;