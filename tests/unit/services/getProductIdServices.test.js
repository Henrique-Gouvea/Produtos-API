const { expect } = require('chai');
const sinon = require('sinon');

const models = require('../../../models');
const services = require('../../../services');

const { allProducts } = require('../../mocks');

describe('Verify function getAllProducts services', () => {

  const res = {};
  const req = {};

  beforeEach(async () => {
    sinon.stub(models, 'getProduct').resolves([allProducts[0]]);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterEach(async () => {
    models.getProduct.restore();
  });

  it('verify return array', async () => {
    const products = await services.getProduct('1');
    expect(products).to.be.an('array')
  });

  it('verify return in position one a object ', async () => {
    const products = await services.getProduct('1');
    expect(products).to.deep.equal([allProducts[0]]);
  });
});