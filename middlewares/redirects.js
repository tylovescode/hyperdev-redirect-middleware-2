'use strict';

const makeRedirectMiddleware = (redirectsMap) => (req, res, next) => {
	//uses find method to serach for first entry in redirectsMap that matches
	//search, in this case, requested path
  if (Object.keys(redirectsMap).find((entry) => entry === req.path)) {
    console.log(`Redirecting ${req.path} to ${redirectsMap[req.path]}`);
    res.redirect(301, redirectsMap[req.path]);
  }
  else {
    next(); 
  }
};

module.exports = {makeRedirectMiddleware};
