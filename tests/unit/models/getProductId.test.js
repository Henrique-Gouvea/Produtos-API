const sinon = require('sinon');
const { expect } = require('chai');

const { allProducts } = require('../../mocks');
const models = require('../../../models')
const connection = require('../../../helpers/connection')

describe('Test getProduct Models for Id', () => {

  beforeEach(async () => {
     await sinon.stub(connection, 'execute').resolves([allProducts[0]]);
  });

  afterEach(async () => {
    await connection.execute.restore();
  });

  it('check if its a Object and equal a mock', async () => {
    const data = await models.getProduct('1');
    expect(data).to.be.a('object');
    expect(data).to.deep.equal(allProducts[0]);
  });

})