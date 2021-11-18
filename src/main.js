const { welcome, goodbye, tell } = require("../utils/fortune-teller");

async function getFortune(question) {
  try {
    const answer = await tell(question);
    console.log(`Your question was: ${question}`);
    console.log(`Your fortune is: ${answer}`);
  } 
  catch (e) {
    console.log(`There was an error: ${e}`);
  }
}

async function fullSession(question) {
  try {
    console.log(await welcome());
    console.log(await getFortune(question));
  }
  catch (e) {
    console.log(`There was an error: ${e}`);
  }
  finally {
    console.log(await goodbye());
  }
}

console.log(fullSession("really?"))

module.exports = { getFortune, fullSession };
