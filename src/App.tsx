import './styles/style.scss'
import Header from './components/Header/Header';
import AppRouter from './components/AppRouter/AppRouter';
import Wrapper from './UI/Wrapper/Wrapper';
import useOrderStore from './store/orderStore';
import useSingleSushiStore from './store/singleSushIStore';

function App() {

    const onOrderPage = useOrderStore(state => state.onOrderPage);
    const onSinglePage = useSingleSushiStore(state => state.onSinglePage);

    return (
        <Wrapper>
            <Header type={onOrderPage ? 'order' : onSinglePage ? 'single' : 'default'} />
            <AppRouter />
        </Wrapper>
    );
}

export default App;
