class playerManager {

  #players = []
  #internalIterator = 0

  addPlayer(player) {
    this.#players.push(player)
  }

  getNextPlayer() {
    if (this.#internalIterator >= this.#players.length) {
      this.#internalIterator = 0
    }
    return this.#players[this.#internalIterator++]
  }

  getPlayerCount () {
    return this.#players.length
  }
}

export default playerManager