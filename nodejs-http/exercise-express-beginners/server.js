const express = require('express');
const cors = require('cors');
const package = require('./package.json');

const port = process.env.port || process.env.PORT || 3200;
const apiRoot = '/api';

const app = express();
// configure app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: /http:\/\/localhost/ }));
app.options('*', cors());

//Configure routes
const router = express.Router();
router.get('/', (req, res) => {
    res.send(`${package.description} - v${package.version}`);
});

app.use(apiRoot, router);

app.listen(port, () => {
    console.log(`server up on port ${port}!!`);
});



