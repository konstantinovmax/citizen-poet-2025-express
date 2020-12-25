const poemsList = require('../data/classic_poems.json');

const getPoems = (req, res) => {
  const { q, wordAndString } = req.query;
  if (!q && !wordAndString) {
    return res.send(poemsList);
  };
  const foundPoems = poemsList.reduce((sum, item) => {
    const author = item.poet_id;
    const title = item.title;
    const text = item.content;
    const hasText = text.includes(q);
    if (!hasText) {
      return sum;
    }
    if (wordAndString) {
      const word = text.match(q);
      const lines = text.split(/\n/).filter(line => line.includes(q));
      return sum.concat({ author, title, searchResult: {word, poemString: lines} });
    }
    return sum.concat(item);
  }, [])
  res.send(foundPoems);
}

module.exports = { getPoems }