const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// File upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public/uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

// Login
app.get('/login', (req, res) => {
  res.render('login', { error: null, success: null });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin123') {
    res.render('login', { error: null, success: 'Login berhasil! Selamat datang, ' + username });
  } else {
    res.render('login', { error: 'Username atau password salah!', success: null });
  }
});

// Checkboxes
app.get('/checkboxes', (req, res) => {
  res.render('checkboxes');
});

// Dropdown
app.get('/dropdown', (req, res) => {
  res.render('dropdown');
});

// Dynamic Loading
app.get('/dynamic-loading', (req, res) => {
  res.render('dynamic-loading');
});

app.get('/api/load-data', (req, res) => {
  setTimeout(() => {
    res.json({ message: 'Data berhasil dimuat! Ini adalah konten dinamis yang muncul setelah loading.' });
  }, 3000);
});

// Form Inputs
app.get('/form-inputs', (req, res) => {
  res.render('form-inputs', { submitted: null });
});

app.post('/form-inputs', (req, res) => {
  res.render('form-inputs', { submitted: req.body });
});

// JavaScript Alerts
app.get('/javascript-alerts', (req, res) => {
  res.render('javascript-alerts');
});

// File Upload
app.get('/file-upload', (req, res) => {
  res.render('file-upload', { uploaded: null });
});

app.post('/file-upload', upload.single('file'), (req, res) => {
  res.render('file-upload', { uploaded: req.file });
});

// Drag and Drop
app.get('/drag-and-drop', (req, res) => {
  res.render('drag-and-drop');
});

// Hover
app.get('/hover', (req, res) => {
  res.render('hover');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Testing Website running at http://localhost:${PORT}`);
});

module.exports = app;
