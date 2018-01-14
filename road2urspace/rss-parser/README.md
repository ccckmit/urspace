# RSS Parser

參考： [6大Node.js RSS Feed解析器](http://geek100.com/2960.html)


```
<script src="/bower_components/rss-parser/dist/rss-parser.js"></script>
<script>
RSSParser.parseURL('https://www.reddit.com/.rss', function(err, parsed) {
  console.log(parsed.feed.title);
  parsed.feed.entries.forEach(function(entry) {
    console.log(entry.title + ':' + entry.link);
  })
})
</script>
```