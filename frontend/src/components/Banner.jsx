import { Alert, Box, Container, Grid, Paper, Skeleton, Typography, AlertTitle } from "@mui/material";
import { TypeAnimation } from 'react-type-animation'
import {
    HelpOutline,
    VerifiedUser,
    Alarm,
    ShowChart
} from '@mui/icons-material'

const Banner = ({ src, loading, error }) => {

    if (loading) return (
        <Box sx={{ py: 6 }}>
            <Container>

                <Skeleton height='2rem' width={'30%'} />
                <Skeleton height='2rem' width={'20%'} />
                <Box sx={{
                    '& .MuiSkeleton-root': {
                        m: 0
                    },
                    mt: 2
                }}>
                    <Skeleton height='1rem' width={'25%'} />
                    <Skeleton height='1rem' width={'40%'} />
                    <Skeleton height='1rem' width={'35%'} />
                    <Skeleton height='1rem' width={'41%'} />
                    <Skeleton height='1rem' width={'30%'} />
                    <Skeleton height='1rem' width={'29%'} />
                    <Skeleton height='1rem' width={'25%'} />
                </Box>
            </Container>
        </Box>
    )

    if (error) return (<Box
        component='footer'
        sx={{
            py: 3,
            px: 2,
            backgroundColor: 'grey.50'
        }}>
        <Container maxWidth='lg'>
            <Alert severity='error' sx={{
                mt: 2
            }}>
                <AlertTitle>Ошибка</AlertTitle>
                {error.message}
            </Alert>
        </Container>
    </Box>)

    const iconMap = {
        HelpOutline,
        VerifiedUser,
        Alarm,
        ShowChart,
    };

    return (
        <>
            <Box sx={{
                backgroundImage:
                {
                    xs: 'none',
                    md: `url(${process.env.NEXT_PUBLIC_STRAPI_BASE_URL + src?.backgroundImage?.url}) `,
                },
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'right',
                bgcolor: 'background.light'
            }}>
                <Container sx={{
                    pt: 8,
                    pb: 10
                }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '6rem' },
                                    fontWeight: 'bold'
                                }}
                            >
                                {src?.title}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{
                        my: 5
                    }}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography
                                variant='subtitle1'
                                color='textSecondary'
                            >
                                {src?.description}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography variant='subtitle1' sx={{
                                fontSize: { xs: '1rem', md: '2rem' }
                            }}>
                                <TypeAnimation
                                    sequence={src?.animatedText}
                                    speed={70}
                                    repeat={Infinity} />
                            </Typography>
                            <Box sx={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                                {src?.animatedText?.filter(item => typeof item === 'string').join(' ')}
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        {src?.bulletPoints?.map((item) => {
                            const Icon = iconMap[item.icon]
                            return (
                                <Grid size={{ xs: 12, md: 3 }} key={item.id}>
                                    <Paper elevation={2} sx={{
                                        display: 'flex',
                                        minHeight: '4rem',
                                        alignItems: 'center',
                                        px: '0.5rem'
                                    }}>
                                        {Icon ? <Icon sx={{ fontSize: '2rem', color: 'red', mr: '1rem' }} /> : <HelpOutline />}
                                        <Typography sx={{ fontWeight: '700' }}>
                                            {item.text}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box >
        </>
    )
}

export default Banner;

