const express = require('express');
const router = express.Router();
const adminController = require('./adminController');

/* GET home page. */
router.get('/', adminController.getDashboardPage);

/* GET user list page. */
router.get('/user', adminController.getUserPage);


// Movie Actions start
/* GET movie list page. */
router.get('/movie', adminController.getMoviePage);

router.get('/movie/delete/:id', adminController.deleteMovie);

router.get('/addMovie', adminController.getAddMovieForm);
router.post('/addMovie', adminController.addMovie);

// Movie actions end

/* GET home page. */
router.get('/form', adminController.getForm);

/* GET User profile page. */
router.get('/userProfile', adminController.getProfilePage);

/* GET User profile page. */
router.get('/addUser', adminController.getAddUserPage);

router.get('/logout', adminController.logout);
module.exports = router;