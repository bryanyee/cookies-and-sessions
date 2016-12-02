// Set a cookie from the client
document.cookie = `COOKIE_FROM_CLIENT=cookieFromClient;expires=${(new Date(Date.now() + 60000).toUTCString())}`;

const cookies = document.cookie
                .split(';')
                .map(cookie => cookie.trim());

// Append a list of cookies to the page
const list = document.getElementById('cookie-list');

cookies.forEach((cookie) => {
  const item = document.createElement('li');
  const text = document.createTextNode(cookie);
  item.appendChild(text);
  list.appendChild(item);
});
