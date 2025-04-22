import { GET_SERVICE_CATEGORY } from "@/pages/api/queries"
import { useQuery } from "@apollo/client"
import {
    Alert,
    Container,
    Skeleton,
    Typography,
    Stack,
    Breadcrumbs,
    Grid,
    Box,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell
} from "@mui/material"
import { NavigateNext } from '@mui/icons-material'
import LinkWrapper from "../../../components/LinkWrapper"
import { useRouter } from "next/router"
import CallbackBlockSmall from "@/components/CallbackBlockSmall"
import WindowCalculate from "@/components/WindowCalculate"
import PortfolioBlock from "@/components/PortfolioBlock"

const CategoryPage = () => {
    const router = useRouter()
    const { slug } = router.query
    const { loading, data, error } = useQuery(GET_SERVICE_CATEGORY, {
        variables: { slug }
    })

    if (loading) return (
        <Container sx={{ py: 2 }}>
            <Skeleton variant='text' height='3rem' width='60%' />
            <Skeleton variant='text' width='35%' />
            <Skeleton variant='rounded' height='7rem' width='40%' />
            <Skeleton variant='text' width='75%' />

        </Container>
    )
    if (error) return (
        <Container sx={{ py: 2 }}>
            <Alert variant='filled' severity='error'>{error?.message}</Alert>
        </Container>
    )

    const category = data?.serviceCategories[0]

    console.log(data)
    return (
        <Box>

            <Container sx={{ py: 2 }}>
                <Typography variant='h1' fontSize={'3rem'}>{category?.title}</Typography>
                <Stack spacing={2} sx={{ py: 2 }}>
                    <Breadcrumbs separator={<NavigateNext />} aria-label="Главная">
                        <LinkWrapper href='/'>
                            <Typography
                                sx={{
                                    color: 'primary.main'
                                }}>
                                Главная
                            </Typography>
                        </LinkWrapper>
                        <LinkWrapper href='/uslugi'>
                            <Typography
                                sx={{
                                    color: 'primary.main'
                                }}>
                                Услуги
                            </Typography>
                        </LinkWrapper>
                        <Typography sx={{ color: 'text.primary' }}>{category?.title}</Typography>
                    </Breadcrumbs>
                </Stack>
                <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                    <Grid size={{ xs: 12, sm: 5 }}>
                        <Typography variant='body1'>{category?.description}</Typography>
                    </Grid>
                    <Grid size={{ sm: 5 }} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <CallbackBlockSmall />
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ bgcolor: 'grey.50', py: 2 }}>
                <Container>
                    <Typography variant='h2' sx={{ fontSize: '2rem' }}>Стоимость услуг</Typography>
                    <TableContainer>
                        <Table sx={{ width: '100%' }}>
                            <TableBody>
                                {category?.services.map((service) => (
                                    <TableRow key={service?.slug}>
                                        <TableCell component='th' scope='row'>{service?.title}</TableCell>
                                        <TableCell component='th' scope='row' sx={{ color: 'red', fontWeight: 700, textAlign: 'end' }}>от {service?.price}₽</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Box>
            <WindowCalculate calculateBlock={data?.calculateWindow} loading={loading} />
            <Container>
                <PortfolioBlock data={data?.portfolioItems} loading={loading} />
            </Container>
        </Box>
    )
}

export default CategoryPage