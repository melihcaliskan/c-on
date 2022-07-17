import type { NextApiRequest, NextApiResponse } from 'next'
import players from './players';

// TODO: Define status type
type Response = {
  status: string;
  error?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
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
