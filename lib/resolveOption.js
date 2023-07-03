const program = require('commander')

module.exports = flag => {
  const targetOption = program.options.find(({ long }) => long === flag)
  return targetOption || { description: `See ${flag}` }
}