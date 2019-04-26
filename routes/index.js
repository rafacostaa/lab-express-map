const express = require('express');
const router  = express.Router();
const Picture = require('../models/Picture');
const uploadCloud = require('../config/cloudinary.js');

// const Movie = require('../models/movie.js');


/* GET home page */
router.get('/map', (req, res, next) => {
  res.render('map');
});

// router.get('/', (req, res, next) => {
//   Picture.find((err, pictures) => {
//     res.render('index', { pictures });
//   });
// });

router.post('/upload', uploadCloud.single('photo'), (req, res, next) => {
  // const { title, description } = req.body;
  const imgPath = req.file.url;
  const imgName = req.file.originalname;
  
  const pic = new Picture({
    name: req.body.name,
    path: imgPath,
    originalName: imgName,
  });
  
  pic.save((err) => {
    res.redirect('/');
  });
});

// const newMovie = new Movie({title, description, imgPath, imgName})
// newMovie.save()
//   .then(movie => {
//   res.redirect('/');
// })

// .catch((error) => {
//   console.log(error);
// })
// });

// const upload = multer({ dest: './public/uploads/' });

// router.post('/upload', upload.single('photo'), (req, res) => {

//   const pic = new Picture({
//     name: req.body.name,
//     path: `/uploads/${req.file.filename}`,
//     originalName: req.file.originalname,
//   });

//   pic.save((err) => {
//     res.redirect('/');
//   });
// });

module.exports = router;
