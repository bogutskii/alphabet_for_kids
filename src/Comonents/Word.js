import React from 'react';

const Word = (props) => {
    const words = ["[ei] Apple",
        "[bi:] Ball",
        "[ci:] Cat",
        "[di:] Dog",
        "[i:] Eat",
        "[ef] Fox",
        "[ʤi:] Grass",
        "[eiʧ] Hat",
        "[ai] Ice",
        "[ʤei] Jam",
        "[kei] Kid",
        "[el] Life",
        "[em] Mouse",
        "[en] Nose",
        "[ou] Oak",
        "[pi:] Pet",
        "[kju:] Queen",
        "[a:] Red",
        "[es] Sport",
        "[ti:] Tab",
        "[ju:] Up",
        "[vi:] Van",
        "[‘dablju:] Water",
        "[eks] Xenia",
        "[wai] Yes",
        "[zed] Zebra"]
    return props.show ? <></> : <div>
        {words[props.index]}
    </div>

}
export default Word;