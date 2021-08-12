import ListItem from './ListItm'


function AddList({ lists,onDelete }) {
    return (
        <div>{
            lists.map((list,i) => {
                return (
                    // // <div kay={list}>
                    //     {/* {list} */}
                    //     {/* <button onClick={}>X</button> */}
                    // {/* </div> */}

                    <ListItem
                        list={list}
                        onDelite={onDelete}
                        key={i} />
                )
            })
        }
        </div>
    )
}
export default AddList;