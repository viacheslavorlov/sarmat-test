import {memo, useRef, useState} from 'react';
import {classNames} from '../../helpers/classNames';
import cls from './Chips.module.css';

interface ChipsProps {
    className?: string;
    chips: string;
}

export const Chips = memo((props: ChipsProps) => {
    const {
        className, chips
    } = props;
    const ref = useRef<HTMLDivElement>();

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
            {chips}
        </div>
    );
});
