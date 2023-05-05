import './styles/style.scss'
import Header from './components/Header/Header';
import AppRouter from './components/AppRouter';
import Wrapper from './components/Wrapper';
import useOrderStore from './store/orderStore';

function App() {

    const onOrderPage = useOrderStore(state => state.onOrderPage);

    return (
        <Wrapper>
            <Header type={onOrderPage ? 'short' : 'default'} />
            <AppRouter />
        </Wrapper>
    );
}

export default App;
