import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
  return response.json({message: 'Ola mundo cruel!'})
});
app.listen(3333);