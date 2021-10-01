// middleware to check valid id
const isValidId = (req, res, next) => {
  if (!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'))
}

module.exports = isValidId;