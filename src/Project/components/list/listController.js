const listService = require("./listService");

exports.list = async function (req, res) {
  let page;
  if (req.query.page === undefined) {
    page = 1;
  } else if (req.query.page < 0) {
    page = 1;
  } else {
    page = parseInt(req.query.page);
  }
  const list = await listService.listMovies(page);
 
  let totalPage = await listService.totalMovieNum();
  totalPage = Math.ceil(totalPage / 4);
  
  res.render("list/views/categories", {
    page: req.query.page, // Current Page
    totalPage, // Total Page
    list: list,
  });
};

exports.item = async function (req, res) {
  if(req.params.id == "login") res.render('login');
  else if(req.params.id == "register") res.render('register');
  else if(req.params.id == "categories") res.render('categories');
  else
  {
    let movie;
    try {
      movie = await listService.viewOne(req.params.id);
    } catch (err) {}
    res.render("review", { movie });
  }
};
exports.searchList = async(req, res) => {
  const searchList = await listService.search(req.body.description);
  let found = true;
  if (searchList.length === 0){
    found = false;
  }
  res.render('list/views/searchPage', searchList, found);
}