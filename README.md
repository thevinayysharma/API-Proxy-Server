## API PROXY SERVER

### Communication mechanism
Frontend --> API proxy server -->OpenweatherAPI

Terms:
- API proxy : An API proxy is a thin API server that exposes a stable interface for an existing service or service


Packages:
- Express
- dotenv
- Cors
- needle -  streamable lightweight client for http, provides more support such as proxy, deflate, timeout, charset, iconv, cookie, redirect in case, if you worry why not axios or request package. Needle is built with this functionality
- express-rate-limit
- api-cache

Misc Notes:
- nodemon : makes auto chanegs, better DX and saves time, installed as dev dependency
- neelde returns a promise
- nodefetch doesn;t work with older common-JS
- [trust-proxy](https://stackoverflow.com/questions/23413401/what-does-trust-proxy-actually-do-in-express-js-and-do-i-need-to-use-ithttps://stackoverflow.com/questions/23413401/what-does-trust-proxy-actually-do-in-express-js-and-do-i-need-to-use-it)
- building static folder


Major Process:
- Install required dependencies
- Introduce "start" scripts in package.json 
    e.g: "start" : node index" index being --> main@filename 
    "start" : "nodemon run index"

- Intialize app using express. Remmbers common process( process.env.port, app.use(), app.listen())
- build a .env file to use for API credentials
- build basic route to check API response is working or not