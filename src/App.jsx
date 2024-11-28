import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegistrationForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/Login/Login';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import CreateRecipe from './components/CreateRecipe/CreateRecipe'; // Ensure correct import
import ViewData from './components/VIewData/ViewData';
import Footer from './components/Footer/Footer';
import Updatedata from './components/updateData/updatedata';
import withLogin from './components/HocLogin/HocLogin';
import RecipeDetails from './components/ReadMoreData/ReadMoreData';
import { autoLoginAction } from './service/Action/loginRegistrarAction';
import { useEffect } from 'react';


function App() {
    const ProtectedViewData = withLogin(ViewData);

    const ProtectedUpdatedata = withLogin(Updatedata);

    const ProtectedCreateRecipe = withLogin(CreateRecipe);

    const ProtectedRecipeDetails = withLogin(RecipeDetails);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(autoLoginAction());
      }, [dispatch]);
        
      
    return (
        <>
            <Header />
            <Routes>
                <Route path='/RegistrationForm' element={<RegistrationForm />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/' element={<Home />} />
                <Route path="/recipe/:id" element={<ProtectedRecipeDetails />} />
                <Route path='/createrecipe' element={<ProtectedCreateRecipe />} />
                <Route path='/viewrecipe' element={<ProtectedViewData />} />
                <Route path='/updaterecipe' element={<ProtectedUpdatedata />} />
                <Route path='*' element={<h1>404 Error</h1>} />  
            </Routes>
            <Footer />
        </>
    );
}

export default App;



