import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

function Main() {
  const [post, setPost] = useState([]);
  const [filter, setFilter] = useState("")
  const [search, setSearch] = useState([])
  function getData() {
    axios.get("http://localhost:2003/products").then((response) => {
      setPost(response.data);
      setSearch(response?.data)
    });
  }
  useEffect(() => {
    getData()
  }, []);
  const deletefunc = (id) => {
    axios.delete("http://localhost:2003/products/" + id)
    getData()
  }
  const searchForm =(e)=>{
    if(e.target.value===""){
      setPost(search)
    }
    else {
      const filterscreen= search.filter(data=>data.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setPost(filterscreen)
    }
    setFilter(e.target.value)
  }
  const Azalan = ()=> setPost([...post].sort((a,b)=>(b.price < a.price) ? 1 : (a.price < b.price) ? -1 : 0 ))   
  return (
    <section>
      <input type={"text"} value={filter} onInput={(e)=>{searchForm(e)}} placeholder="adi daxil edin"/>
      <button onClick={Azalan}>azalan</button>
      <div> 
        {console.log(post)}
        {
          post.map((item) => {
            return (
              <div>
                <div>
                  <img src={item.src} />
                </div>
                <h1>{item.name}</h1>
                <p>{item.price}</p>
                <Link to={`/detail/${item.id}`}><button>detail</button></Link>
                <button onClick={() => deletefunc(item.id)}>delete</button>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
