const { expect } = require('chai');
const sinon = require('sinon');

const controllers = require('../../../../controllers');
const services = require('../../../../services');

const { allProducts } = require('../../../mocks');

describe('Verify function getAllProducts controllers', () => {

    const res = {};
    const req = {};

    beforeEach(async () => {
      sinon.stub(services, 'getAllProducts').resolves(allProducts);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    afterEach(async () => {
      services.getAllProducts.restore();
    });

    it('verify return status 200', async () => {
      await controllers.getAllProducts(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('verify return a json ', async () => {
      await controllers.getAllProducts(req, res);
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
});