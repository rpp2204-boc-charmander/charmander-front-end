import axios from 'axios'

export default async function GetStrava (req: any, res: any) {

  const code = req.query.code

  const OPTIONS = {
    client_id: process.env.STRAVA_ID,
    client_secret: process.env.STRAVA_SECRET,
    code: code,
    grant_type: 'authorization_code'
  }

  if (code) {
    axios
    .post('https://www.strava.com/oauth/token', OPTIONS)
    .then(response => {
      // get the  user id @ res.data.athlete.id
      const userId: string = response.data.athlete.id
      // check if that user id exists in the database
      axios
        .get(`http://localhost:4000/user/${userId}`)
        .then(userData => {

          // if it does exist
          if (typeof userData.data === 'object') {
            // gather the user information from the response
            const { user_id } = userData.data
            // redirect to overview
            res.status(200).redirect('/overview')
            // return the _id for the user
          }

          // if it does not exist
          if (typeof userData.data === 'string') {
            // redirect to user settings with the info filled in
            res.status(200).redirect('/settings')
          }
        })

    })
    .catch((err: object) => console.log(err))
  }

}