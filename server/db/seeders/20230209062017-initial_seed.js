const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Alex',
          hashpass: bcrypt.hashSync('123', 5),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Bob',
          hashpass: bcrypt.hashSync('123', 5),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Posts',
      posts.map((post) => ({
        authorId: Math.floor(Math.random() * 2) + 1,
        // title: post.title,
        body: post.body,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
