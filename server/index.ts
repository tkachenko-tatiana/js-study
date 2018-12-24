import connectDB from './db/connect';

connectDB().then(() => require('./server'));
