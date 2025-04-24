import { useQuery } from "@apollo/client"
import { Alert, Box, Container, Skeleton, Typography } from "@mui/material"
import { GET_CONTACT_PAGE } from "./api/queries"
import Breadcrumb from "@/components/Breadcrumb"
import Markdown from "react-markdown"

const Contacts = () => {
    const { loading, data, error } = useQuery(GET_CONTACT_PAGE)

    {/* <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/bk_okna_globus/224228164853/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">БК Окна Глобус</a><a href="https://yandex.ru/maps/213/moscow/category/windows/184107727/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Окна в Москве</a><a href="https://yandex.ru/maps/213/moscow/category/hardware_for_windows/184107745/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">Комплектующие для окон в Москве</a><iframe src="https://yandex.ru/map-widget/v1/?ll=37.599911%2C55.880182&mode=search&oid=224228164853&ol=biz&z=16.55" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div> */ }

    if (loading) return (
        <Container sx={{ py: 2 }}>
            <Skeleton variant='text' height='3rem' width='45%' />
            <Skeleton variant='text' height='1.7rem' width='27%' />
            <Box sx={{ py: 2 }}>
                <Skeleton variant='rounded' height='15rem' />
            </Box>
        </Container>
    )

    if (error) return (
        <Container sx={{ py: 2 }}>
            <Alert variant='filled' severity='error'>{error?.message}</Alert>
        </Container>
    )

    console.log(data)

    return (
        <Container sx={{ py: 2 }}>
            <Typography variant='h1'>{data?.contactPage?.title}</Typography>
            <Breadcrumb currentPage={data?.contactPage?.title} />
            <Typography variant='body1' component='div' sx={{
                '& ul, ol': {
                    ml: 4
                }
            }}>
                <Markdown>
                    {data?.contactPage?.description}
                </Markdown>
            </Typography>
            <Typography variant='h3'>{data?.contactPage?.address}</Typography>

        </Container>
    )
}

export default Contacts