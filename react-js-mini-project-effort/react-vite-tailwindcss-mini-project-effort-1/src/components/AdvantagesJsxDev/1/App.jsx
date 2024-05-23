import React from 'react'

const CustomExample = () => {
    const name = 'data content'
    const element = <p>hello {name}</p>

    const fname = 'a'
    const lname = 'b'
    const fullname = `${fname} ${lname}`
    const numbeasddsar = [1, 2, 3, 45, 5, 5]
    const sum = numbeasddsar.reduce(function (a, b) {
        return a + b
    }, 0)

    const multiuuply = numbeasddsar.reduce(function (a, b) {
        return a * b
    }, 1)

    const lyrics = "Your lyrics\nare here\nwith line breaks.";
    const lyricsParas = lyrics.split('\n');
    return (
        <>
            {element}
            <br />
            {fullname}
            <br />
            {sum}
            <br />
            Multiply {multiuuply}
            <br />
            <img src="https://fakeimg.pl/600x400" alt="" />
            <br />
            {lyricsParas.map((para, index) => (
                <React.Fragment key={index}>
                    <p className="mb-5 text-base/tight">{para}</p>
                </React.Fragment>
            ))}
        </>
    )
}

export default CustomExample
