import * as React from 'react';
import { useState, useEffect } from 'react';
import useSWR, { SWRConfig } from 'swr';
import { LoadingAnime } from '../components/Loading';

export default function ContentContent() {
  return (
    <div>
      <p>aaaaaa</p>
      <LoadingAnime />
    </div>
  );;
}
