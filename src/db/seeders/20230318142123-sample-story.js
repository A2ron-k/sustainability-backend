/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

module.exports = {
  up: async queryInterface => {
    return await queryInterface.bulkInsert('stories', [
      {
        name: 'Story 1',
        description: 'Story 1 description',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async queryInterface => {
    return await queryInterface.bulkDelete('stories', null, {});
  },
};
