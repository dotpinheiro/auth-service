'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const roles = await queryInterface.bulkInsert('rbac_roles', [
      { id: 1, name: 'ADMIN' }
    ])
    const permissions = await queryInterface.bulkInsert('rbac_permissions', [
      { id: 1, name: 'LIST_USERS' },
      { id: 2, name: 'CREATE_USERS' },
      { id: 3, name: 'UPDATE_USERS' },
      { id: 4, name: 'DELETE_USERS' }
    ])
    await queryInterface.bulkInsert('rbac_role_permissions', [
      { roleId: 1, permissionId: 1 },
      { roleId: 1, permissionId: 2  },
      { roleId: 1, permissionId: 3  },
      { roleId: 1, permissionId: 4  },
    ])

    const users = await queryInterface.bulkInsert('users', [
      {
        uuid: "9ce31c9a-2e66-4002-8071-91809cd64044",
        name: "Administrator",
        username: "admin",
        email: "admin@admin.com",
        password: "admin123"
      }
    ])

    await queryInterface.bulkInsert('rbac_users', [
      { rbacRoleId: 1, userUuid: "9ce31c9a-2e66-4002-8071-91809cd64044", name: "name" }
    ])
  },

  async down (queryInterface, Sequelize) {

  }
};
