import {classNames} from "../../helpers/classNames.ts";
import cls from './ChipsListVar2.module.css';
import {memo, useLayoutEffect, useRef, useState} from 'react';
import {ChipsType} from "../../types/ChipsType.ts";
import {ChipsVar2} from "../ChipsVar2/ChipsVar2.tsx";
import treeDots from "../../assets/three-horizontal-buttons-svgrepo-com.svg";

interface ChipsListVar2Props {
    className?: string;
    chipses: ChipsType[];
}

export const ChipsListVar2 = memo((props: ChipsListVar2Props) => {
    const {
        className, chipses
    } = props;

    const refList = useRef<HTMLDivElement>(null);
    const [firstInvisibleChips, setFirstInvisibleChips] = useState(chipses.length);
    const [visibleChildren, setVisibleChildren] = useState<ChipsType[]>([]);
    const [hiddenChildren, setHiddenChildren] = useState<ChipsType[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const [listWidth, setListWidth] = useState(0);
    const [childrenWidth, setChildrenWidth] = useState<number[]>([]);

    useLayoutEffect(() => {
        const setChips = () => {
            if (refList.current) {
                setListWidth(refList.current.offsetWidth);
                let contentWidth = 100;
                for (let i = 0; i < childrenWidth.length; i++) {
                    if (listWidth > contentWidth + childrenWidth[i]) {
                        contentWidth += (childrenWidth[i] + 8);
                    } else {
                        setFirstInvisibleChips(i);
                        break;
                    }
                }
            }
            setVisibleChildren(chipses.slice(0, firstInvisibleChips));
            setHiddenChildren(chipses.slice(firstInvisibleChips));
        };

        setChips();
        window.addEventListener('resize', setChips);

        return () => {
            window.removeEventListener('resize', setChips);
        };
    }, [chipses, firstInvisibleChips, listWidth, childrenWidth]);

    const addChildrenWidth = (num: number) => {
        setChildrenWidth(prevWidths => [...prevWidths, num]);
    };

    return (
        <div className={cls.container}>
            <div ref={refList} className={classNames(cls.ChipsList, className)}>
                {visibleChildren.map((chip, i) => (
                    <ChipsVar2
                        key={`chips-${i}`}
                        chips={chip}
                        addChildrenWidth={addChildrenWidth}
                    />
                ))}
                <button
                    onClick={() => setIsVisible(prevState => !prevState)}
                    className={classNames(cls.PopupButton, hiddenChildren.length <= 0 ? cls.disabled : '')}
                    disabled={hiddenChildren.length === 0}
                >
                    <img src={treeDots} alt="button" className={cls.treeDots} />
                </button>
            </div>
            {isVisible && hiddenChildren.length && (
                <div className={cls.dropDown}>
                    <div className={cls.dropDownInner}>
                        {hiddenChildren.map((chip, i) => (
                            <ChipsVar2
                                key={`chips-${i}`}
                                chips={chip}
                                addChildrenWidth={addChildrenWidth}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
});