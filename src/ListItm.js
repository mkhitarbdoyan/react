function ListItem({ list,onDelite}) {
    return (
        <div>
            <lable>
                {list}
                <button onClick={() => {
                    onDelite(list);
                }}>X</button>
            </lable>
        </div>


    )
}

export default ListItem;