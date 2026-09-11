/**
 * Module for console-input.'
 * 
 * @version 1.0.0
 */

import readline from 'node:readline'

const lineReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

/**
 * Gets a line for the console.
 * 
 * @param {string} question A question to ask.
 * @returns {Promise<string>} Promise of a string.
 */
export const getLine = question => {
  return new Promise(resolve => {
    lineReader.question(question, answer => {
      resolve(answer)
    })
  })
}

/**
 * Closes the line reader.
 */
export const closeReader = () => {
  lineReader.close()
}