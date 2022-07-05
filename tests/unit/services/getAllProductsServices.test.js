const { expect } = require('chai');
const sinon = require('sinon');

const models = require('../../../models');
const services = require('../../../services');

const { allProducts } = require('../../mocks');

describe('Verify function getAllProducts services', () => {

  const res = {};
  const req = {};

  beforeEach(async () => {
    sinon.stub(models, 'getAllProducts').resolves(allProducts);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterEach(async () => {
    models.getAllProducts.restore();
  });

  it('verify return array', async () => {
    const products = await services.getAllProducts();
    expect(products).to.be.an('array')
  });

  it('verify return in position one a object ', async () => {
    const products = await services.getAllProducts();
    expect(products[0]).to.be.a('object')
  });
});