function generateRandomString(length) {
  let randomString = "";
  const potentialChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < length; i ++) {
    randomString += potentialChars.charAt(Math.random() * potentialChars.length);
  }
  return randomString;
};

function getUserByEmail(email, users) {
  for (let user in users) {
    if (users[user].email === email){
    return user;
    }  
  }
  return false;
};


module.exports = { generateRandomString, getUserByEmail };