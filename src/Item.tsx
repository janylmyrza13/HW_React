import React from 'react';

type ItemProps = {
    el:string;
    index: string;
};

const Item: React.FC<ItemProps> = ({el}) => {
    return <div>{el}</div>;
};
export default Item;




