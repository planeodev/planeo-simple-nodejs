const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, World! <3. This is v1.0.0 of the nodejs app and is hosted on kubernetes' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});