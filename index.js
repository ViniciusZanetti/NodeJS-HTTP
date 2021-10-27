const bodyParser = require('body-parser');
const app = require('./config/custom-express')();
const port = 3000

app.use(bodyParser.json());

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})


module.exports = app;
