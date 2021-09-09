import * as React from 'react';
import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';

import { RiMapPin3Fill } from 'react-icons/ri';
import { Marker } from 'react-map-gl';
import { supabase } from '../lib/createSupabaseClient';

export const Toairportpinchild = (props) => {
  const { data } = props;

  return data?.map((city, index) => (
    <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
      <IconContext.Provider value={{ color: '#fff333', size: '24px' }}>
        <RiMapPin3Fill></RiMapPin3Fill>
        <style jsx>{``}</style>
      </IconContext.Provider>
    </Marker>
  ));
};
