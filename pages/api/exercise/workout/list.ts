import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: any, res: any) {
  const { user_id, log_date } = req.query;

  return await axios
    .get(
      `${process.env.BACKEND_URL}/exercise/workout/list?user_id=${user_id}&log_date=${log_date}`
    )
    .then(({ data }) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).send(error.stack);
    });
}
