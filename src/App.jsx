import { Toaster } from "react-hot-toast"
import UserList from "./pages/UserList/UserList"
import { Provider } from "react-redux"
import { store } from "./store/store"

function App() {
  return (
    <>
      <Provider store={store}>
        <Toaster position="top-right" reverseOrder={false} />
        <UserList />
      </Provider>
    </>
  )
}

export default App