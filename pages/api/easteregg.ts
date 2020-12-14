import { NextApiRequest, NextApiResponse } from 'next'

// req = HTTP incoming message, res = HTTP server response
export default (_: NextApiRequest, res: NextApiResponse) => {
    res.redirect('https://qnemes.github.io/')
}