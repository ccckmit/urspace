import marked from 'marked'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

export function toHtml (md) {
  return marked(md)
}

export function textToHtml (text) {
  return text.replace(/^#{1,6}\s*(.*)\n/, '<h1>$1</h1>')
    .replace('\n', '<br/>')
    .replace(/(http:\/\/[\w./]+)/, '<a href="/view/$1">$1</a>')
}

export default { toHtml, textToHtml }
