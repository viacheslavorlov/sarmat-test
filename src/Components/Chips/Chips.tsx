import {memo, useRef, useState} from 'react';
import {classNames} from '../../helpers/classNames';
import cls from './Chips.module.css';
import {ChipsType} from "../../types/ChipsType.ts";

interface ChipsProps {
    className?: string;
    chips: ChipsType;
}

export const Chips = memo((props: ChipsProps) => {
    const {
        className, chips
    } = props;
    const ref = useRef<HTMLDivElement>(null);

    const [isSelected, setIsSelected] = useState(false);

    const selected = isSelected ? cls.selected : '';

    const onSelectChips = () => {
        setIsSelected(prevState => !prevState);
    };

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
