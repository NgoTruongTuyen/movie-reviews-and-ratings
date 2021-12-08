const List = require("../movie/movieModel");


//exports.listMovies = () => List.find().lean();
const PAGE_SIZE = 4;

exports.listMovies = (page) => {
    console.log(page);
  
    const Skip = (page - 1) * PAGE_SIZE;
    page = parseInt(page);
    return List.find({}).skip(Skip).limit(PAGE_SIZE);
  };
  
exports.totalMovieNum = () => List.countDocuments();

//exports.viewOne = (id) => Movie.findOne({ _id: id }).lean();
exports.viewOne = (id) => List.findById(id).lean();
