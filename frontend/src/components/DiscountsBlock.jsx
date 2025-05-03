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
import LinkWrapper from "./LinkWrapper"
import { ArrowForward } from "@mui/icons-material"

const DiscountsBlock = () => {
    const { loading, data, error } = useQuery(GET_DISCOUNTS);

    if (loading) return (<Box>
        <Skeleton />
    </Box>)

    if (error) return (<Alert variant='filled' severity='error'>{error?.message}</Alert>)
    return (
        <Container sx={{ py: 2 }}>
            <LinkWrapper href={'/akcii'}>
                <Typography
                    variant='h2'
                    sx={{
                        mb: 2,
                        textDecoration: 'underline',
                        color: 'primary.main',
                        '&:hover': {
                            '& .MuiSvgIcon-root': {
                                ml: 2
                            },
                        }

                    }}>
                    Акции
                    <ArrowForward sx={{
                        color: 'error.main',
                        ml: 1
                    }} />
                </Typography>
            </LinkWrapper>
            <Grid container spacing={2}>
                {data?.discounts?.slice(0, 4).map((discount) => (
                    <Grid
                        key={discount?.documentId}
                        size={{ xs: 12, sm: 4, md: 3 }}
                        sx={{
                            position: 'relative',
                            mt: { xs: 1 }
                        }}>
                        <Card sx={{ height: '100%' }}>
                            <LinkWrapper href={`/akcii#${discount?.slug}`}>

                                <CardActionArea sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    justifyContent: 'flex-start'
                                }}>
                                    <CardMedia
                                        component='img'
                                        alt={discount?.title}
                                        src={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + discount?.image?.formats?.small?.url}
                                        loading='lazy'
                                    />
                                    <CardContent>
                                        <Typography variant='h4'>{discount?.title}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </LinkWrapper>
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