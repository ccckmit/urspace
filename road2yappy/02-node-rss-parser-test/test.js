var parser = require('rss-parser');

parser.parseURL('https://www.reddit.com/.rss', function(err, parsed) {
  console.log(parsed.feed.title);
  parsed.feed.entries.forEach(function(entry) {
    console.log(entry.title + ':' + entry.link);
  })
})