const mongoose = require('mongoose');

const connectDB = async () => {
  const cn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${cn.connection.host}`.blue.bold.underline);
};

module.exports = connectDB;
