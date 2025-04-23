import { useQuery } from "@apollo/client"
import { GET_PORTFOLIO_ITEMS } from "./api/queries"
import { Alert, Container, Skeleton, Typography } from "@mui/material"

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
            <Typography variant='h1'>POP</Typography>
        </Container>
    )
}

export default Portfolio