import React, { useContext } from 'react'
import axios from 'axios'
import base64url from 'base64url'
import { ThirdPartyUserId } from '../../fitbit'

export default function FitbitRoute (req: any, res: any) {

    const code = req.query.code

    ThirdPartyUserId(code)

    res.status(200).redirect()


    // const params = {
    //     client_id: process.env.FITBIT_ID,
    //     grant_type: 'authorization_code',
    //     code
    // }

    // const authorization = base64url(`${process.env.FITBIT_ID}:${process.env.FITBIT_SECRET}`)

    // const authHeaders = {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Authorization': `Basic ${authorization}`
    // }

    // axios
    // .post('https://api.fitbit.com/oauth2/token', params, {
    //     headers: authHeaders
    // })
    // .then((user: any) => {

    //     const userExists = authContext.checkDatabase()

    //     if (userExists === false) {
    //         const params = {
    //             'user-id': user.data.user_id,
    //         }

    //         const headers = {
    //             'Authorization': `Bearer ${user.data.access_token}`
    //         }

    //         axios
    //             .post('https://api.fitbit.com/1/user/-/profile.json', params, {
    //                 headers
    //             })
    //             .then((userData: any) => {

    //                 const {encodedId, firstName, lastName, gender, height, weight, avatar640} = userData.data.user

    //                 const USER_DATA = {
    //                     id: encodedId,
    //                     firstname: firstName,
    //                     lastname: lastName,
    //                     height,
    //                     weight,
    //                     sex: gender,
    //                     profile: avatar640
    //                 }


    //             })
    //             .catch(err => {
    //                 throw new Error('Error fetching user profile', err)
    //             })
    //     }


    // })
    // .catch(err => {
    //     throw new Error('Error fetching user id', err)
    // })

    res.status(200).send({ data: 'HelloWorld'})

}