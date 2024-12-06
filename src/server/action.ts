export async function serverTest() {
    const data = await fetch('');
    const response = await data.json()
  return (
    response
  )
}

export async function loginUser(username: string, password: string) {
    const data = await fetch(`http://localhost:8080/api/users/login?userName=${username}&password=${password}`, {
      method: "POST",
    })
    const response = data.json()
    return (
      response
    )
}

export async function registerUser(formData: FormData) {
    const username = formData.get("username")
    const password = formData.get("password")
    const email = formData.get("email")
    const dob = formData.get("dob")
    const data = await fetch('http://localhost:8080/api/users/createUsers', {
      method: "POST",
      body: JSON.stringify({
        userName: username,
        email: email,
        password: password,
        dob: dob,
        readingHistory: []
      })
    })
    const response = await data.json()
    console.log(response)
}

export async function getUserMetaInfo() {
  
}

export async function getBookForHome() {
  
}

export async function getBookById() {
  
}

export async function getBookContentByPage() {
  
}

export async function registerNewBook() {
  
}

export async function editOldBook() {
  
}