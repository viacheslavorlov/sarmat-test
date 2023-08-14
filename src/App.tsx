import cls from './App.module.css';
import {ChipsList} from './Components/ChipsList/ChipsList';
import {fakeChips} from './fakeChips/fakeChips';
import {ChipsListVar2} from "./Components/ChipsListVar2/ChipsListVar2.tsx";

function App() {

    return (
        <div className={cls.App}>
            <h1>Первый вариант</h1>
            <ChipsList chipsItems={fakeChips}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Второй вариант</h1>
            <ChipsListVar2 chipses={fakeChips}/>
        </div>
    );
}

export default App;
