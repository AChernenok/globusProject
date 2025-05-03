import { useQuery } from "@apollo/client"
import { GET_AKCII_PAGE } from "../api/queries"
import { Box, Container, Grid } from "@mui/system"
import { Alert, AlertTitle, Badge, Paper, Skeleton, Typography } from "@mui/material"
import Breadcrumb from "@/components/Breadcrumb"
import Seo from "@/components/Seo"
import Markdown from "react-markdown"
import CallbackBlock from "@/components/CallbackBlock"

const Akcii = () => {
    const { loading, data, error } = useQuery(GET_AKCII_PAGE)

    if (loading) return (
        <Container sx={{ py: 2 }}>
            <Skeleton variant='text' height='2.2rem' width='40%' />
            <Skeleton variant='text' width='30%' />
            <Skeleton variant='rounded' height='15rem' sx={{ my: 2 }} />
        </Container>
    )

    if (error) return (
        <Container sx={{ py: 2 }}>
            <Alert variant='filled' severity='error'>
                <AlertTitle>Ошибка</AlertTitle>
                {error?.message}
            </Alert>
        </Container>
    )


    return (
        <Container sx={{ py: 2 }}>
            <Seo seo={data?.akciiPage?.seo} />
            <Typography variant='h1'>{data?.akciiPage?.title}</Typography>
            <Breadcrumb currentPage={data?.akciiPage?.title} />
            <Typography variant='body1' component='div' sx={{
                '& ul, ol': {
                    ml: 4
                },
                pb: 2
            }}>
                <Markdown>
                    {data?.akciiPage?.description}
                </Markdown>
            </Typography>
            <CallbackBlock />
            <Grid container spacing={2} sx={{ py: 2 }}>
                {data?.akciiPage?.discounts?.filter((discount) => discount?.active).map((discount) => (
                    <Grid key={discount?.documentId} size={{ xs: 12 }} id={discount?.slug}>
                        <Paper elevation={2} sx={{ p: 2, position: 'relative' }}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                                    <Box
                                        component='img'
                                        loading='lazy'
                                        src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + discount?.image?.url}
                                        alt={discount?.title}
                                        width='100%'
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 8, md: 9 }}>
                                    <Typography variant='h3'>{discount?.title}</Typography>
                                    <Typography
                                        variant='body1'
                                        component='div'
                                        sx={{
                                            '& ul, ol': {
                                                ml: 4
                                            },
                                            my: 2
                                        }}
                                    >
                                        <Markdown>
                                            {discount?.shortDescription}
                                        </Markdown>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Badge
                                badgeContent={`-${discount?.discountAmount}%`}
                                color='error'
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: '20px'
                                }}
                            />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Akcii