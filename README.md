# cookies-and-sessions
Practice setting and parsing cookies on both the server and client. Cookies accessible by the client are appended to the DOM.

##In this repo
- Set cookies from the server by setting the header "Set-Cookie"
- Use Express middleware to parse cookies sent from the request
- Set a cookie from the client (document.cookie)
- The HTTP-only cookie is not accessible in client-side JavaScript

##Resources
- [MDN Documentation for cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [Express Documentation for cookies](http://expressjs.com/en/api.html#res.cookie)
- [Cookie Parser npm package](https://www.npmjs.com/package/cookie-parser)
