import app from './app.js';
import { PORT } from './utils/config.js';

app.listen(PORT, () => {
  console.log("Server is running in port ", PORT);
})