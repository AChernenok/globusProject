import { useQuery } from "@apollo/client"
import { Alert, Box, Grid, Skeleton, Tab, Table, TableBody, TableCell, TableContainer, TableRow, Tabs, Tooltip, Typography } from "@mui/material"
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
            <Grid size={{ xs: 5, md: 3 }}>
                <Tabs
                    orientation='vertical'
                    variant='scrollable'
                    value={value}
                    onChange={handleChange}
                    aria-label='Цены на услуги'
                    sx={{ borderRight: 1, borderColor: 'divider' }}>
                    {data?.serviceCategories?.map((serviceCategory) => (
                        <Tab label={serviceCategory?.title} key={serviceCategory?.slug} sx={{
                            alignItems: 'flex-start'
                        }} />
                    ))}
                </Tabs>
            </Grid>
            <Grid size={{ xs: 7, md: 9 }}>
                <TableContainer>
                    <Table sx={{ width: '100%' }}>
                        <TableBody>
                            {data?.serviceCategories?.[value].services.map((service) => (
                                <TableRow key={service?.slug}>
                                    <TableCell component='th' scope='row'>
                                        <Tooltip title={service?.description} placement='top'>
                                            {service?.title}
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell component='th' scope='row' sx={{ color: 'red', fontWeight: 700 }}>от {service?.price}₽</TableCell>
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