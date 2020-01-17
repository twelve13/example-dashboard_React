module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Item.js":
/*!****************************!*\
  !*** ./components/Item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/carolinechen/projects/example-dashboard_React/components/Item.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Item extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("li", {
      className: "item-listing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("a", {
      href: this.props.details.url,
      target: "blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("img", {
      src: this.props.details.image,
      alt: this.props.details.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), this.props.details.name));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: artData, homepageData, recipeData, shoppingData, webdevData, workoutData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "artData", function() { return artData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homepageData", function() { return homepageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipeData", function() { return recipeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shoppingData", function() { return shoppingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webdevData", function() { return webdevData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workoutData", function() { return workoutData; });
const artData = [{
  id: 1,
  name: "aseprite pixel art",
  image: "https://steamcdn-a.akamaihd.net/steam/apps/431730/ss_46a7e00325c8e3b8cea2cfecc414a4b777827d8e.1920x1080.jpg?t=1548704961",
  url: "https://www.aseprite.org/"
}, {
  id: 2,
  name: "behance",
  image: "https://pbs.twimg.com/profile_images/636661084720500737/_QglFGym.jpg",
  url: "https://www.behance.net/"
}, {
  id: 3,
  name: "dribbble",
  image: "https://cdn.vox-cdn.com/thumbor/E_431gs6VnInGjSrNM9C96BCYlg=/0x0:1024x575/1200x800/filters:focal(431x207:593x369)/cdn.vox-cdn.com/uploads/chorus_image/image/64135816/dribbble_featured_image.0.png",
  url: "https://dribbble.com/"
}, {
  id: 4,
  name: "freepik",
  image: "https://freepik.cdnpk.net/img/logo-fb-en.png",
  url: "https://www.freepik.com/"
}, {
  id: 5,
  name: "How To: Adobe Dimension",
  image: "https://theblogimages.adobe.com/wp-content/uploads/2019/04/Decal_Fill_700_2.gif",
  url: "https://create.adobe.com/2018/4/14/how_to_make_a_styliz.html"
}, {
  id: 6,
  name: "Maniac Pixel Art",
  image: "https://i.redd.it/6dqwnr1287s11.jpg",
  url: "https://www.twipu.com/pixeldehtyar/tweet/1084742523455721472"
}, {
  id: 7,
  name: "Michele Fabbricatore",
  image: "http://www.michelefabbricatore.it/wp-content/uploads/2017/01/06-home-europa-e-zeus.jpg",
  url: "http://www.michelefabbricatore.it/"
}, {
  id: 8,
  name: "Photoshop courses",
  image: "https://www.cmu.edu/computing/news/images/2018/nov/2_lyndalinkedin_1400x700-min.jpg",
  url: "https://www.linkedin.com/learning/search?keywords=photoshop&u=76813682"
}, {
  id: 9,
  name: "Pixel Dailies",
  image: "https://steemitimages.com/DQmQrukSMukpH9LJbpxoYkYEBdDxcNjSQfPVEYbEnDZferJ/haku2BIg2.png",
  url: "https://twitter.com/Pixel_Dailies"
}, {
  id: 10,
  name: "Pixeljoint",
  image: "http://4.bp.blogspot.com/-KN1ZPRnlLnc/VFwFrz0iSoI/AAAAAAAABi8/z0uYgE25ZSQ/s1600/START.png",
  url: "http://pixeljoint.com/"
}, {
  id: 11,
  name: "Yasmina Creates",
  image: "https://images.squarespace-cdn.com/content/v1/58f23d9b37c581141194cbe7/1501970988348-FQFLVOCV7CYWQSD66JEI/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/crystals.jpg?format=2500w",
  url: "https://www.yasminacreates.com/aoj0l2hhte7i22kawxh7u9qi4e47tk"
}, {
  id: 12,
  name: "1001 Free Fonts",
  image: "https://steemitimages.com/0x0/https://s3-us-west-2.amazonaws.com/steemhunt/production/steemhunt/2019-02-28/2cb72d7e-1001%20NEW.png",
  url: "https://www.1001freefonts.com/"
}];
const homepageData = [{
  id: 1,
  name: "dcist",
  image: "https://thehoya.com/wp-content/uploads/2017/11/17.11.06_DCist_DCistTwitter.png",
  url: "https://dcist.com/"
}, {
  id: 2,
  name: "NY Times",
  image: "https://am13.akamaized.net/med/cnt/uploads/2019/02/NYT-LOGO-1200x630.jpg",
  url: "https://www.nytimes.com/"
}, {
  id: 3,
  name: "reddit",
  image: "https://static.adweek.com/adweek.com-prod/wp-content/uploads/2019/10/Reddit-Logo-Horizontal.png",
  url: "https://www.reddit.com/"
}, {
  id: 4,
  name: "100 Days of X",
  image: "https://www.emergingrnleader.com/wp-content/uploads/2012/04/100days.png",
  url: "https://www.100daysofx.com/"
}];
const recipeData = [{
  id: 1,
  name: "LMLD Garlic Bread",
  image: "https://i1.wp.com/lmld.org/wp-content/uploads/2011/08/Garlic-Bread-Sticks-2.jpg?w=750&ssl=1 750w, https://i1.wp.com/lmld.org/wp-content/uploads/2011/08/Garlic-Bread-Sticks-2.jpg?resize=240%2C300&ssl=1 240w, https://i1.wp.com/lmld.org/wp-content/uploads/2011/08/Garlic-Bread-Sticks-2.jpg?resize=610%2C763&ssl=1 610w",
  url: "https://lmld.org/garlic-bread-sticks/"
}, {
  id: 2,
  name: "Tf2 Spiced Nuts",
  image: "https://www.tablefortwoblog.com/wp-content/uploads/2013/11/spiced-nuts-tablefortwoblog-1.jpg",
  url: "https://www.tablefortwoblog.com/maple-cinnamon-spiced-nuts/"
}, {
  id: 3,
  name: "ToH Garlic Bread",
  image: "https://www.tasteofhome.com/wp-content/uploads/2018/06/exps4964_MRR143297B09_09_1b-alt-696x696.jpg",
  url: "https://www.tasteofhome.com/recipes/pull-apart-garlic-bread/"
}];
const shoppingData = [{
  id: 1,
  name: "Chewy",
  image: "https://image.businessinsider.com/5c6db501598e2366fd402a93?width=1100&format=jpeg&auto=webp",
  url: "https://www.chewy.com/s?rh=c%3A977%2CSmallPetType%3AChinchilla"
}, {
  id: 2,
  name: "Krink",
  image: "http://cdn.shopify.com/s/files/1/0192/3860/products/Mini_Sprayer_1600.jpg?v=1570548355",
  url: "https://shop.krink.com/"
}, {
  id: 3,
  name: "Modcloth",
  image: "https://marketing.modcloth.com/pages/models/2017/01/images/inst.modcloth.jpg",
  url: "https://www.modcloth.com/"
}, {
  id: 4,
  name: "Rent the Runway",
  image: "https://www.pymnts.com/wp-content/uploads/2019/05/Rent-the-Runway-San-Francisco-store-retail.jpg",
  url: "https://www.renttherunway.com/"
}];
const webdevData = [{
  id: 1,
  name: "A List Apart",
  image: "https://alistapart.com/wp-content/uploads/2019/03/ala-logo-big.png?fit=960%2C98",
  url: "https://alistapart.com/"
}, {
  id: 2,
  name: "Box Shadow Generator",
  image: "http://wpsites.net/wp-content/uploads/2012/12/box-shadow-generator.png",
  url: "https://www.cssmatic.com/box-shadow"
}, {
  id: 3,
  name: "codepen",
  image: "https://miro.medium.com/max/2100/1*Otx7CXIY9eh0Sxlp54olxA.png",
  url: "https://codepen.io/"
}, {
  id: 4,
  name: "CSS clip-path maker",
  image: "https://www.bram.us/wordpress/wp-content/uploads/2017/06/css-clip-path-maker.png",
  url: "https://bennettfeely.com/clippy/"
}, {
  id: 5,
  name: "CSS color names",
  image: "https://codepen.io/adevade/pen/dzqlJ/image/large.png",
  url: "http://www.colors.commutercreative.com/grid/"
}, {
  id: 6,
  name: "CSS Diner",
  image: "http://images.shejidaren.com/wp-content/uploads/2014/03/css-diner.gif",
  url: "http://flukeout.github.io/"
}, {
  id: 7,
  name: "CSS Grid",
  image: "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2018/08/15342987132_columns-960x1024.png",
  url: "https://css-tricks.com/snippets/css/complete-guide-grid/"
}, {
  id: 8,
  name: "Daily CSS Images",
  image: "https://www.iluzie.nl/wp-content/uploads/2017/06/2017-06-04-12_05_14-CodePen-DailyCSSimages-day-3_-Beaver.png",
  url: "http://dailycssimages.com/"
}, {
  id: 9,
  name: "designmodo",
  image: "https://cdn.dribbble.com/users/283883/screenshots/4488962/designmodo-dribbble.png",
  url: "https://designmodo.com/dev-portfolio-tips/"
}, {
  id: 10,
  name: "ES6 compatibility table",
  image: "http://kangax.github.io/compat-table/logo.png",
  url: "https://kangax.github.io/compat-table/es6/"
}, {
  id: 11,
  name: "event keycodes",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwKqcPLqUkVIH1Ik10CUW4FdXXDhokGXydYKkFUjP9lFw4xQO&s",
  url: "http://keycode.info/"
}, {
  id: 12,
  name: "Guide To Flexbox",
  image: "https://images.thoughtbot.com/blog-vellum-image-uploads/Lf3CIKbRRQ2iuN5OaEJr_header.png",
  url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
}, {
  id: 13,
  name: "Icons8",
  image: "https://img.icons8.com/plasticine/2x/icons8-new-logo.png",
  url: "https://icons8.com/icons"
}, {
  id: 14,
  name: "Javascript30",
  image: "https://tfrommen.de/wp-content/uploads/javascript30-hero-1920x720.jpg",
  url: "https://javascript30.com/"
}, {
  id: 15,
  name: "JS for cats",
  image: "http://jsforcats.com/images/substack-cats.png",
  url: "http://jsforcats.com/"
}, {
  id: 16,
  name: "Learn git branching",
  image: "https://pcottle.github.io/learnGitBranching/assets/learnGitBranching.png",
  url: "https://learngitbranching.js.org/"
}, {
  id: 17,
  name: "Media Queries (ex layouts)",
  image: "https://d1cr57qij2cwzh.cloudfront.net/wp-content/uploads/2016/10/EOA-2019-MediaQueries.jpg",
  url: "https://mediaqueri.es/"
}, {
  id: 18,
  name: "One Page Love",
  image: "https://www.bookmarks.design/media/image/onepagelove.jpg",
  url: "https://onepagelove.com"
}, {
  id: 19,
  name: "Pixabay",
  image: "https://cdn.pixabay.com/photo/2017/10/31/09/47/good-night-2904747_960_720.jpg",
  url: "https://pixabay.com/"
}, {
  id: 20,
  name: "SrollReveal",
  image: "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/11/1418954007scroll-reveal-js-logo.png",
  url: "https://scrollrevealjs.org/"
}, {
  id: 21,
  name: "Siteinspire",
  image: "https://dnco.com/media/organisations/SiteInspire.png",
  url: "https://www.siteinspire.com/"
}, {
  id: 22,
  name: "Skillshare",
  image: "https://lh3.googleusercontent.com/TycuYZqxQz9U40kVdfX3u4ePV1kc-kvPI5mGtsFh8V9xFkq07M927hiKMWyj1Aoq_OY",
  url: "https://www.skillshare.com/home"
}, {
  id: 23,
  name: "Typewolf",
  image: "https://www.typewolf.com/assets/img/typewolf-og.png",
  url: "https://www.typewolf.com/"
}, {
  id: 24,
  name: "Unicode symbols",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWC9_2RgAX8gUfmVV5doMC1feoViSuj58jVVmqRb6oiCMqLiR_g&s",
  url: "https://www.compart.com/en/unicode/U+25B2"
}];
const workoutData = [{
  id: 1,
  name: "Crossfit DC",
  image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2019%2F03%2F03194556%2Fcrossfit-health-fitness-benefits.jpg&q=85",
  url: "https://crossfitdc.com/"
}, {
  id: 2,
  name: "Dance Place",
  image: "https://www.danceplace.org/wp-content/uploads/2014/12/DC-Casineros-and-Audience-dancing-at-Latin-Sizzle-Festival-2.jpg",
  url: "http://www.danceplace.org/adult-classes/"
}, {
  id: 3,
  name: "Pure Barre",
  image: "https://classpass-res.cloudinary.com/image/upload/f_auto,q_auto/to42xaslx3wnyy5ffhil.png",
  url: "https://www.purebarre.com/location/washington-dupont-circle-dc"
}, {
  id: 4,
  name: "Wired Cycling",
  image: "https://res.cloudinary.com/fittco/image/upload/w_1080,f_auto/f9yli9ng6ltlhciwmfkr.jpg",
  url: "https://wiredcycling.com/"
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  artData,
  homepageData,
  recipeData,
  shoppingData,
  webdevData,
  workoutData
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./data.js");
/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Item */ "./components/Item.js");
var _jsxFileName = "/Users/carolinechen/projects/example-dashboard_React/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //this is the homepage

class Dashboard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "section-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Homepage"), __jsx("ul", {
      className: "item-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, _data__WEBPACK_IMPORTED_MODULE_1__["homepageData"].map(item => __jsx(_components_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      details: _data__WEBPACK_IMPORTED_MODULE_1__["homepageData"][item.id - 1],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/carolinechen/projects/example-dashboard_React/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map