export default function NumberList(props){
    //const {numbers} = props
    const numbers = [1,2,3,4,5]

    const todoLists = [
        { id: 1, todo: '할일 1' },
        { id: 2, todo: '할일 2' },
        { id: 3, todo: '할일 3' },
        { id: 4, todo: '할일 4' }
    ];

    
    const listItems = numbers.map((number ,index) =>
    <li key={index}> {number}</li>
    )

    const itemLists = todoLists.map((todoList) =>
    <li key={todoList.id}> {todoList.todo}</li>
    )

    const foos = todoLists.map((foo, index) =>
    <li key={index}> {foo.todo}</li>
    )


    return(
        <>
        <ul>{listItems}</ul>
        <ul>{itemLists}</ul>
        <ul>{foos}</ul>
        </>
    )
}