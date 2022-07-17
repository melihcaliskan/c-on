import { ILogin } from '@/interfaces/ILogin.interface';
import type { NextApiRequest, NextApiResponse } from 'next'
import players from './players';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ILogin.ILoginResponse>
) {
  if (req.method === 'POST') {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);
    if (username in players && players[username as keyof typeof players].password === password) {
      const player: ILogin.Player = Object.assign({}, players[username as keyof typeof players]); //Creating a copy of player
      delete player.password;
      res.status(200).json({
        status: 'success',
        player
      });
    } else {
      res.status(400).json({
        status: 'fail',
        error: 'player does not exist or wrong password'
      });
    }
  }
}
