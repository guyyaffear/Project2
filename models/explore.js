"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");

var conenction = new Sequelize('Train_Table','root','');

var TTable = conenction.define('')