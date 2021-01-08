const poemsList = require('../data/classic_poems.json');

const getPoems = (req, res) => {
  const { q, wordString, wordStringPoem } = req.query;
  if (!q && !wordString && !wordStringPoem) {
    return res.send(poemsList);
  }
  const foundPoems = poemsList.reduce((sum, item) => {
    const author = item.poet_id;
    const title = item.title;
    const text = item.content;
    const hasText = text.includes(q);
    if (!hasText) {
      return sum;
    }
    if (wordString) {
      const word = text.match(q);
      const lines = text.split(/\n/).filter(line => line.includes(q));
      return sum.concat({ author, title, searchResult: {word, poemString: lines} });
    }
    if (wordStringPoem) {
      const word = text.match(q);
      const lines = text.split(/\n/).filter(line => line.includes(q));
      const poem = text.split(/\n/);
      return sum.concat({ author, title, searchResult: {word, poemString: lines, poem} });
    }
    return sum.concat(item);
  }, []);
  res.send(foundPoems);
};

module.exports = { getPoems };