const permute = function (nums) {
  if (nums.length === 1) return [nums]

  let res = []
  for (let i = 0; i < nums.length; i++) {
    let left = nums.shift()
    let perms = permute(nums)
    res = [...res, ...perms.map((perm) => [left, ...perm])]
    nums.push(left)
  }
  return res
}
export default permute
