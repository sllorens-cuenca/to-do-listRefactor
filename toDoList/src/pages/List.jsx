import ListItem from "../components/listItem";



function List(props) {
    console.log(props)
    return (
        <div  className="page">
            {props.tasksArr.map((listObj) => {
                return (
                    <ListItem listDetails={listObj} callbackToDelete={props.callbackToDelete} />

                )

                //    {props.moviesArr.map((movieObj) => {
                //     return (
                //         <MovieSummary
                //             key={movieObj.id}
                //             movieDetails={movieObj}
                //             callbackToDelete={props.callbackToDelete}
                //         />)
                // })}

            })}
        </div>
    )

}

export default List;