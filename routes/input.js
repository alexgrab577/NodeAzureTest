
/*
 * GET users listing.
 */

exports.list = function (req, res) {
    res.render('input', { title: 'Enter Product Information' });
    //res.send("respond with a resource");
};