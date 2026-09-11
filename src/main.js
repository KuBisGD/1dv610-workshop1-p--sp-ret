/**
 * Main module.
 */

import { getLine } from './console-input.js'

const main = async () => {
  console.log('På spåret')

  const inp = await getLine('test input:')
  console.log(inp)
}

main()
