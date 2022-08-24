
//#region User

import { hashPasswordToSimulate } from "./api-simulate"

//#region Fake User Data

const USER_DATA_LAURA = {
  userId: 3,
  firstName: 'Laura',
  lastName: 'Fairview',
  image: '',
  email: 'laura_25@example.com',
  hashedPassword: hashPasswordToSimulate('password'),
}

//#endregion

export const ALL_USER_DATA = [
  USER_DATA_LAURA,
]

//#endregion