function requireUser(req, res, next) {
  // console.log(req.user);
  if (!req.user) {
    next({
      name: "MissingUserError",
      message: "You must be logged in to perform this action",
    });
  }

  next();
}

function requireAdmin(req, res, next) {
  console.log(req.user);
  if (!req.user.isAdmin) {
    next({
      name: "NotAdminError",
      message: "You must be an admin to perform this operation",
    });
  }

  next();
}

module.exports = {
  requireUser,
  requireAdmin,
};
