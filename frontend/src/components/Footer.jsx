import { useQuery } from '@apollo/client'
import {
    Alert,
    Box,
    Container,
    Grid,
    Link,
    Skeleton,
    Typography,
    AlertTitle,
    Divider
} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';

import { GET_FOOTER } from '../pages/api/queries'
import WeekIcon from '../../public/icons/WeekIcon';

import LinkWrapper from './LinkWrapper';

const Footer = () => {
    const { loading, data, error } = useQuery(GET_FOOTER)

    if (loading) return (
        <Box
            component='footer'
            sx={{
                py: 3,
                px: 2,
                backgroundColor: 'grey.50'
            }}>
            <Container maxWidth='lg'>
                <Skeleton variant='text' width={'20%'} height={'2rem'} />
                <Skeleton variant='rounded' height={'4rem'} sx={{ my: 1 }} />
                <Skeleton variant='rounded' height={'4rem'} />
            </Container>
        </Box>
    )

    if (error) return (
        <Box
            component='footer'
            sx={{
                py: 3,
                px: 2,
                backgroundColor: 'grey.50'
            }}>
            <Container maxWidth='lg'>
                <Alert severity='error' variant='filled' sx={{
                    mt: 2
                }}>
                    <AlertTitle>Ошибка</AlertTitle>
                    {error.message}
                </Alert>
            </Container>
        </Box>
    )

    function parseTimeString(str) {
        // Ищем последнее вхождение цифры перед примечанием
        const timeEnd = str.match(/.*?\d(?=\D*$)/)?.[0]?.length || 0;

        return {
            timeRange: str.substring(0, timeEnd + 1).trim(),
            note: str.substring(timeEnd + 1).trim()
        };
    }

    const schedule = parseTimeString(data?.header?.schedule);
    return (
        <Box
            component='footer'
            sx={{
                py: 3,
                px: 2,
                mt: 2,
                backgroundColor: 'grey.50',
            }}>
            <Container maxWidth='lg'>
                <Grid container spacing={2}>
                    <Typography variant='body1' fontWeight={700}>Услуги</Typography>
                </Grid>
                <Grid container spacing={2}>
                    {data?.serviceCategories?.map((category) => (

                        <Grid key={category?.documentId}
                            size={{ xs: 12, md: 4 }}
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                            <RemoveIcon />
                            <LinkWrapper href={'/uslugi/' + category?.slug}>
                                <Typography
                                    sx={{
                                        color: '#000',
                                        textDecoration: 'none',
                                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                                        '&:hover': {
                                            color: 'primary.main',
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >{category?.title}</Typography>
                            </LinkWrapper>
                        </Grid>
                    ))}
                </Grid>
                <Divider sx={{ my: 2 }} />

                <Grid container spacing={1} sx={{
                    '& .MuiSvgIcon-root': {
                        width: '40px',
                        height: '40px',
                        color: 'error.main'
                    },
                    '& .MuiTypography-root': {
                        display: 'block',
                    },
                    '& .MuiTypography-body1': {
                        fontSize: { xs: '1.5rem', md: '1.15rem' },
                        fontWeight: '700'
                    },
                    '& .MuiGrid-container': {
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }}>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <LinkWrapper href='/'>
                            <Grid container spacing={0} sx={{ '&:hover': { cursor: 'pointer' } }}>
                                <Grid size={{ xs: 5 }} sx={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <Box
                                        component='img'
                                        src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data?.header?.logo?.url}
                                        alt={data?.header?.logo?.caption}
                                        sx={{
                                            height: 48,
                                            maxWidth: '100%'
                                        }}
                                        loading='lazy'
                                    />
                                </Grid>
                                <Grid size={{ xs: 5 }}>
                                    <Typography variant='body1'>
                                        {data?.header?.title}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </LinkWrapper>
                    </Grid>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Grid container spacing={1}>
                            <Grid size={{ xs: 3 }}>
                                <WeekIcon />
                            </Grid>
                            <Grid>
                                <Typography variant='caption' sx={{
                                    fontSize: '1rem',
                                    fontWeight: '700'
                                }}>
                                    {schedule.timeRange}
                                </Typography>
                                <Typography variant='caption' sx={{
                                    textAlign: { xs: 'left', md: 'right' },
                                    color: 'text.secondary'
                                }}>
                                    {schedule.note}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Link href={'mailto:' + data?.header?.email}>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 2 }}>
                                    <AlternateEmailIcon />
                                </Grid>
                                <Grid>
                                    <Typography variant='caption' sx={{
                                        fontSize: '1rem',
                                        fontWeight: '700'
                                    }}>{data?.header?.email}</Typography>
                                    <Typography variant='caption' sx={{
                                        textAlign: { xs: 'left', md: 'right' },
                                        color: 'text.secondary'
                                    }}>{data?.header?.emailCaption}</Typography>
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Link href={'tel:' + data?.header?.phone}>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 2 }}>
                                    <PhoneIcon />
                                </Grid>
                                <Grid>
                                    <Typography variant='caption' sx={{
                                        fontSize: '1rem',
                                        fontWeight: '700'
                                    }}>{data?.header?.phone}</Typography>
                                    <Typography variant='caption' sx={{
                                        textAlign: { xs: 'left', md: 'right' },
                                        color: 'text.secondary'
                                    }}>{data?.header?.phoneCaption}</Typography>
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Link
                            href={data?.header?.telegramLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 3 }}>
                                    <TelegramIcon />
                                </Grid>
                                <Grid>
                                    <Typography variant='caption' sx={{
                                        fontSize: '1rem',
                                        fontWeight: '700'
                                    }}>TELEGRAM</Typography>
                                    <Typography variant='caption' sx={{
                                        textAlign: { xs: 'left', md: 'right' },
                                        color: 'text.secondary'
                                    }}>{data?.header?.telegramCaption}</Typography>
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container sx={{
                    mt: 2,
                    justifyContent: 'center'
                }}>
                    <Grid>
                        <Typography>Copyright © {new Date().getFullYear()}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer