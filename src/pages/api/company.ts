// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/createSupabaseClient';

const getCompanyAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  // const id = req.query.id;
  const { data, error } = await supabase.from('company').select();

  // 401 Unauthorized、認証が必要
  if (error) return res.status(401).json({ error: error.message });
  // 200番台は、処理が成功して正常にレスポンスができている状態
  return res.status(200).json(data);
};

export default getCompanyAPI;
