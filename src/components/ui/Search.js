import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const[text, setText] = useState("");
    
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    return (
        <section className="search">
            <form >
                <input type="text" className="form-control" placeholder="Busca un personaje" value={text}
                onChange={(e) => onChange(e.target.value)} autoFocus/>
            </form>
            <h1 className="h1-search">{text}</h1>
        </section>    
        
    )
}

export default Search
