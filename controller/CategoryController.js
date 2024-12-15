const conn = require('../mariadb');
const { StatusCodes } = require('http-status-codes');

const allCategory = (req, res) => {
    let sql = `SELECT * FROM books LEFT JOIN category ON books.category_id = category.id  WHERE books.id=?`;
    conn.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        return res.status(StatusCodes.OK).json(results);
    })
};

module.exports = {allCategory};