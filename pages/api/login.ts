import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from 'cookies';

const proxy = httpProxy.createProxyServer()
type Data =  {
    message: any
}

export const config = {
    api: {
      bodyParser: false,
    },
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method !=='POST') {
        return res.status(404).json({message: 'method is not supported'})
    }

    return new Promise((resolve)=>{
        console.log('login req')
        req.headers.cookie =  '' // don't send cookies to API server
        const handleLoginResponse :ProxyResCallback = (proxyRes, req, res) =>{
        let body = ''
        proxyRes.on('data', function (chuck) {
            body +=chuck
        })

        proxyRes.on('end', function(){
            try {
                // converse cookies to header Authorization
                const {accessToken, expiredAt} = JSON.parse(body)
                // convert token to cookies
                const cookies = new Cookies(req, res, { secure : process.env.NODE_ENV !== 'development'})
                cookies.set('access_token', accessToken, {
                    httpOnly: true,
                    sameSite: 'lax',
                    expires : new Date(expiredAt)
                })
                ;(res as NextApiResponse).status(200).json({message: "Login successfully"})
                throw new Error('Error')
            } catch(error) {
                ;(res as NextApiResponse).status(500).json({message: "Something when wrong"})
            }
            resolve(true)
            console.log('res from proxy server', body)
            console.log('body', body)
            res.end('my res to cli')
        })
        }
        proxy.once('proxyRes', handleLoginResponse)
        proxy.web(req, res,{
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: true  // true là handle res trước khi trả về
        })
    })
}
