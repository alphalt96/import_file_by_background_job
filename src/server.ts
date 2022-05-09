require('dotenv').config();
import app from './restapi/app';

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
