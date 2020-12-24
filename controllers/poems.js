const poemsList = require('../data/classic_poems.json');

const getPoems = (req, res) => {
  const { q, onlyLines } = req.query;
  if (!q && !onlyLines) {
    return res.send(poemsList);
  };
  const foundPoems = poemsList.reduce((sum, item) => {
    const poet = item.poet_id;
    const title = item.title;
    const text = item.content;
    const hasText = text.includes(q);
    if (!hasText) {
      return sum;
    }
    if (onlyLines) {
      const lines = text.split(/\n/).filter(line => line.includes(q));
      return sum.concat({ poet, title, text: lines });
    }
    return sum.concat(item);
  }, [])
  res.send(foundPoems);
}

module.exports = { getPoems }