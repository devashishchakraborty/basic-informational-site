
const myUrl = new URL('https://example.com/path?query=123#hash');

console.log(myUrl.href);       // https://example.com/path?query=123#hash
console.log(myUrl.pathname);   // /path
console.log(myUrl.search);     // ?query=123