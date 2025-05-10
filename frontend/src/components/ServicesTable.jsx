import { useQuery } from "@apollo/client"
import {
    Alert,
    Box,
    Grid,
    Skeleton,
    IconButton,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Tabs,
    Tooltip,
    Typography
} from "@mui/material"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { useState } from "react"

import { GET_SERVICES_TABLE } from "@/pages/api/queries"

const ServecesTable = () => {
    const [value, setValue] = useState(0)
    const { loading, data, error } = useQuery(GET_SERVICES_TABLE);

    if (loading) return (
        <Skeleton variant='rounded' height='5rem' width='100%' />
    )

    if (error) return (
        <Alert variant='filled' severity='error'>{error?.message}</Alert>
    )

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid container spacing={1} sx={{ py: 2 }}>
            <Grid size={{ xs: 12 }} sx={{ mb: 2 }}>
                <Typography variant='h2'>Стоимость услуг</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <Tabs
                        variant='scrollable'
                        scrollButtons
                        allowScrollButtonsMobile
                        value={value}
                        onChange={handleChange}
                        aria-label='Цены на услуги'>
                        {data?.serviceCategories?.map((serviceCategory) => (
                            <Tab label={serviceCategory?.title} key={serviceCategory?.slug} sx={{
                                alignItems: 'flex-start'
                            }} />
                        ))}
                    </Tabs>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Tabs
                        orientation='vertical'
                        variant='scrollable'
                        value={value}
                        onChange={handleChange}
                        aria-label='Цены на услуги'
                        sx={{ borderRight: { sm: 1 }, borderColor: 'divider' }}>
                        {data?.serviceCategories?.map((serviceCategory) => (
                            <Tab label={serviceCategory?.title} key={serviceCategory?.slug} sx={{
                                alignItems: 'flex-start'
                            }} />
                        ))}
                    </Tabs>
                </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 9 }}>
                <TableContainer>
                    <Table sx={{ width: '100%' }}>
                        <TableBody>
                            {data?.serviceCategories?.[value].services.map((service) => (
                                <TableRow key={service?.slug}>
                                    <TableCell component='th' scope='row'>
                                        <Box sx={{ display: 'flex' }}>
                                            <Tooltip
                                                title={service?.description || 'Описание недоступно'}
                                                placement="top"
                                                enterTouchDelay={0}
                                                leaveTouchDelay={3000}
                                                slotProps={{
                                                    tooltip: {
                                                        sx: {
                                                            bgcolor: '#fff',
                                                            color: 'text.primary',
                                                            boxShadow: 2,
                                                            borderRadius: 1,
                                                            px: 1.5,
                                                            py: 1,
                                                            fontSize: 13,
                                                            maxWidth: 220,
                                                        }
                                                    }
                                                }}
                                            >
                                                <IconButton aria-label={service?.description || 'Описание'}>
                                                    <HelpOutlineIcon sx={{ color: 'primary.main' }} />
                                                </IconButton>
                                            </Tooltip>
                                            <Typography variant='body1'>
                                                {service?.title}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell
                                        component='th'
                                        scope='row'
                                        sx={{
                                            fontWeight: 700,
                                            textAlign: 'end'
                                        }}>
                                        {service?.discount
                                            ? (
                                                <Box>
                                                    <Typography
                                                        variant='caption'
                                                        sx={{ textDecoration: 'line-through', opacity: 0.7, mr: 1 }}>
                                                        от {service?.price}₽
                                                    </Typography>
                                                    <Typography variant='body2' sx={{ color: 'error.main', fontWeight: 700 }}>
                                                        от {Math.round(service?.price - (service?.price * (service.discountAmount / 100)))}₽
                                                    </Typography>
                                                </Box>
                                            ) : (
                                                <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                                                    от {service?.price}₽
                                                </Box>
                                            )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default ServecesTable