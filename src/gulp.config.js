const srcAssets = "assets";

module.exports = {
  "html": "html",
  "starter_kit": "starter-kit",
  "documentation": "documentation",
  "src_assets": "assets",
  "dist_assets": "assets",
  "src_assets_path": "./assets",
  "dist_assets_path": "./assets",
  "destination": {
    "path": "assets",
    "js": "assets/js",
    "css": "assets/css"
  },
  "source": {
    "path": srcAssets,
    "js": `${srcAssets}/js`,
    "jsEntry": `${srcAssets}/js/app/app.js`,
    "scss": `${srcAssets}/scss`,
    "html": "html"
  },
  "bundle": {
    "css": {
      "plugin": {
        "source": `${srcAssets}/scss/plugins`,
        "files": [
          "calendar/fullcalendar.min.css", 
          "pickadate/classic.css"
        ]
      }
    },
    "js": {
      "plugin": {
        "source": `${srcAssets}/js/plugins`,
        "files": [
          
        ]
      }
    }
  }
}