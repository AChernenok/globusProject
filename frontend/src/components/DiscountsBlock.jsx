import { GET_DISCOUNTS } from "@/pages/api/queries"
import { useQuery } from "@apollo/client"
import {
    Box,
    Skeleton,
    Alert,
    Container,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Badge
} from "@mui/material"
import Markdown from 'react-markdown'

const DiscountsBlock = () => {
    const { loading, data, error } = useQuery(GET_DISCOUNTS);

    if (loading) return (<Box>
        <Skeleton />
    </Box>)

    if (error) return (<Alert variant='filled' severity='error'>{error?.message}</Alert>)
    console.log(data)
    return (
        <Container sx={{ py: 2 }}>
            <Typography variant='h2' sx={{ mb: 2}}>Акции</Typography>
            <Grid container spacing={2}>
                {data?.discounts?.map((discount) => (
                    <Grid key={discount?.documentId} size={{ xs: 6, sm: 4, md: 3 }} sx={{ position: 'relative' }}>
                        <Card sx={{ height: '100%' }}>
                            <CardActionArea sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'flex-start'
                            }}>
                                <CardMedia
                                    component='img'
                                    alt={discount?.title}
                                    src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + discount?.image?.formats?.small?.url} />
                                <CardContent>
                                    <Typography variant='h4'>{discount?.title}</Typography>
                                    <Typography
                                        component='div'
                                        variant='body2'
                                        sx={{
                                            my: 1,
                                            '& ol, ul': {
                                                ml: 2
                                            },
                                            fontSize: '.8rem'
                                        }}>
                                        <Markdown>{discount?.shortDescription}</Markdown>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Badge
                            badgeContent={'до -' + discount?.discountAmount + "%"}
                            color="error"
                            sx={{
                                position: 'absolute',
                                top: -15,
                                right: 0,
                                '.MuiBadge-badge': {
                                    padding: '0 8px',
                                    minWidth: 'auto',
                                    height: '28px',
                                    lineHeight: '28px',
                                    fontSize: '0.75rem',
                                    transform: 'none',
                                    fontWeight: 700,
                                    width: '4rem'
                                },
                                zIndex: 1,
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default DiscountsBlock