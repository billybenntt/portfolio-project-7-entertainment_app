// Add Current User To Local Storage
const addUserToLocalStorage = (user: object) => {
  localStorage.setItem('user', JSON.stringify(user))
}

// Remove Current User from Local Storage
const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
}

// Get User From Local Storage
const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')!) || null
}

export { addUserToLocalStorage, removeUserFromLocalStorage, getUserFromLocalStorage }