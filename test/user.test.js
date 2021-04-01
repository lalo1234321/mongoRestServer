const app = require('../src/app.js');


test('Should return a list of users', async () => {
    await request(app).get('/user')
        .expect(200);
});