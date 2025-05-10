import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
    Grid,
    IconButton,
    Paper,
    Skeleton,
    Typography,
} from '@mui/material'
import ReactMarkdown from 'react-markdown'
import { ExpandMore as ExpandMoreIcon, InsertLink as InsertLinkIcon, LocationPin, ArrowForward } from '@mui/icons-material'
import { useState } from 'react'
import { styled } from '@mui/material/styles'

import LinkWrapper from './LinkWrapper'

const PortfolioBlock = ({ loading, data }) => {
    const [expandedId, setExpandedId] = useState(null);

    if (loading) return (
        <Box sx={{ py: 2 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Skeleton variant='rounded' width='100%' height='10rem' />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Skeleton variant='text' width='100%' height='2rem' />
                    <Skeleton variant='text' width='40%' />
                    <Skeleton variant='text' width='60%' />
                    <Skeleton variant='text' width='55%' />
                    <Skeleton variant='text' width='56%' />
                </Grid>
            </Grid>
        </Box>
    )

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme }) => ({
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        variants: [
            {
                props: ({ expand }) => !expand,
                style: {
                    transform: 'rotate(0deg)',
                },
            },
            {
                props: ({ expand }) => !!expand,
                style: {
                    transform: 'rotate(180deg)',
                },
            },
        ],
    }));

    const handleExpandClick = (id) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    return (
        <Box sx={{ py: 2 }}>
            <LinkWrapper href={'/portfolio'}>
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
                    Портфолио
                    <ArrowForward sx={{
                        color: 'error.main',
                        ml: 1
                    }} />
                </Typography>
            </LinkWrapper>
            <Grid container spacing={2}>
                {data?.map((portfolio) => (
                    <Grid key={portfolio.documentId} size={{ xs: 12, sm: 6, md: 4 }}>
                        <Paper elevation={2}>
                            <Card>
                                <CardHeader
                                    title={portfolio.title}
                                    slotProps={{
                                        title: {
                                            variant: 'h4',
                                            component: 'h3'
                                        }
                                    }}
                                    sx={{
                                        position: 'absolute',
                                        bgcolor: 'rgba(0,0,0,0.2)',
                                        color: 'grey.300',
                                        borderBottomRightRadius: '2rem',
                                    }}
                                />
                                <CardMedia
                                    component='img'
                                    width='100%'
                                    height='auto'
                                    image={process.env.NEXT_PUBLIC_STRAPI_BASE_URL + portfolio?.minImage?.url}
                                    alt={portfolio.title}
                                    loading='lazy'
                                />
                                <CardActions disableSpacing>
                                    <LinkWrapper
                                        href={`/portfolio#${portfolio?.slug}`}>
                                        <IconButton
                                            aria-label={portfolio?.title}
                                        >
                                            <InsertLinkIcon sx={{ color: 'primary.main' }} />
                                        </IconButton>
                                    </LinkWrapper>
                                    <ExpandMore
                                        expand={expandedId === portfolio?.documentId}
                                        onClick={() => handleExpandClick(portfolio?.documentId)}
                                        aria-expanded={expandedId === portfolio?.documentId}
                                        aria-label="Показать больше">
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expandedId === portfolio?.documentId} timeout='auto' unmountOnExit>
                                    <Box sx={{ p: 1, display: 'flex', alignItems: 'center' }}>
                                        <LocationPin sx={{ color: 'error.main' }} />
                                        <Typography variant='caption' color='text.secondary'>{portfolio?.address}</Typography>
                                    </Box>
                                    <CardContent>
                                        <Typography component='div' variant='body2'>
                                            <ReactMarkdown>{portfolio?.workDescription}</ReactMarkdown>
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default PortfolioBlock;