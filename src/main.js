/**
 * Main module.
 */

import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { getLine } from './console-input.js'
import Game from './game.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const main = async () => {
  const game = new Game(path.join(__dirname, 'questions.json'))
  game.play()
}

main()
