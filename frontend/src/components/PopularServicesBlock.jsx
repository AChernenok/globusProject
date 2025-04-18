import { Typography, Box, Grid, Card, CardActionArea, CardMedia, CardContent, Badge } from "@mui/material"
import LinkWrapper from "./LinkWrapper"

const PopularServiceBlock = ({ services }) => {
    return (
        <Box sx={{
            py: 3
        }}>
            <Typography variant='h2' fontSize={'2.25rem'}>Популярные услуги</Typography>
            <Grid container spacing={2} sx={{ mt: 2, alignItems: 'stretch' }}>
                {services?.map((service) => (
                    <Grid key={service.slug} size={{ xs: 6, sm: 3, md: 2 }}>
                        <LinkWrapper href={`/ulsugi/${service?.slug}`}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    overflow: 'visible',
                                }}
                            >
                                <CardActionArea
                                    sx={{
                                        flex: '1 0 auto',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'start',
                                        overflow: 'visible',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${service?.image?.formats?.thumbnail?.url}`}
                                        alt={service?.title}
                                        sx={{
                                            width: '100%',
                                            height: 140,
                                            objectFit: 'cover',
                                            flexShrink: 0,
                                        }}
                                    />
                                    <CardContent
                                        sx={{
                                            pt: 0,
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h6">
                                                {service?.title}
                                            </Typography>
                                            <Typography variant="caption">{service?.service_category?.title}</Typography>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                                {service?.discount && (
                                    <Badge
                                        badgeContent={'-' + service?.discountAmount + "%"}
                                        color="error"
                                        sx={{
                                            position: 'absolute',
                                            top: -15,
                                            right: -20,
                                            '.MuiBadge-badge': {
                                                padding: '0 8px',
                                                minWidth: 'auto',
                                                height: '24px',
                                                lineHeight: '24px',
                                                fontSize: '0.75rem',
                                                transform: 'none',
                                                fontWeight: 700
                                            },
                                            zIndex: 1,
                                        }}
                                    />
                                )}
                            </Card>
                        </LinkWrapper>
                    </Grid>
                ))}
            </Grid>
        </Box >
    )
}

export default PopularServiceBlock