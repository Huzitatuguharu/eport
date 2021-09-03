import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import * as React from 'react';

import { MAP } from '../components/Mapbox';





const Home: NextPage = () => {
 



  return (
    <>
      <MAP latitude={37} longitude={130} />
    </>
  );
};

  export default Home;
