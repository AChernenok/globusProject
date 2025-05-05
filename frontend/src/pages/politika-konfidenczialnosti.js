import { useQuery } from "@apollo/client"
import { Container } from "@mui/system";
import { Alert, Skeleton, Typography } from "@mui/material";
import Markdown from "react-markdown";

import { GET_PRIVACY_POLICY_PAGE } from "./api/queries"

import Breadcrumb from "@/components/Breadcrumb";
import Seo from "@/components/Seo";

const PrivacyPolicy = () => {

    const { loading, data, error } = useQuery(GET_PRIVACY_POLICY_PAGE);

    if (loading) return (
        <Container sx={{ py: 2 }}>
            <Skeleton variant='text' height='2.3rem' width='40%' />
            <Skeleton variant='text' width='30%' />
            <Skeleton variant='rounded' height='50vh' />
        </Container>
    )

    if (error) return (
        <Container sx={{ py: 2 }}>
            <Alert variant='filled' severity='error'>{error?.message}</Alert>
        </Container>
    )

    return (
        <Container sx={{ py: 2 }}>
            <Seo seo={data?.privacyPolicyPage?.seo} />
            <Typography variant='h1'>{data?.privacyPolicyPage?.title}</Typography>
            <Breadcrumb currentPage={data?.privacyPolicyPage?.title} />
            <Typography variant='body1' component='div'>
                <Markdown>
                    {data?.privacyPolicyPage?.description}
                </Markdown>
            </Typography>
        </Container>
    )

}

export default PrivacyPolicy