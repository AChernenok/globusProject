import { Alert, AlertTitle, Box, Container } from "@mui/material";
import Banner from "../components/Banner";
import { GET_HOME_PAGE } from './api/queries'
import { useQuery } from "@apollo/client";
import CallbackBlock from "../components/CallbackBlock";
import PopularServiceBlock from "../components/PopularServicesBlock";
import Advantages from "@/components/Advantages";
import MasterBlock from "@/components/MasterBlock";
import WindowCalculate from "@/components/WindowCalculate";
import PortfolioBlock from "@/components/PortfolioBlock";

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

  return (
    <>
      <Banner
        src={data?.homePage?.sections.find(obj => obj.__typename === 'ComponentBannerHeroBanner')}
        loading={loading}
        error={error}
      />
      <Box sx={{
        bgcolor: 'grey.50',
        p: 3
      }}>
        <Container>
          <CallbackBlock />
        </Container>
      </Box>
      <Container>
        <PopularServiceBlock services={data?.services} />
      </Container>
      <Box sx={{ bgcolor: 'grey.50', py: 3 }}>
        <Container>
          <Advantages advantages={data?.homePage?.sections.find(obj => obj.__typename === 'ComponentSectionsAdvantages')} />
        </Container>
      </Box>
      <Box>
        <Container>
          <MasterBlock master={data?.homePage?.sections.find(obj => obj.__typename === 'ComponentSectionsMaster')} />
        </Container>
      </Box>
      <Box>
        <WindowCalculate calculateBlock={data?.calculateWindow} />
      </Box>
      <Container>
        <PortfolioBlock />
      </Container>
    </>
  )
}

export default HomePage;