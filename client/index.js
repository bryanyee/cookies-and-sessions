document.cookie = `COOKIE_FROM_CLIENT=cookieFromClient;expires=${(new Date(Date.now() + 60000).toUTCString())}`;
console.log(document.cookie);
