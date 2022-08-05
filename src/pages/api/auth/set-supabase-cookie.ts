import { supabase } from 'services/api/supabase';

const handler = async (req: Request, res: Response) => {
  await supabase.auth.api.setAuthCookie(req, res);
};

export default handler;
