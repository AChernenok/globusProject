import { Box, Grid, Typography } from "@mui/material"

const Advantages = ({ advantages }) => {
    console.log('Array advantages:', advantages)
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
                <Typography variant='h2' fontSize={'2.25rem'}>{advantages?.title}</Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
                <Grid container spacing={2}>
                    {advantages?.card?.map((item) => (
                        <Grid key={item.id} size={{ xs: 12, md: 4 }}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 3 }}>
                                    Image
                                </Grid>
                                <Grid>
                                    <Typography variant='body1'>
                                        {item.title}
                                    </Typography>
                                    <Typography variant='body2'>
                                        {item.description}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Advantages