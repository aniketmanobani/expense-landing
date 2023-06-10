import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Privacy from './pages/PrivacyPolicy';
import DeleteAccountForm from './pages/DeleteAccount';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/p/privacy-policy' element={<Privacy />} />
        <Route path='/user/delete-account' element={<DeleteAccountForm />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
