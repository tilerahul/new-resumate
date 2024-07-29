
import React, { useEffect } from 'react';
import Hero from '../Hero';
import Templates from '../Templates';
import Feature from '../feature';
function Home() {
  useEffect(()=>{
    alert('Our site is under maintenance. To ensure the best quality of your resume, please build it on a laptop or desktop.')
  }, [])
  return (
    <>
      <Hero/>
      <Templates/>
      <Feature/>
    </>
  );
}

export default Home;
