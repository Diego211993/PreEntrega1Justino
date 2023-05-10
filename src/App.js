import { LoginContext, LoginProvider } from "./components/Context/LoginContext";
import { CartProvider } from "./components/Context/CartContext";
import AppRouter from "./routes/AppRouter";





function App() {

      

  return (
      <LoginProvider>
          <CartProvider>
            <AppRouter/>
          </CartProvider>
      </LoginProvider>
    
    
  )
}

export default App;

