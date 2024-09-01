import React from 'react';
import '../App.css'


interface IBlockProps {
    value? : string | null;
    onClick? : () => void
}

const Block : React.FC<IBlockProps> = (props) => {
    return (
        <div onClick={props.onClick} className="block">{props.value}
        </div>
    );
}
export default Block;