const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225

const app = express()
app.use(express.json())

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT =
  "1a0eaf7118aafbc1273ea9d1f4485a8eb261254b8dfc06a6ac9ecc82a95a55c2"

app.post("/gift", (req, res) => {
  // grab the parameters from the front-end here

  const { name, proof, root } = req.body
  console.log(body)

  // TODO: prove that a name is in the list
  const isInTheList = verifyProof(name, proof, root)
  if (isInTheList) {
    res.send("You got a toy robot!")
  } else {
    console.log(isInTheList)
    res.send("You are not on the list :(")
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
