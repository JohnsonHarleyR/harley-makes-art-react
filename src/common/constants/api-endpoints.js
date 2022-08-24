const apiEndPoints = {

  inventory: {
      // GET
      GET_INVENTORY_DATA: '/Inventory/GetInventoryData',
      // POST
      UPDATE_INVENTORY_DATA: '/Inventory/UpdateInventoryData',
  },

  user: {
      // GET
      GET_USER_ACCOUNT_INFO: '/User/GetUserAccountInfo',
      // POST
      CREATE_USER_ACCOUNT: '/User/CreateUserAccount',
      UPDATE_USER_ACCOUNT: '/User/UpdateUserAccount',
  }

}

export default apiEndPoints;