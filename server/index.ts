import connectDB from './db/connect';

connectDB().then(() => require('./server')).catch((err) => {
  console.log(err);
});
