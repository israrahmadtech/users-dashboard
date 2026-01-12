import { Toaster } from "react-hot-toast"
import UserList from "./pages/UserList/UserList"

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <UserList />
    </>
  )
}

export default App