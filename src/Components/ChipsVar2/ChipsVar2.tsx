import {memo, useContext, useLayoutEffect, useRef, useState} from 'react';
import {classNames} from '../../helpers/classNames';
import cls from './Chips.module.css';
import {ChipsType} from "../../types/ChipsType.ts";
import {ContextChips} from "../../context/contextChips.ts";

interface ChipsProps {
    className?: string;
    chips: ChipsType;
}

export const ChipsVar2 = memo((props: ChipsProps) => {
    const {
        className, chips
    } = props;
    const ref = useRef<HTMLDivElement>(null);
    const {addChildrenWidth} = useContext(ContextChips)

    const [isSelected, setIsSelected] = useState(false);

    const selected = isSelected ? cls.selected : '';

    const onSelectChips = () => {
        setIsSelected(prevState => !prevState);
    };
    useLayoutEffect(() => {
        if (ref.current) {
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
