module.exports = {
  "name": "did-production",
  "didMethods": [
    require('../implementations/did-example-didwg.json'),
    require('../implementations/did-key-2018-db.json'),
    require('../implementations/did-key-2020-db.json'),
    require('../implementations/did-3-2021-3box-labs.json'),
    require('../implementations/did-ethr-2021-consensys-mesh.json')
  ]
}