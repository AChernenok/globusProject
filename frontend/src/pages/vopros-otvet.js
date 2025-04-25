import { useQuery } from "@apollo/client"
import { GET_FAQ_PAGE } from "./api/queries"
import { Container } from "@mui/system"
import { Accordion, AccordionDetails, AccordionSummary, Alert, Skeleton, Typography, Box } from "@mui/material"
import Markdown from "react-markdown"
import { ExpandMore } from "@mui/icons-material"

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

    console.log(data)

    return (
        <Container sx={{ py: 2 }}>
            <Typography variant='h1'>{data?.faqPage?.title}</Typography>
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
        </Container>
    )
}

export default FAQ