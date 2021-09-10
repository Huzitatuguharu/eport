// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/createSupabaseClient';

const getRouteAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  // const id = req.query.id;

  const { data, error } = await supabase.from('route').select();

  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json(data);
};

export default getRouteAPI;
