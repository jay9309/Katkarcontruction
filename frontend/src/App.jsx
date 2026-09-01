import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import WhatsAppButton from "./components/WhatsAppButton";

import {
    AuthProvider
} from "./context/AuthContext";


function App() {

    return (

        <AuthProvider>

            <AppRoutes />
            <WhatsAppButton />

        </AuthProvider>
    );
}


export default App;