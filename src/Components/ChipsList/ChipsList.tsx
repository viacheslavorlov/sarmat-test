import {useEffect, useRef, useState} from 'react';
import treeDots from '../../assets/three-horizontal-buttons-svgrepo-com.svg';
import {classNames} from '../../helpers/classNames';
import {Chips} from '../Chips/Chips';
import cls from './ChipsList.module.css';

interface ChipsListProps {
    className?: string;
    chipsItems: string[];
}

export const ChipsList = ({chipsItems, className}: ChipsListProps) => {
    const [visibleChildren, setVisibleChildren] = useState([]);
    const [hiddenChildren, setHiddenChildren] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const parentRef = useRef<HTMLDivElement>();
    const elementWidth = parentRef.current?.offsetWidth;

    const sliceVisible = Math.floor((elementWidth - 104) / 104); // рассчитано исходя из длины одного чипса

    const onChangeVisible = () => {
        setIsVisible(prevState => !prevState);
    };

    const setChips = () => {
        setVisibleChildren(chipsItems.slice(0, sliceVisible));
        setHiddenChildren(chipsItems.slice(sliceVisible));
    };

    useEffect(() => {
        setChips();
    }, [chipsItems, sliceVisible]);

    useEffect(() => {
        window.addEventListener('resize', setChips)
        return () => {
            window.removeEventListener('resize',setChips);
        };
    }, [chipsItems, sliceVisible]);

    return (
        <div className={cls.container}>
            <div ref={parentRef} className={classNames(cls.ChipsList, className)}>
                {visibleChildren.map((chip) => (
                    <Chips key={chip} chips={chip}/>
                ))}
                <button
                    onClick={onChangeVisible}
                    className={cls.PopupButton}
                    disabled={hiddenChildren.length === 0}
                >
                    <img src={treeDots} alt="button" className={cls.treeDots}/>
                </button>
            </div>
            {
                isVisible && <div className={cls.dropDown}>
					<div className={cls.dropDownInner}>
                        {hiddenChildren.map((chip) => (
                            <Chips key={chip} chips={chip}/>
                        ))}
					</div>
				
				</div>
            }
        </div>
    );
};
