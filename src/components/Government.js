import React , { useState, useEffect } from 'react'
import Item from './Item'
import User from './User'

const Government = () => {
const [show, setshow] = useState(false);
const [search, setSearch] = useState(''); 
const [show1, setshow1] = useState(false);
const [items, setItems] = useState([]);
const [items1, setItems1] = useState([]);

useEffect(() => {
    fetch("http://localhost:5000/data").then(res => {
        if(res.ok) {
            return res.json();
        }
    }).then(jres => {
        setItems(jres)
    });
    if(search!=='' && search.length!==12) setshow(true);
    else setshow(false);
    if(search==='') setshow1(false)
})

let filterItem = items.filter(item => (
    item.unqid.toLowerCase().includes(search.toLowerCase())
))

const change = (e) => {
    setSearch(e.target.value);
}

const handleChange = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/${search}`).then(res => {
        if(res.ok) {
            return res.json();
        }
    }).then(jres => {
        setItems1(jres)
        if(items1!=='') setshow1(true);
        else setshow1(false);
    });
}

  return (
    <div className="govt">
        <div className='government1'>
            <div className="government">
                <form onSubmit={handleChange}>
                    <input type="search" value={search} className='searchbar' onChange={change} placeholder="UNIQUE ID"/>
                    <button type="submit"><img src="/images/search.png" alt="search" /></button>
                </form>
                {show?<Item filter={filterItem} click={change}/>:''}
            </div>
        </div>
        {show1?<User id={items1.unqid} name={items1.name} email={items1.email} phone={items1.phone}/>:''}
    </div>
  )
}

export default Government