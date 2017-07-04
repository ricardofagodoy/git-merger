window.$ = window.jQuery = require('jquery');
require('hammerjs');
require('materialize-css');

/* Lightweight and simple for a simple app */
require("./vendor/angular.min.js");

let app = angular.module("app", []);

app.controller("mainController", function($scope) {
});