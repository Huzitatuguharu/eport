// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/Supabase';

const getAirportAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  // const id = req.query.id;

  const { data, error } = await supabase.from('airport').select();

  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json(data);
};

export default getAirportAPI;



// ここからSupabaseに接続
// const getairportdata = async () => {
//   const { data, error } = await supabase.from('airport').select();
//   setAirportdata(data);
// };

// useEffect(() => {
//   getairportdata();
// }, []);


  // ここからSupabaseに接続,setFromdata
  //  latitude: number;
  //  longitude: number;
  // const gettroutedata = async () => {
  //   const abc = {
  //     number: 1,
  //     name: 2,
  //   };
  //   const { data, error } = await supabase
  //     .from('airport')
  //     .select('latitude,longitude')
  //     .eq('id', abc.name);
  //   console.log(data);
  //   setTodata(data);
  // };

  // useEffect(() => {
  //   gettroutedata();
  //   console.log('useEffectが実行されました');
  // }, [fromairport]);

  //   if (fromairport != null) {
  //     console.log(fromairport);
  //     // setFromdata(fromairport);
  //     // console.log(fromdata);

  //     // useEffect(() => {
  //     //   console.log('gettoairportdataが実行されました');
  //     //   gettoairportdata();
  //     // }, [fromairport]);
  //   }

  //     // ここからSupabaseに接続
  // const getairportdata = async () => {
  //   const { data, error } = await supabase.from('airport').select();
  //   setAirportdata(data);
  // };

  // useEffect(() => {
  //   getairportdata();
  // }, []);
