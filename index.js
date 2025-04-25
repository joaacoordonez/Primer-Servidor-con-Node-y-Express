import app from './src/app.js';
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})

app.use((req, res, next) => {
    res.redirect('https://http.cat/404');
  });