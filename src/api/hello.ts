// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

import useSWR from 'swr';
import { supabase } from '../lib/Supabase';

// Example of how to verify and get user data server-side.
const getData = async (req, res) => {
  const { data, error } = await supabase.auth.api.getUserByCookie(req);

  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json(user);
};

export default getData;
