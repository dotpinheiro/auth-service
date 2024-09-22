'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const actions = await queryInterface.bulkInsert('abac_actions', [
      { name: 'LIST' },
      { name: 'CREATE' },
      { name: 'UPDATE' },
      { name: 'DELETE' }
    ])

    const resources = await queryInterface.bulkInsert('abac_resources', [
      { id: 1, name: 'USERS' }
    ])

    const resourceAttributes = await queryInterface.bulkInsert('abac_resource_attributes', [
      { name: 'PROFILE', resourceId: 1 },
      { name: 'BILLING', resourceId: 1 },
    ])

    const userAttributes = await queryInterface.bulkInsert('abac_user_attributes', [
      { name: 'ADMIN' },
    ])

    const policies = await queryInterface.bulkInsert('abac_access_policies', [
      { id: 1, userAttributeName: 'ADMIN', resourceAttributeName: 'PROFILE', actionName: 'LIST'}
    ])

    const abac = await queryInterface.bulkInsert('abac_users', [
      { userUuid: "9ce31c9a-2e66-4002-8071-91809cd64044", accessPolicyId: 1 }
    ])


  },

  async down (queryInterface, Sequelize) {

  }
};
