import { Typography, Box, Grid, Card, CardActionArea, CardMedia, CardContent } from "@mui/material"
import { Link } from 'react-router-dom'

const PopularServiceBlock = ({ services }) => {
    console.log(services)
    return (
        <Box sx={{
            py: 3
        }}>
            <Typography variant='h2' fontSize={'2.25rem'}>Популярные услуги</Typography>
            <Grid container spacing={2} sx={{ mt: 2, alignItems: 'stretch' }}>
                {services?.map((service) => (
                    <Grid key={service.slug}
                        size={{ xs: 6, sm: 4, md: 2 }}
                        sx={{
                            backgroundColor: 'grey',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                        <Card

                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                            <CardActionArea
                                component={Link}
                                to={'/uslugi/' + service?.slug}
                                sx={{
                                    flexGrow: 1,
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                <CardMedia
                                    component='img'
                                    image={import.meta.env.VITE_URL + service?.image?.formats?.thumbnail?.url}
                                    alt={service?.title}
                                    sx={{
                                        width: '100%',
                                        height: 140,
                                        objectFit: 'cover',
                                        flexShrink: 0
                                    }}
                                />
                                <CardContent sx={{
                                    flexGrow: 1,
                                    width: '100%',
                                }}>
                                    <Box sx={{
                                        p: 2
                                    }}>
                                        <Typography gutterBottom variant='h6'>
                                            {service?.title}
                                        </Typography>
                                        <Typography variant='caption'>{service?.service_category?.title}</Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default PopularServiceBlock