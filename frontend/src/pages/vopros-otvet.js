import { useQuery } from "@apollo/client"
import { Container } from "@mui/system"
import { Accordion, AccordionDetails, AccordionSummary, Alert, Skeleton, Typography, Box } from "@mui/material"
import Markdown from "react-markdown"
import { ExpandMore } from "@mui/icons-material"

import { GET_FAQ_PAGE } from "./api/queries"

import CallbackBlockSmall from "@/components/CallbackBlockSmall"
import DiscountsBlock from "@/components/DiscountsBlock"
import Breadcrumb from "@/components/Breadcrumb"
import Seo from "@/components/Seo"

const FAQ = () => {
    const { loading, data, error } = useQuery(GET_FAQ_PAGE)

    if (loading) return (
        <Container sx={{ py: 2 }}>
            <Skeleton variant='text' height='3rem' width='40%' />
            <Skeleton variant='text' width='30%' />
            <Skeleton variant='rounded' height='15rem' />
        </Container>
    )

    if (error) return (
        <Container sx={{ py: 2 }}>
            <Alert variant='filled' severity='error'>{error?.message}</Alert>
        </Container>
    )

    return (
        <Box>
            <Seo seo={data?.faqPage?.seo[0]} />
            <Container sx={{ py: 2 }}>
                <Typography variant='h1'>{data?.faqPage?.title}</Typography>
                <Breadcrumb currentPage={data?.faqPage?.title} />
                <Typography variant='body1' component='div'
                    sx={{
                        my: 2,
                        '& a': {
                            color: 'primary.main',
                            textDecoration: 'underline'
                        }
                    }}>
                    <Markdown>
                        {data?.faqPage?.description}
                    </Markdown>
                </Typography>
                {data?.faqPage?.mainBlock?.map((item) => (
                    <Box key={item?.id} sx={{ py: 2 }}>
                        <Typography variant='h3' sx={{ my: 1 }}>{item.title}</Typography>
                        {item?.answers?.map((answer) => (
                            <Accordion key={answer?.id}>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    aria-controls={answer?.id + '-panel'}
                                >
                                    <Typography component='span' variant='h4' color='primary.main'>{answer?.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography
                                        variant='body2'
                                        component='div'
                                        sx={{
                                            '& ul, ol': {
                                                ml: 4
                                            }
                                        }}
                                    >
                                        <Markdown>
                                            {answer?.answer}
                                        </Markdown>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                ))}
                <CallbackBlockSmall />
            </Container>
            <DiscountsBlock />

        </Box>
    )
}

export default FAQ