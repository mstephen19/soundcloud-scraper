const { Track } = require('../models');
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/mason',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err, res) {
    try {
      console.log('Connected to MongoDB using Mongoose');
    } catch (err) {
      throw err;
    }
  }
);

(async function () {
  await Track.deleteMany({});
  const confirm = await Track.find({});
  console.log('DB cleared!');
  console.log(confirm);
})();
