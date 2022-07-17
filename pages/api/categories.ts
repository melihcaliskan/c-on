import type { NextApiRequest, NextApiResponse } from 'next';
import categories from "./mockData/categories.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    res.status(200).json(categories);
  }
}
