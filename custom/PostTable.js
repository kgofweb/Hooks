// import {useState, useEffect} from 'react'
import useFetch from './useFetch';

const PostTable = () => {
  // const [post, setPost] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [items, loading] = useFetch('http://jsonplaceholder.typicode.com/comments?_limit=10');

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch('http://jsonplaceholder.typicode.com/comments?_limit=10');
  //     const responseData = await response.json();

  //     if(response.ok) {
  //       setPost(responseData);
  //       console.log(responseData);
  //     } else {
  //       alert(JSON.stringify(responseData));
  //     }

  //     // Terminé le chargement
  //     setLoading(false);
  //   })();
  // }, []);

  if(loading) {
    return 'Chargement...';
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map((post, id) => (
            <tr key={id}>
              <td> {post.name} </td>
              <td> {post.email} </td>
              <td> {post.body} </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default PostTable;