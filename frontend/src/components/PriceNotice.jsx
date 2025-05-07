import { useQuery } from "@apollo/client"
import { Alert, Typography } from "@mui/material"
import Markdown from "react-markdown"

import { GET_PRICE_NOTICE } from "@/pages/api/queries"

const PriceNotice = () => {
    const { loading, data, error } = useQuery(GET_PRICE_NOTICE)

    if (loading) return (
        <Alert variant='filled' severity='info' sx={{ my: 2 }}>
            <Typography variant='body1'>Загрузка...</Typography>
        </Alert>)

    if (error) return (
        <Alert variant='filled' severity='error' sx={{ my: 2 }}>{error.message}</Alert>
    )

    if (data?.globalSetting?.isPriceNoticeActive) return (
        <Alert variant='standard' severity='info' sx={{ my: 2 }}>
            <Markdown>
                {data?.globalSetting?.priceNotice}
            </Markdown>
        </Alert>
    )
}

export default PriceNotice;