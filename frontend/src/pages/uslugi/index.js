import { useQuery } from "@apollo/client"
import { Alert, Box, Button, Container, Grid, IconButton, Skeleton, Table, TableBody, TableCell, TableContainer, TableRow, Tooltip, Typography } from "@mui/material"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { GET_SERVICE_PAGE } from "../api/queries"

import LinkWrapper from "@/components/LinkWrapper";
import Seo from "@/components/Seo";
import Breadcrumb from "@/components/Breadcrumb";
import PriceNotice from "@/components/PriceNotice";


const Services = () => {
    const { loading, data, error } = useQuery(GET_SERVICE_PAGE);

    if (loading) return (
        <Container sx={{
            mt: 2
        }}>
            <Skeleton variant='text' height={'3rem'} width={'40%'} />
            <Grid container spacing={2}>
                <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                    <Skeleton variant='rounded' height={'15rem'} width={'100%'} />
                </Grid>
                <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                    <Skeleton variant='rounded' height={'15rem'} width={'100%'} />
                </Grid>
                <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                    <Skeleton variant='rounded' height={'15rem'} width={'100%'} />
                </Grid>
                <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                    <Skeleton variant='rounded' height={'15rem'} width={'100%'} />
                </Grid>
            </Grid>
        </Container>
    )

    if (error) return (
        <Container sx={{ mt: 2 }}>
            <Alert variant='standard' severity='error'>{error?.message}</Alert>
        </Container>
    )
    return (
        <Container sx={{ mt: 2 }}>
            <Seo seo={data?.servicePage?.seo} />
            <Typography variant='h1' fontSize={'2rem'}>{data?.servicePage?.title}</Typography>
            <Breadcrumb currentPage={data?.servicePage?.title} />
            <Typography variant='subtitle1' color='error' sx={{ py: 2 }}>{data?.servicePage?.description}</Typography>
            <Grid container spacing={2}>
                {data?.servicePage?.service_categories?.map((category) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={category?.slug} sx={{ py: 2 }}>
                        <Grid container spacing={1}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <LinkWrapper href={'/uslugi/' + category?.slug}>
                                    <Box
                                        component='img'
                                        loading='lazy'
                                        src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + category?.image?.url}
                                        width={'100%'}
                                        height={'auto'} />
                                </LinkWrapper>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Typography
                                    variant='h3'
                                    fontSize={'1.5rem'}
                                    sx={{
                                        '& :hover': {
                                            color: 'primary.main'
                                        },
                                        mb: 1
                                    }}
                                >
                                    <LinkWrapper href={'/uslugi/' + category?.slug}>
                                        {category?.title}
                                    </LinkWrapper>
                                </Typography>
                                <Typography variant='body1'>{
                                    category?.description.length > 320
                                        ? category?.description.substring(0, 320) + '...'
                                        : category?.description
                                }</Typography>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TableContainer>
                                    <Table sx={{ width: '100%' }}>
                                        <TableBody>
                                            {category?.services?.slice(0, 3).map((service) => (
                                                <TableRow key={service?.slug}>
                                                    <TableCell component='th' scope='row'>
                                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                            <Tooltip
                                                                title={service?.description || 'Описание недоступно'}
                                                                placement="top"
                                                                enterTouchDelay={0}
                                                                leaveTouchDelay={3000}
                                                                slotProps={{
                                                                    tooltip: {
                                                                        sx: {
                                                                            bgcolor: '#fff',
                                                                            color: 'text.primary',
                                                                            boxShadow: 2,
                                                                            borderRadius: 1,
                                                                            px: 1.5,
                                                                            py: 1,
                                                                            fontSize: 13,
                                                                            maxWidth: 220,
                                                                        }
                                                                    }
                                                                }}
                                                            >
                                                                <IconButton aria-label={service?.description || 'Описание'}>
                                                                    <HelpOutlineIcon sx={{ color: 'primary.main' }} />
                                                                </IconButton>
                                                            </Tooltip>
                                                            <Typography variant='body1'>
                                                                {service?.title}
                                                            </Typography>
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell
                                                        component='th'
                                                        scope='row'
                                                        sx={{
                                                            fontWeight: 700,
                                                            textAlign: 'end'
                                                        }}>
                                                        {service?.discount
                                                            ? (
                                                                <Box>
                                                                    <Typography
                                                                        variant='caption'
                                                                        sx={{ textDecoration: 'line-through', opacity: 0.7, mr: 1 }}>
                                                                        от {service?.price}₽
                                                                    </Typography>
                                                                    <Typography variant='body2' sx={{ color: 'error.main', fontWeight: 700 }}>
                                                                        от {Math.round(service?.price - (service?.price * (service.discountAmount / 100)))}₽
                                                                    </Typography>
                                                                </Box>
                                                            ) : (
                                                                <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                                                                    от {service?.price}₽
                                                                </Box>
                                                            )}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                    <Button
                                        variant='outlined'
                                        href={'/uslugi/' + category?.slug}
                                        fullWidth
                                        sx={{
                                            mt: 1
                                        }}
                                    >
                                        Подробнее
                                    </Button>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
            <PriceNotice />
        </Container>
    )
}

export default Services