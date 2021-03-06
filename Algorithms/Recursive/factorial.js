const factoryial = (n) => {
  if (n === 1) return 1
  return n * factoryial(n - 1)
}
export default factoryial
/*
  time complexity: O(n)
  space complexity: O(n)
*/
