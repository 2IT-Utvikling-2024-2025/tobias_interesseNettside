import { useState } from 'react';
import './MyHobbiesTest.css'

// DEL 1 - skriv navnet i en variabel og lag en html header i return statement med Mine Hobbier og class header
let name = "Tobias Johansen"

// DEL 2 - Lag en liste med hobbier + listItems const med className/css og hobby.title



const hobbies = [
    { title: 'Utvikling', isFavorite: true, upVote: 0, id: 1},
    { title: 'Gaming', isFavorite: false, upVote: 0, id: 2},
    { title: 'Film og TV', isFavorite: false, upVote: 0, id: 3},
    { title: 'Sjakk', isFavorite: false, upVote: 0, id: 4},
]

// Del 3 - Lag en Vote knapp med Button onClick, HandleClick, og useState

export default function MyHobbiesTest() {
    const [vote, setVote] = useState(0);

    function handleClick() {
        alert('Thanks for voting for!');
        setVote(vote + 1)
    }

    const listItems = hobbies.map(hobby =>
        <li className="hobbyList" key={hobbies.id} style={{color: hobby.isFavorite ? 'magenta' : 'white'}}>
            {hobby.title}
            <VoteButton></VoteButton>
        </li>
    )

    return (
        <>
            <h1 className="header">Mine Hobbier</h1>
            <p>{name}</p>

            <ul>{listItems}</ul>
        </>
    )
}

function VoteButton() {
    const [vote, setVote] = useState(0);

    function handleClick() {
        setVote(vote + 1)
        hobby.upVote = setVote(vote)
    }

    return (
        <button className='button' onClick={handleClick}>
            Voted {vote} times
        </button>
    )
}
