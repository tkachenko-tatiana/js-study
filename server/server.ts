import app from './app';

const server = app.listen(process.env.PORT || 3100);
console.log(`Server started on http://localhost:${process.env.PORT || 3100}`);

export default server;
