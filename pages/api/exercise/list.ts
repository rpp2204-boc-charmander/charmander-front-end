require('dotenv').config()

import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default function handler(req: any, res: any) {
  let { username, log_date } = req.query;

  return axios.get(`http://${process.env.BACKEND_URL}/exercise/list?username=${username}&log_date=${log_date}`)
          .then(({ data }) => {
            res.status(200).json(data);
          })
          .catch( error => {
            res.status(400).send(error.stack);
          })
}