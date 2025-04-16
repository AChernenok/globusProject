import { Alert, AlertTitle, Box, Container } from "@mui/material";
import Banner from "../components/Banner";
import { GET_HOME_PAGE } from './api/queries'
import { useQuery } from "@apollo/client";
import CallbackBlock from "../components/CallbackBlock";
import PopularServiceBlock from "../components/PopularServicesBlock";
import Advantages from "@/components/Advantages";

const HomePage = () => {
  const { loading, data, error } = useQuery(GET_HOME_PAGE);

  if (loading) return <div>Загрузка...</div>
  if (error) return (
    <Alert severity='error' sx={{
      mt: 2
    }}>
      <AlertTitle>Ошибка</AlertTitle>
      {error.message}
    </Alert>)

  console.log(data)
  return (
    <>
      <Banner
        src={data?.homePage?.sections.find(obj => obj.__typename === 'ComponentBannerHeroBanner')}
        loading={loading}
        error={error}
      />
      <Box sx={{
        bgcolor: '#EEEEEE',
        p: 3
      }}>
        <Container>
          <CallbackBlock />
        </Container>
      </Box>
      <Container>
        <PopularServiceBlock services={data?.services} />
      </Container>
      <Container>
        <Advantages advantages={data?.homePage?.sections.find(obj => obj.__typename === 'ComponentSectionsAdvantages')} />
      </Container>
    </>
  )
}

export default HomePage;