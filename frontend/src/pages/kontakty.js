import { useQuery } from "@apollo/client"
import { Alert, Box, Button, Container, Grid, Link, Paper, Skeleton, Typography } from "@mui/material"
import Markdown from "react-markdown"
import { AlternateEmail, Phone, WhereToVote } from "@mui/icons-material"

import WeekIcon from "../../public/icons/WeekIcon"

import { GET_CONTACT_PAGE } from "./api/queries"

import Breadcrumb from "@/components/Breadcrumb"
import { YandexMapEmbed } from "@/components/YandexMapEmbed"
import WindowCalculate from "@/components/WindowCalculate"
import MasterBlock from "@/components/MasterBlock"
import DiscountsBlock from "@/components/DiscountsBlock"
import Seo from "@/components/Seo"

const Contacts = () => {
    const { loading, data, error } = useQuery(GET_CONTACT_PAGE)
    if (loading) return (
        <Container sx={{ py: 2 }}>
            <Skeleton variant='text' height='3rem' width='45%' />
            <Skeleton variant='text' height='1.7rem' width='27%' />
            <Box sx={{ py: 2 }}>
                <Skeleton variant='rounded' height='15rem' />
            </Box>
        </Container>
    )

    if (error) return (
        <Container sx={{ py: 2 }}>
            <Alert variant='filled' severity='error'>{error?.message}</Alert>
        </Container>
    )


    function parseTimeString(str) {
        // Ищем последнее вхождение цифры перед примечанием
        const timeEnd = str.match(/.*?\d(?=\D*$)/)?.[0]?.length || 0;

        return {
            timeRange: str.substring(0, timeEnd + 1).trim(),
            note: str.substring(timeEnd + 1).trim()
        };
    }

    const schedule = parseTimeString(data?.contactPage?.schedule);

    return (
        <Box>
            <Seo seo={data?.contactPage?.seo} />
            <Container sx={{ py: 2 }}>
                <Typography variant='h1'>{data?.contactPage?.title}</Typography>
                <Breadcrumb currentPage={data?.contactPage?.title} />
                <Typography variant='body1' component='div' sx={{
                    '& ul, ol': {
                        ml: 4
                    }
                }}>
                    <Markdown>
                        {data?.contactPage?.description}
                    </Markdown>
                </Typography>
                <Grid container spacing={2} sx={{
                    '& .MuiSvgIcon-root': {
                        width: '3rem',
                        height: '3rem',
                        color: 'error.main'
                    },
                    '& .MuiGrid-container': {
                        justifyContent: 'center',
                        alignItems: 'center'
                    },
                    '& .MuiPaper-root': {
                        p: 2,
                        height: '100%'
                    },
                    mt: 2
                }}>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Paper elevation={2}>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 3 }}>
                                    <WeekIcon />
                                </Grid>
                                <Grid size={{ xs: 9 }}>
                                    <Typography variant='h4'>
                                        {schedule?.timeRange}
                                    </Typography>
                                    <Typography variant='subtitle2'>
                                        {schedule?.note}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Paper elevation={2}>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 3 }}>
                                    <AlternateEmail />
                                </Grid>
                                <Grid size={{ xs: 9 }}>
                                    <Button
                                        variant='text'
                                        href={`mailto:${data?.contactPage?.email}`}
                                    >
                                        {data?.contactPage?.email}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Paper elevation={2}>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 3 }}>
                                    <Phone />
                                </Grid>
                                <Grid size={{ xs: 9 }}>
                                    <Button
                                        variant='text'
                                        href={`tel:${data?.contactPage?.phone}`}
                                        sx={{
                                            fontSize: '1.1rem',

                                        }}
                                    >
                                        {data?.contactPage?.phone}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Paper elevation={2}>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 3 }}>
                                    <WhereToVote />
                                </Grid>
                                <Grid size={{ xs: 9 }}>
                                    <Typography variant='h4'>
                                        {data?.contactPage?.address}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <DiscountsBlock />
            <Container>
                <Typography
                    variant='h4'
                    sx={{ my: 2 }}
                    component='div'
                >
                    <Markdown>
                        {data?.contactPage?.dataIP}
                    </Markdown>
                </Typography>
                <Box>
                    <Typography variant='h2'>{data?.contactPage?.additionalBlock?.title}</Typography>
                    <Typography
                        variant='body1'
                        component='div'
                        sx={{
                            my: 2
                        }}
                    >
                        <Markdown>
                            {data?.contactPage?.additionalBlock?.description}
                        </Markdown>
                    </Typography>
                </Box>
            </Container>
            <YandexMapEmbed />
        </Box>
    )
}

export default Contacts