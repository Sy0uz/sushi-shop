import React from 'react';
import './styles/style.scss'
import Header from './components/Header/Header';
import AppRouter from './components/AppRouter';
import Wrapper from './components/Wrapper';

function App() {
    return (
        <Wrapper>
            <Header />
            <AppRouter />
        </Wrapper>
    );
}

export default App;
