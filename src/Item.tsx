import React from 'react';
interface Todo {
    id: number;
    el: string;
}

type ItemProps = {
    todo: Todo;
onDelete:(id: number) => void;
};


const Item: React.FC<ItemProps> = ({todo, onDelete,}) => 
    {
    return ( <div>
    <button>{todo.el}</button>
    <button onClick={() => onDelete(todo.id)}> Удалить</button>
    </div>);
};
export default Item;




