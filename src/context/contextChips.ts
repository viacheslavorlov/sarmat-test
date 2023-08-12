import {createContext} from "react";

interface IChipsContentValue {
    getListWidth: () => number
    getChildrenWidth: () => number[];
    setListWidth: (num: number) => void;
    addChildrenWidth: (num: number) => void;
}

let listWidth = 104;
let childrenWidth: number[] = []
export const chipsContentValue: IChipsContentValue = {
    getListWidth: function () {
        return listWidth;
    },
    getChildrenWidth: function () {
        return childrenWidth;
    },
    addChildrenWidth: function (num) {
        childrenWidth.push(num)
    },
    setListWidth: function (numb) {
        listWidth = numb
    }
}

export const ContextChips = createContext(chipsContentValue)
