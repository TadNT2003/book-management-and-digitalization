type user = {
  // id: string,
  username: string,
  password: string,
}
export const Users:Array<user> = [
  {
    // id: '01',
    username: 'Dat',
    password: '012345678'
  },
  {
    // id: '02',
    username: 'Cuong',
    password: '987654321'
  },
]


export function saltAndHashPassword(password: string) {
  return password
}

export function getUserFromDb(username: string, password: string) {
  // console.log("User data: ", Users)
  // console.log("User 01 data: ", Users[0])
  const attempLoginUser = Users.filter((user) => {
    if ((user.username === username) && (user.password === password)) {
      return user
    }
  })
  // console.log("Attemp user login in mockUsers: ", attempLoginUser)
  if (attempLoginUser.length == 0) return null
  else {
    // console.log("User in mockUsers: ", attempLoginUser[0])
    return attempLoginUser[0]
  }
}
