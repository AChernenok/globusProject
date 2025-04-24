import { useQuery } from "@apollo/client"
import { GET_PORTFOLIO_ITEMS } from "./api/queries"
import { Alert, Box, Button, Container, Grid, Paper, Skeleton, Typography } from "@mui/material"
import Markdown from "react-markdown"
import LinkWrapper from "@/components/LinkWrapper"
import Breadcrumb from "@/components/Breadcrumb"

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

    console.log(data)
    return (
        <Container sx={{ py: 2 }}>
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
                    <Grid
                        size={{ xs: 12 }}
                        key={item?.documentId}
                        id={item?.slug}
                    >
                        <Paper elevation={2} sx={{ p: 2 }}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                                    <Box
                                        component='img'
                                        src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + item?.minImage?.url}
                                        width='100%'
                                        height='auto'
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 8, md: 9 }}>
                                    <Typography variant='h5'>
                                        <Markdown>
                                            {item?.workDescription}
                                        </Markdown>
                                    </Typography>
                                    <Box>
                                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Предоставленные услуги:</Typography>
                                        {item?.services?.map((service) => (
                                            <LinkWrapper
                                                key={service?.documentId}
                                                href={'/uslugi/' + service?.service_category?.slug}>
                                                <Button>{service?.title}</Button>
                                            </LinkWrapper>
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Portfolio