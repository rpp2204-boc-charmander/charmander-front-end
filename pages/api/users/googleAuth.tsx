import axios from 'axios'
import { GiConsoleController } from 'react-icons/gi';

export default async function GoogleAuth (req: any, res: any) {
  const { auth_id } = req.query

  axios
    .get(`${process.env.BACKEND_URL}/user/auth/${auth_id}`)
    .then((response: any) => {
      res.status(200).send(response.data)
    })
    .catch((err) => console.log('Error fetching Google Auth from DB'));
}