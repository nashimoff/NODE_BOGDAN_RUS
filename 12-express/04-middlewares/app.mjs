  import express from 'express';

  const app = express();

  app.use((req, res) => res.send('This is express server'));

  app.listen(5000, () => console.log('server is listening at port 5000'));

  