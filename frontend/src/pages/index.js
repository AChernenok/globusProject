import { Box, Container } from "@mui/material";
import { useQuery } from "@apollo/client";

import Banner from "../components/Banner";
import CallbackBlock from "../components/CallbackBlock";
import PopularServiceBlock from "../components/PopularServicesBlock";

import { GET_HOME_PAGE } from './api/queries'

import Advantages from "@/components/Advantages";
import MasterBlock from "@/components/MasterBlock";
import WindowCalculate from "@/components/WindowCalculate";
import PortfolioBlock from "@/components/PortfolioBlock";
import ServecesTable from "@/components/ServicesTable";
import Seo from "@/components/Seo";
import EmployeeBlock from "@/components/EmployeeBlock";
import PriceNotice from "@/components/PriceNotice";

const HomePage = () => {
  const { loading, data, error } = useQuery(GET_HOME_PAGE);

  let seo = null
  if (!loading && !error) {
    seo = data?.homePage?.seo
  }
  return (
    <Box component='section'>
      <Seo seo={seo} />
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
        <WindowCalculate loading={loading} calculateBlock={data?.calculateWindow} />
      </Box>
      <Container>
        <PortfolioBlock loading={loading} data={data?.portfolioItems} />
      </Container>
      <Container>
        <ServecesTable />
        <PriceNotice />
        <EmployeeBlock />
      </Container>
    </Box>
  )
}

export default HomePage;