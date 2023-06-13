const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = "http://localhost:1225"

async function main() {
  // TODO: how do we prove to the server we're on the nice list?

  const merkleTree = new MerkleTree(niceList)

  const root = merkleTree.getRoot()
  const name = "Daryle Tan"
  const index = niceList.findIndex((d) => d === name)
  const proof = merkleTree.getProof(index)

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    name: name,
    proof: proof,
    root: root,
  })

  // console.log({ gift })
  // console.log(verifyProof(proof, name, root))
}

main();