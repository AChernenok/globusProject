import { useQuery } from '@apollo/client'
import {
    Alert,
    Box,
    Container,
    Grid,
    Link,
    Stack,
    Skeleton,
    Typography,
    AlertTitle,
    Divider,
} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';

import { GET_FOOTER } from '../pages/api/queries'
import WeekIcon from '../../public/icons/WeekIcon';

import LinkWrapper from './LinkWrapper';
import ActionButton from './ActionButton';

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
            <ActionButton data={data?.header} />
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
                <Grid
                    container
                    spacing={2}
                    sx={{
                        '& .MuiSvgIcon-root': {
                            fontSize: 40,
                            color: 'error.main',
                        },
                        '& .MuiTypography-caption': {
                            fontSize: '1rem',
                        },
                        alignItems: 'center'
                    }}
                >
                    {/* Логотип и заголовок */}
                    <Grid size={{ xs: 12, md: 2 }}>
                        <LinkWrapper href='/'>
                            <Stack direction="row" spacing={1} alignItems="center" alignContent='center'>
                                <Box
                                    component="img"
                                    src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + data?.header?.logo?.url}
                                    alt={data?.header?.title}
                                    sx={{ height: 48, maxWidth: '100%' }}
                                    loading="lazy"
                                />
                                <Typography variant="body1" fontWeight={700}>
                                    {data?.header?.title}
                                </Typography>
                            </Stack>
                        </LinkWrapper>
                    </Grid>

                    {/* График работы */}
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Stack direction="row" spacing={1} alignItems="flex-start">
                            <WeekIcon />
                            <Stack spacing={0.5}>
                                <Typography variant="caption" fontWeight={700}>
                                    {schedule.timeRange}
                                </Typography>
                                <Typography variant='subtitle2' color="text.secondary">
                                    {schedule.note}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>

                    {/* Email */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Link href={`mailto:${data?.header?.email}`} underline="none">
                            <Stack direction="row" spacing={1} alignItems="flex-start">
                                <AlternateEmailIcon />
                                <Stack spacing={0.5}>
                                    <Typography variant="caption" fontWeight={700}>
                                        {data?.header?.email}
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        {data?.header?.emailCaption}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Link>
                    </Grid>

                    {/* Телефон */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Link href={`tel:${data?.header?.phone}`} underline="none">
                            <Stack direction="row" spacing={1} alignItems="flex-start">
                                <PhoneIcon />
                                <Stack spacing={0.5}>
                                    <Typography variant="caption" fontWeight={700}>
                                        {data?.header?.phone}
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        {data?.header?.phoneCaption}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Link>
                    </Grid>

                    {/* Telegram */}
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Link
                            href={data?.header?.telegramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="none"
                        >
                            <Stack direction="row" spacing={1} alignItems="flex-start">
                                <TelegramIcon />
                                <Stack spacing={0.5}>
                                    <Typography variant="caption" fontWeight={700}>
                                        TELEGRAM
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        {data?.header?.telegramCaption}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Link>
                    </Grid>

                    {/* Копирайт */}
                    <Grid size={{ xs: 12 }} sx={{ mt: 2, textAlign: 'center' }}>
                        <Typography variant="caption" color="text.secondary">
                            © {new Date().getFullYear()} Все права защищены
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer