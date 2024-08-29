
const hobbies = [
    { title: "Utvikling", isFavore: true, upVote: 0, id: 1},
    { title: "Gaming", isFavore: false, upVote: 0, id: 2}
]

export default function MyHobbiesTest2() {

    const listItems = hobbies.map(hobby =>
        <li key={hobby.id}>
            {hobby.title}
        </li>
    )


    return (
        <>
            <h1>Tobias Johansen</h1>

            <ul>{listItems}</ul>
        </>
    )
}