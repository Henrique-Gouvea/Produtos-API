const sinnon = require('sinnon');
const { expect } = require('chai');

const connection = require('../../../../helpers/connection')
const models = require('../../../../models')
const { allProducts } = require('../../../mocks')

describe('Test getAllProducts Models', () => {
  beforeEach(async () => { 
    await sinon.stub(connection, 'execute').resolves(allProducts);
  });

  afterEach(async () => {
    await connection.execute.restore();
  });

  it('check if its a Object', async () => {
    const data = await models.getAllProducts();
    expect(data).to.be.a('object');
  });
})