import React,{useState, useRef} from 'react' 
import InputNovel from './InputNovel';
import './App.css';
import List from './List'

function App() {

  const [inputs, setInputs] = useState({novel: ''});
  const [lists, setLists] = useState ([]);

  const listNum = useRef(1);
  const {novel} = inputs;

  const handleInput = (e) => {
    const {name, value} = e.target;
    setInputs({
        ...inputs,
        [name] : value
    })
    console.log(value)
}

const onCreate = () => {
    const list = {
      id: listNum.current,
      novel
    }
    if(novel != ''){
    setLists([...lists, list]);
    setInputs({novel: ""});
  
    console.log(listNum.current)

    listNum.current++
  }
}

const onRemove = (id) => {
  setLists(lists.filter(x => x.id !== id))
}

  return (
    <>
      <InputNovel
      lists={lists}
      novel={novel} 
      handleInput={handleInput}
      onCreate={onCreate}
      onRemove={onRemove}
      />
        <List 
        lists={lists}
        novel={novel}
        onRemove={onRemove}
        />      
    </>
  );
}

export default App;
