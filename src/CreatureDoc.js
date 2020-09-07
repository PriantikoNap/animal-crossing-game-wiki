import React,{useState, useEffect} from 'react'

function CreatureDoc() {
    const [creature, setCreature] = useState([])

    useEffect(() => {
        creatureDoc()
    }, [])

    const creatureDoc = async () =>{
        const response = await fetch("http://acnhapi.com/v1/sea/")
        const data = await response.json()
        setCreature(Object.values(data))
    }
    return (
        <div>
            {creature.map(e => (<div>{e["file-name"]}</div>))}
        </div>
    )
}

export default CreatureDoc
