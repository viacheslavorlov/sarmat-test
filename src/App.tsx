import cls from './App.module.css';
import {ChipsList} from './Components/ChipsList/ChipsList';
import {fakeChips} from './fakeChips/fakeChips';

function App() {

    return (
        <div className={cls.App}>
            <ChipsList chipsItems={fakeChips}/>
            <ChipsList chipsItems={fakeChips}/>
        </div>
    );
}

export default App;
