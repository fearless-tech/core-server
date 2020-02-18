const request = require('supertest')
const app = require('../app')

describe('app', () => {
  describe('/ping', () => {
    it('should respond to a basic GET request', done => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /application\/json/, done)
    })
  })
})
