// import {useState, useEffect} from 'react';
import useFetch from './useFetch';

// Quand le composant se monte on fait un appel AJAX pour recuperer les données
const TodoList = () => {
  // const [todo, setTodo] = useState([]);
  // const [loading, setLoading] = useState(true);

  const [todos, loading] = useFetch('http://jsonplaceholder.typicode.com/posts?_limit=10');

  // useEffect(() => {
  //   // Auto appel
  //   useEffect attends de retourner une function et non pas une promesse si on utilise directement await
  //   (async () => {
  //      Récuperer la reponse depuis une api
  //     const response = await fetch('http://jsonplaceholder.typicode.com/todos?_limit=10');
  //      La parsée
  //     const responseData = await response.json();

  //     if(response.ok) {
  //       console.log(responseData);
  //       setTodo(responseData);
  //     } else {
  //       alert(JSON.stringify(responseData));
  //     }

  //     // Nettoyer le chargement sinon il continura de s'exécuter
  //     setLoading(false);
  //   })();

  //   [] le useEffect ne depends de rien
  // }, []);

  if(loading) {
    return 'Chargement...';
  }
  
  return (
    <div>
      {/* <ul>
        {
          todo.map((todo, id) => (
            <li key={id}> {todo.title} </li>
          ))
        }
      </ul> */}
      <ul>
        {
          todos.map((todo, id) =>  <li key={id}> {todo.title} </li>)
        }
      </ul>
    </div>
  )
}

export default TodoList
