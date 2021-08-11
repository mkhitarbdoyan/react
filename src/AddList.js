function AddList({ lists }) {
    return (
        <div>{
            lists.map((list) => {
                return (
                    <div kay={list}>
                        {list}
                    </div>
                )
            })
        }
        </div>
    )
}
export default AddList;