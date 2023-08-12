import {memo, useLayoutEffect, useRef, useState} from "react";
import {ChipsType} from "../../types/ChipsType.ts";
import {classNames} from "../../helpers/classNames.ts";
import cls from './Chips.module.css'

interface ChipsProps {
    className?: string;
    chips: ChipsType;
    addChildrenWidth?: (num: number) => void;
}

export const ChipsVar2 = memo((props: ChipsProps) => {
    const {
        className, chips, addChildrenWidth
    } = props;
    const ref = useRef<HTMLDivElement>(null);

    const [isSelected, setIsSelected] = useState(false);

    const selected = isSelected ? cls.selected : '';

    const onSelectChips = () => {
        setIsSelected(prevState => !prevState);
    };
    useLayoutEffect(() => {
        if (ref.current && addChildrenWidth) {
            addChildrenWidth(ref.current.offsetWidth)
        }
    }, [])

    return (
        <div
            ref={ref}
            onClick={onSelectChips}
            className={classNames(cls.Chips, className, selected)}
        >
            {chips.name}
        </div>
    );
});