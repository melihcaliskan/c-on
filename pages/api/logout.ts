import { ILogout } from '@/interfaces/ILogout.interface';
import type { NextApiRequest, NextApiResponse } from 'next'
import players from "./mockData/players.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ILogout.ILogoutResponse>
) {
  if (req.method === 'POST') {
    var username = req.body.username;
    
    if (username in players) {
      res.status(200).json({
        status: 'success'
      });
    } else {
      res.status(400).json({
        status: 'fail',
        error: 'Username do not match!'
      });
    }
  }
}
