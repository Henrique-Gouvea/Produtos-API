const sinon = require('sinon');
const { expect } = require('chai');

const controllers = require('../../../../controllers');
const services = require('../../../../services');

const { allProducts } = require('../../../mocks');

describe('Test getById controllers', () => {

  const res = {};
  const req = {};

  beforeEach(async () => {
    req.params = '1';
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await sinon.stub(services, 'getProduct').resolves([allProducts[0]]);
  });

  afterEach(async () => {
    await services.getProduct.restore();
  });

  it('verify return status 200', async () => {
    await controllers.getProduct(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });

  it('verify return a json', async () => {
    await controllers.getProduct(req, res);
    expect(res.json.calledWith(sinon.match.object)).to.be.equal(true);
  });
});