import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../firebase'

const App = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const Token = await result.user.getIdToken()
      // const data =  await login(Token);
      console.log(`data: ${Token}`)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div>
      <button
        onClick={handleLogin}
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Continue with Google
      </button>
    </div>
  )
}

export default App
