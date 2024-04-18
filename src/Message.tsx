
function Message(){
    //JSX: JavaScript XML

    const name = 'Shaz';
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello world</h1> //ex:empty string
}

export default Message;