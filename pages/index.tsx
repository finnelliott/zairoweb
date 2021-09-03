import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import sanity from "../lib/sanity";
import { FC } from 'react'
import HeadSection from '../components/HeadSection';
import MainLayout from '../components/layouts/PrimaryLayout';
import WhatSection from '../components/WhatSection';

const query = '*[_type == "homepage"][0]'

const Home: FC<{data: any}> = ({ data }) => {
  return (
    <div>
      <HeadSection 
        metadataDescription={data.metadataDescription} 
        metadataTitle={data.metadataTitle} 
      />

      <MainLayout>
      <main>
        <HeroSection data={data} />
        <WhatSection data={data} />
      </main>
      </MainLayout>
      <footer>
        
      </footer>
    </div>
  )
}


export const getStaticProps = async () => {
  const data = await sanity.fetch(query);
  return {
    props: { data }
  };
};

export default Home