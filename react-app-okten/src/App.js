import './App.css';
import Users from "./components/users/Users";
import {useEffect, useState} from "react";



function App() {
  let [users, setUsers ] = useState([]);
  let [posts, setPosts ] = useState([]);
  let [comments, setComments ] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setUsers(value);
        });
    fetch('https://jsonplaceholder.typicode.com/comments')
          .then(value => value.json())
          .then(value => {
              setComments(value);
          });

    fetch('https://jsonplaceholder.typicode.com/posts')
          .then(value => value.json())
          .then(value => {
              setPosts(value);
          });

  }, []);
  return (
   <div>
       <div className={'twoColumn'}>
           <div>
               {
                   users.map( value => <p key={value.id}>{value.name}</p> )
               }
           </div>
           <div>
               {
                   posts.map( value => <p key={value.id}>{value.title}</p> )
               }
           </div>
       </div>
       <hr/>
       <div>
           {
               comments.map( value => <p key={value.id}>{value.name}</p> )
           }
       </div>
   </div>
  );
}

export default App;
