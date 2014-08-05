    function checkUsersValid(goodUsers) {
      return function(submittedUsers) {
       return submittedUsers.every(function(subUser) {
		return goodUsers.some(function(user) {
			return user.id === subUser.id;
		});
	});
      };
    }
    
    module.exports = checkUsersValid
