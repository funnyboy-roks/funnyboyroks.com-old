import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home', page: 'home' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About', page: 'about' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact', page: 'contact' });
});

router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects', page: 'projects' });
});

export default router;
