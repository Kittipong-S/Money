
function changeM(currency) {
  return `$${(currency*0.03).toFixed(2)}`
}
module.exports = changeM;