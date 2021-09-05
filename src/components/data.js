import useSWR from 'swr';
import { supabase } from '../lib/Supabase';

// export const Data = () => {
//   const fetcher = async (url) => (await axios.get(url)).data.result;

//   const options = {
//     // 初期データ
//     initialData: null,
//     // pollingの期間（ミリ秒）
//     refreshInterval: 5000,
//     // windowのフォーカス時にRevalidateする
//     revalidateOnFocus: true,
//   }

//   const { data, error } = useSWR("http://localhost:3001/tweet", fetcher, options)

//   // 省略

//   // ここからSupabaseに接続
//   const getairportdata = async () => {
//     const { data, error } = await supabase.from('airport').select();
//     setAirportdata(data);
//   };

//   useEffect(() => {
//     getairportdata();
//   }, []);

//   return (
//   <>
//       </>
// )


// }


