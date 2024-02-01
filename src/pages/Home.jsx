import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(true);


  async function fetchData(){
    setLoading(true);
    try{
      const res=await fetch(API_URL);
      const op=await res.json();
      setPosts(op);

    }
    catch(e){
      console.log("Error Occured");
      setPosts([]);

    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (<div>
{
      loading?(<div className="spner"><Spinner /> </div>):(<div  className="Home-wrap">{
        posts.map((post)=>( <Product post={post} key={post.id}/>))}

      </div>)
}
  

  </div>);
};

export default Home;
