const userController = {};

userController.getUsers = function(request, response){ response.json({ users: "list of Users" }) }
userController.insertUser = function(request, response){ response.json({ users: "insert user" }) }
userController.getUser = function(request, response){ response.json({ users: "one user" }) }
userController.deleteUser = function(request, response){ response.json({ users: "delete one user" }) }
userController.updateUser = function(request, response){ response.json({ users: "update a user" }) }

module.exports = userController;
