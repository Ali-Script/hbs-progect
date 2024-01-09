const app = require('./app');
const mongoose = require('mongoose');
const port = "4000";

(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/education-web")
})();


app.listen(port, () => { console.log(`Server Run on Port : 4000`); });