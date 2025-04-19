import { BannerHero } from './components/molecules';
import {
  AboutUs,
  Enviroments,
  Footer,
  Header,
  ShowCampaign,
  Volunteer,
} from './components/organisms';

export default function Home() {
  return (
    <>
      <Header />
      <BannerHero />
      <Enviroments />
      <AboutUs />
      <ShowCampaign />
      <Volunteer />
      <Footer />
    </>
  );
}
