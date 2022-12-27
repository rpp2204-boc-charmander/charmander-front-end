require('dotenv').config()

import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default function handler(req: any, res: any) {
  let { reps, weights, workout_id } = req.body;

  console.log(reps, weights, workout_id)

  return axios.put(`${process.env.API_URL}/exercise/workout/sets`, {
            reps,
            weights,
            workout_id
          })
          .then(({ data }) => {
            res.status(200).json(data);
          })
          .catch( error => {
            res.status(400).send(error.stack);
          })
}