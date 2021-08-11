import { useState } from "react";
import AddList from "./AddList";
import ListForm from "./ListForm";

function List() {
    const [lists, setLists] = useState([1, 2, 3, 4])
    

    return (
        <div>
            <ListForm onAdd={(text) => {
                setLists([
                  ... lists, text
               ]) 
            }}/>
            <AddList lists={lists}/>
        </div>
    )

}
export default List;