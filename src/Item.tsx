import React from 'react';


type ItemProps = {
    el:string;
    index: number;

onDelete:(index: number) => void;
};


const Item: React.FC<ItemProps> = ({el,index, onDelete}) => {
    return ( <div>{el}
    <button onClick={() => onDelete(index)}> Удалить</button>
    </div>);
};
export default Item;




