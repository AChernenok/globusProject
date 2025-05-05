import { useQuery } from "@apollo/client"
import { Alert, Box, Container, Grid, Skeleton, Typography, Card, CardActionArea, CardContent, CardHeader } from "@mui/material"
import Markdown from "react-markdown"

import { GET_ABOUT_PAGE } from "./api/queries"

import Breadcrumb from "@/components/Breadcrumb"
import DiscountsBlock from "@/components/DiscountsBlock"
import CallbackBlock from "@/components/CallbackBlock"
import EmployeeBlock from "@/components/EmployeeBlock"
import Seo from "@/components/Seo"

const About = () => {
    const { loading, data, error } = useQuery(GET_ABOUT_PAGE)

    if (loading) return (
        <Container sx={{ py: 2 }}>
            <Skeleton variant='text' height='2.25rem' width='40%' />
            <Skeleton variant='rounded' height='30vh' />
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                    <Skeleton variant='rounded' width='100%' height='8rem' />
                </Grid>
                <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                    <Skeleton variant='rounded' width='100%' height='8rem' />
                </Grid>
                <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                    <Skeleton variant='rounded' width='100%' height='8rem' />
                </Grid>
                <Grid size={{ xs: 6, sm: 4, md: 3 }}>
                    <Skeleton variant='rounded' width='100%' height='8rem' />
                </Grid>
            </Grid>
        </Container>
    )

    if (error) return (
        <Container sx={{ py: 2 }}>
            <Alert variant='filled' severity='error'>{error?.message}</Alert>
        </Container>
    )

    return (
        <Box>
            <Seo seo={data?.aboutPage?.seo} />
            <Container sx={{ py: 2 }}>
                <Typography variant='h1'>{data?.aboutPage?.title}</Typography>
                <Breadcrumb currentPage={data?.aboutPage?.title} />
                <Typography variant='body1' component='div'>
                    <Markdown>{data?.aboutPage?.description}</Markdown>
                </Typography>
            </Container>
            <Box sx={{
                py: 2,
                bgcolor: 'grey.50'
            }}>
                <Container>

                    <Typography variant='h2' sx={{ mb: 2 }}>{data?.aboutPage?.textBtB}</Typography>
                    <Grid container spacing={2}>
                        {data?.aboutPage?.workTypesBtB?.map((type) => (
                            <Grid size={{ xs: 12, sm: 4, md: 3 }} key={type.id}>
                                <Card sx={{ height: '100%' }}>
                                    <CardActionArea sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        justifyContent: 'flex-start'
                                    }}>
                                        <CardHeader
                                            title={type?.text}
                                            sx={{
                                                color: 'error.main',
                                                '& .MuiCardHeader-title': {
                                                    fontSize: '1.5rem',
                                                    lineHeight: '1.75rem'
                                                }
                                            }}
                                        />
                                        <CardContent>
                                            <Typography variant='subtitle1'
                                                sx={{
                                                    color: 'text.primary',
                                                    lineHeight: '1.25rem'
                                                }}
                                            >
                                                {type?.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Container sx={{ py: 2 }}>
                <Typography variant='h2' sx={{ mb: 2 }}>{data?.aboutPage?.textBtC}</Typography>
                <Grid container spacing={2}>
                    {data?.aboutPage?.workTypesBtC?.map((type) => (
                        <Grid size={{ xs: 12, sm: 4, md: 3 }} key={type.id}>
                            <Card sx={{ height: '100%' }}>
                                <CardActionArea sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    justifyContent: 'flex-start'
                                }}>
                                    <CardHeader
                                        title={type?.text}
                                        sx={{
                                            color: 'error.main',
                                            '& .MuiCardHeader-title': {
                                                fontSize: '1.5rem',
                                                lineHeight: '1.75rem'
                                            }
                                        }}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant='subtitle1'
                                            sx={{
                                                color: 'text.primary',
                                                lineHeight: '1.25rem'
                                            }}>
                                            {type?.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Box sx={{ bgcolor: 'grey.50' }}>
                <DiscountsBlock />
            </Box>
            <Container sx={{ py: 2 }}>
                <EmployeeBlock />
            </Container>
            <Container>
                <CallbackBlock />
            </Container>
        </Box>
    )
}

export default About