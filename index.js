// Code your solution here

function findMatching(driversArr, string) {
  return driversArr.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(driversArr, string) {
  return driversArr.filter(driver => driver.toLowerCase().startsWith(string.toLowerCase()));
}

function matchName(driversArr, string) {
  return driversArr.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
}
