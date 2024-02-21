const Menu = require("../models/menuModel");

const menuController = {};

// @desc  Fetch all menus
// @route   GET /api/menu
// @access Public
menuController.fetchMenus = async (req, res, next) => {
  try {
    //.exec(): This method executes the query asynchronously and returns a promise. When the promise resolves, it will contain the result of the query (an array of documents).
    const menus = await Menu.find({}).exec();
    res.locals.menus = menus;
    return next();

  } catch (error) {
    return next("Error in menuController.fetchMenus: " + error.message);
  }
};

// @desc  Fetch each menu
// @route   GET /api/menu/:id
// @access Public
menuController.getMenuById = async (req, res, next) => {
  try {
    const id = req.params.id;
    //.exec(): This method executes the query asynchronously and returns a promise. When the promise resolves, it will contain the result of the query (an array of documents).
    const menu = await Menu.findById(id).exec();

    res.locals.menu = menu;
    return next();

  } catch (error) {
    return next("Error in menuController.getMenuById: " + error.message);
  }
};

module.exports = menuController;
