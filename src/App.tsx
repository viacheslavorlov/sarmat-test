import cls from './App.module.css';
import {ChipsList} from './Components/ChipsList/ChipsList';
import {fakeChips} from './fakeChips/fakeChips';
import {ChipsListVar2} from "./Components/ChipsListVar2/ChipsListVar2.tsx";
import {chipsContentValue, ContextChips} from "./context/contextChips.ts";

function App() {

    return (
        <div className={cls.App}>
            <ChipsList chipsItems={fakeChips}/>
            <ContextChips.Provider value={chipsContentValue}>
                <ChipsListVar2 chipses={fakeChips}/>
            </ContextChips.Provider>
        </div>
    );
}

export default App;
