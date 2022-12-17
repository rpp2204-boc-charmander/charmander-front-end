require('dotenv').config()

import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default function handler(req: any, res: any) {
  let { workout_exercise_id } = req.query;

  return axios.get(`http://localhost:${process.env.API_PORT}/exercise/list/sets?workout_exercise_id=${workout_exercise_id}`)
          .then(({ data }) => {
            res.status(200).json(data);
          })
          .catch( error => {
            res.status(400).send(error.stack);
          })
}