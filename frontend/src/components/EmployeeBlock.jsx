import { useQuery } from "@apollo/client"
import { Alert, Card, CardActionArea, CardContent, CardMedia, Skeleton, Typography } from "@mui/material"
import { Grid } from "@mui/system"

import { GET_EMPLOYEES } from "@/pages/api/queries"

const EmployeeBlock = () => {
    const { loading, data, error } = useQuery(GET_EMPLOYEES)

    if (loading) return (
        <Grid container spacing={2} sx={{ py: 2 }}>
            <Grid size={{ xs: 6, sm: 3, md: 2 }}>
                <Skeleton variant='rounded' width='100%' height='250px' />
            </Grid>
            <Grid size={{ xs: 6, sm: 3, md: 2 }}>
                <Skeleton variant='rounded' width='100%' height='250px' />
            </Grid>
            <Grid size={{ xs: 6, sm: 3, md: 2 }}>
                <Skeleton variant='rounded' width='100%' height='250px' />
            </Grid>
            <Grid size={{ xs: 6, sm: 3, md: 2 }}>
                <Skeleton variant='rounded' width='100%' height='250px' />
            </Grid>
            <Grid size={{ xs: 6, sm: 3, md: 2 }}>
                <Skeleton variant='rounded' width='100%' height='250px' />
            </Grid>
            <Grid size={{ xs: 6, sm: 3, md: 2 }}>
                <Skeleton variant='rounded' width='100%' height='250px' />
            </Grid>
        </Grid>
    )

    if (error) return (
        <Alert variant='filled' severity='error' sx={{ my: 2 }}>{error?.message}</Alert>
    )

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
                <Typography variant='h2'>Наша команда</Typography>
            </Grid>
            {data?.employees?.map((employee) => (
                <Grid key={employee?.documentId} size={{ xs: 6, sm: 3, md: 2 }}>
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
                                component='img'
                                loading='lazy'
                                image={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${employee?.photo?.formats?.thumbnail?.url}`}
                                alt={`${employee?.position} компании Окна Глобус ${employee?.name}`}
                            />
                            <CardContent>
                                {employee?.name && (<Typography variant='h4'>{employee?.name}</Typography>)}
                                {employee?.position && (<Typography variant='h5'>{employee?.position}</Typography>)}
                                {employee?.workExperienceAt && (
                                    <Typography variant='h5'>
                                        Опыт работы: {new Date().getFullYear() - new Date(employee?.workExperienceAt).getFullYear()} лет
                                    </Typography>)}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default EmployeeBlock