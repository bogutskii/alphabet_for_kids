import React from 'react';

const Word = (props) => {
    const words = [
        "Apple",
        "Ball",
        "Cat",
        "Dog",
        "Eat",
        "Fox",
        "Grass",
        "Hat",
        "Ice",
        "Jam",
        "Kid",
        "Life",
        "Mouse",
        "Nose",
        "Oak",
        "Pet",
        "Queen",
        "Red",
        "Sport",
        "Tab",
        "Up",
        "Van",
        "Water",
        "Xenia",
        "Yes",
        "Zoo"
    ];
return props.show ? <></>: <div>
    {words[props.index]}
</div>

}
export default Word;