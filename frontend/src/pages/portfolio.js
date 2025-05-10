import { useQuery } from "@apollo/client"
import { Alert, Box,  Card, CardContent, CardHeader, CardMedia, Container, Grid, Paper, Skeleton, Typography } from "@mui/material"
import Markdown from "react-markdown"
import { LocationPin } from "@mui/icons-material"

import { GET_PORTFOLIO_ITEMS } from "./api/queries"

import Breadcrumb from "@/components/Breadcrumb"
import Seo from "@/components/Seo"

const Portfolio = () => {
    const { loading, data, error } = useQuery(GET_PORTFOLIO_ITEMS)


    if (loading) return (
        <Container sx={{ py: 2 }}>
            <Skeleton variant='text' height='3rem' width='55%' />
            <Skeleton variant='text' height='1.2rem' width='30%' />
            <Skeleton variant='rounded' height='6rem' sx={{ my: 2 }} />
            <Skeleton variant='rounded' height='15rem' sx={{ my: 2 }} />
            <Skeleton variant='rounded' height='15rem' sx={{ my: 2 }} />
        </Container>
    )
    if (error) return (
        <Container sx={{ py: 2 }}>
            <Alert variant='filled' severity='error'>{error?.message}</Alert>
        </Container>
    )

    return (
        <Container sx={{ py: 2 }}>
            <Seo seo={data?.portfolioPage?.seo[0]} />
            <Typography variant='h1'>{data?.portfolioPage?.title}</Typography>
            <Breadcrumb currentPage={data?.portfolioPage?.title} />
            <Typography
                variant='body1'
                component='div'
                sx={{
                    my: 2
                }}
            >
                <Markdown>
                    {data?.portfolioPage?.description}
                </Markdown>
            </Typography>
            <Grid container spacing={2}>
                {data?.portfolioPage?.portfolio_items.map((item) => (
                    <Grid key={item?.documentId} size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                            <CardHeader
                                title={item?.title}
                                slotProps={{
                                    title: {
                                        variant: 'h4',
                                        component: 'h3'
                                    }
                                }}
                                sx={{
                                    position: 'absolute',
                                    bgcolor: 'rgba(0,0,0,0.2)',
                                    color: 'grey.300',
                                    borderBottomRightRadius: '2rem',
                                }} />
                            <CardMedia
                                component='img'
                                loading='lazy'
                                image={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + item?.minImage?.url}
                                alt={item?.title} />
                            <CardContent sx={{ position: 'relative' }}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        position: 'absolute',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        top: -50,
                                        right: 10,
                                        width: '90px',
                                        height: '90px',
                                        justifyContent: 'center'
                                    }}>
                                    <Box
                                        component='img'
                                        src='/favicon-32x32.png'
                                        loading='lazy'
                                        sx={{
                                            width: '24px',
                                            height: '24px',
                                        }}
                                        alt='Окна Глобус'
                                    />
                                    <Typography variant='caption' color='primary.main' fontWeight='700'>Окна Глобус</Typography>
                                </Paper>
                                <Box sx={{ my: 3, display: 'flex', alignItems: 'center' }}>
                                    <LocationPin sx={{ color: 'error.main' }} />
                                    <Typography variant='caption' color='text.secondary'>{item?.address}</Typography>
                                </Box>
                                <Typography
                                    variant='body2'
                                    component='div'
                                    sx={{ ml: 1 }}
                                >
                                    <Markdown>
                                        {item?.workDescription}
                                    </Markdown>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Portfolio