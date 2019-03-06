// server.js


const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
var router = jsonServer.router('db.json');

var db = router.db // lowdb instance


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'authorization');
    res.header('Access-Control-Request-Headers', 'authorization');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Request-Methods', 'GET');
    next() // continue to JSON Server router
})

// Add custom routes before JSON Server router
server.post('/getProducts', (req, res) => {
    res.jsonp(db.get('products'));
});


server.post('/login', (req, res) => {
    res.jsonp(db.get('account'));
});


server.use(middlewares);

server.listen(3000, () => {
    console.log('JSON Server is running')
});