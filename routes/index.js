﻿
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Alex\'s Node Homepage (P)' });
};