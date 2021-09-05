import useSWR from 'swr';
import { supabase } from '../lib/Supabase';

export default function FirstPost() {

  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>hello {data[0].userId}!</div>;
  // return <h1>First Post</h1>;
}


const fetcher = (...args) => fetch(...args).then((res) => res.json());


//   // ここからSupabaseに接続
//   const getairportdata = async () => {
//     const { data, error } = await supabase.from('airport').select();
//     setAirportdata(data);
//   };

//   useEffect(() => {
//     getairportdata();
//   }, []);


const { data, error } = useSWR(user ? '/api/getRecipes?uid=' + user.id : null, fetcher, {
  refreshInterval: 1000,
});

const { data, error } = useSWR(user ? '/api/getRecipes?uid=' + user.id : null, fetcher, {
  refreshInterval: 1000,
});

const getRecipes = async (req, res) => {

  const id = req.query.uid;

  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('user_id', id)
    .order('id', true);

  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json(data);
};

export default getRecipes;
