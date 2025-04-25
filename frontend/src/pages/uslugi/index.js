import { useQuery } from "@apollo/client"
import { Alert, Box, Breadcrumbs, Button, Container, Grid, Skeleton, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
import { GET_SERVICE_PAGE } from "../api/queries"
import { NavigateNext } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles'
import LinkWrapper from "@/components/LinkWrapper";

const Services = () => {
    const theme = useTheme()
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
    console.log('Colors:', theme.palette)
    return (
        <Container sx={{ mt: 2 }}>
            <Typography variant='h1' fontSize={'2rem'}>{data?.servicePage?.title}</Typography>
            <Typography variant='subtitle1' color='error'>{data?.servicePage?.description}</Typography>
            <Stack spacing={2} sx={{ py: 2 }}>
                <Breadcrumbs separator={<NavigateNext />} aria-label="Главная">
                    <LinkWrapper href='/'><Typography sx={{ color: 'primary.main' }}>Главная</Typography></LinkWrapper>
                    <Typography sx={{ color: 'text.primary' }}>Услуги</Typography>
                </Breadcrumbs>
            </Stack>
            <Grid container spacing={2}>
                {data?.servicePage?.service_categories?.map((category) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={category?.slug}>
                        <Grid container spacing={1}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box
                                    component='img'
                                    loading='lazy'
                                    src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + category?.image?.url}
                                    width={'100%'}
                                    height={'auto'} />
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
                                <Typography variant='body1'>{category?.description.substring(0, 120) + '...'}</Typography>
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TableContainer>
                                    <Table sx={{ width: '100%' }}>
                                        <TableBody>
                                            {category?.services?.slice(0, 3).map((service) => (
                                                <TableRow key={service?.slug}>
                                                    <TableCell component='th' scope='row'>{service?.title}</TableCell>
                                                    <TableCell
                                                        component='th'
                                                        scope='row'
                                                        sx={{
                                                            fontWeight: 700,
                                                            textAlign: 'end'
                                                        }}>
                                                        {service?.discount
                                                            ? (
                                                                <Box component="span">
                                                                    <Box component="span" sx={{ textDecoration: 'line-through', opacity: 0.7, mr: 1 }}>
                                                                        от {service?.price}₽
                                                                    </Box>
                                                                    <Box component="span" sx={{ color: 'error.main', fontWeight: 700 }}>
                                                                        от {Math.round(service?.price - (service?.price * (service.discountAmount / 100)))}₽
                                                                    </Box>
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
        </Container>
    )
}

export default Services