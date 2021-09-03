import HeroSection from '../components/HeroSection'
import sanity from "../lib/sanity";
import { FC } from 'react'
import HeadSection from '../components/HeadSection';
import PrimaryLayout from '../components/layouts/PrimaryLayout';
import HowSection from '../components/HowSection';
import WhySection from '../components/WhySection';
import WhoSection from '../components/WhoSection';

const dataQ = '*[_type == "homepage"][0]'
const menuQ = '*[_type == "primarynavigation"][0]'

const Home: FC<{data: any, menu: any}> = ({ data, menu }) => {
  return (
    <div>
      <HeadSection 
        metadataDescription={data.metadataDescription} 
        metadataTitle={data.metadataTitle} 
      />

      <PrimaryLayout menu={menu}>
      <main>
        <HeroSection data={data} />
        <HowSection data={data} />
        <WhySection data={data} />
        <WhoSection data={data} />
      </main>
      </PrimaryLayout>
      <footer>
        
      </footer>
    </div>
  )
}


export const getStaticProps = async () => {
  const data = await sanity.fetch(dataQ);
  const menu = await sanity.fetch(menuQ)
  return {
    props: { data, menu }
  };
};

export default Home