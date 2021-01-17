import React from 'react'

const ExperienceDescription = ({name, position, dates, techStack, links, description, goBack}) => {
    var descriptionParagraphs = description.split("\\n").map((paragraph, index) => (
        <p 
            key={index}
            style={{
                textIndent: '2em'
            }}
        >
            {paragraph}
        </p>
    ))

    return (
        <div>
            <a
                onClick = {() => goBack()}
                href = "#"
            >
                🔙 GO BACK!
            </a>

            <h1>{name}</h1>

            <h3>{position}, {dates[0]} - {dates[1]}</h3>

            <hr/>

            {descriptionParagraphs}
        </div>
    )
}

export default ExperienceDescription
