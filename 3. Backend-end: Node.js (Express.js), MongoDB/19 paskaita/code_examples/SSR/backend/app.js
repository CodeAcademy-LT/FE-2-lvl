import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blog', async (req, res) => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await data.json();

  res.render('blog', { title: 'Blog', posts: posts.slice(0, 20) });
});

app.listen(PORT, () => console.log(`Server is runing on port: ${PORT}`));
