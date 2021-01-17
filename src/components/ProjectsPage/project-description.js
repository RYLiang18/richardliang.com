import React from 'react'

const ProjectDescription = ({name, tools, links, description, goBack}) => {
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
            <hr/>
            {descriptionParagraphs}
        </div>
    )
}

export default ProjectDescription
