import { urspace } from './dbDataSetup'

let dictionary = {}

export function init (text) {
  dictionary = JSON.parse(text)
}

export function mt (e, to) {
  const word = dictionary[e.toLowerCase()] || {}
  return word[to] || e
}

export default { mt: mt }

init(urspace.dictionaryText)
