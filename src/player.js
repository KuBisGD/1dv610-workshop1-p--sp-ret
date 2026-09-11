/**
 * 
 */

/**
 * 
 */
class Player {
  /**
   * @type {string}
   */
  #name

  /**
   * @type {number}
   */
  #points

  /**
   * Create a new quiz player.
   * 
   * @param {string} name The players name.
   */
  constructor (name) {
    this.#name = name.trim()
    this.#points = 0
  }

  /**
   * Gets the players name.
   * 
   * @returns {string} The name.
   */
  getName () {
    return this.#name
  }

  /**
   * Adds points to the player.
   * 
   * @param {number} points Number of points to add
   */
  addPoints (points) {
    this.#points += points
  }

  /**
   * Gets tha players points.
   * 
   * @returns {number} The players current points.
   */
  getPoints () {
    return this.#points
  }
}

export default Player
