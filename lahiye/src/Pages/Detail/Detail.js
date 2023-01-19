
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

function Detail() {
  let { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:2003/products/${id}`).then((response) => {
      setPost(response.data);
    });
  }, []);
  return (
    <section>
      <div>
        <div>
          <img src={post.src}/>
        </div>
        <div>
          <h2>{post.name}</h2>
          <p>{post.price}</p>
        </div>
      </div>
    </section>

  )
}

export default Detail
