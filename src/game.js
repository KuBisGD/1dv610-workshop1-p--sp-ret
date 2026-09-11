import { readFile } from 'node:fs/promises'
import { getLine } from './console-input.js'
import Player from './player.js'
import playerManager from './playerManager.js'

class Game {
  #path
  #questions
  #players

  constructor(path) {
    this.#path = path
    this.#players = new playerManager()
  }

  async loadQuestions() {
    const data = await readFile(this.#path, 'utf8')
    this.#questions = JSON.parse(data).questions
    return this.#questions
  }

  async loadPlayers() {
    let loading = true
    do {
      const input = await getLine('Enter a name (nothing to start playing):')
      if (input.trim() === '') {
        // Kolla att det finns minst två spelare
        return
      }
      this.#players.addPlayer(new Player(input)) 
    } while (loading) 
  }

  async play() {
    await this.loadQuestions()
    console.log(`Loaded ${this.#questions.length} questions.`)
    await this.loadPlayers()
    console.log(`Loaded ${this.#players.getPlayerCount()} players.`)
    this.runQuestions(this.#questions[0].question, this.#questions[0].options, this.#questions[0].hints)
  }

  /**
   * 
   * @param {string} question 
   * @param {string[]} options 
   * @param {string[]} hints 
   */
  runQuestions (question, options, hints) {
    console.log(`Question: ${question}`)
    for (let i = 0; i < options.length; i++) {
      console.log(`Option ${i + 1}: ${options[i]}`)
    }
  }

}

export default Game