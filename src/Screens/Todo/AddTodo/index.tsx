import React, {useState} from 'react';
import AddButton from './AddButton';
import Todoinput from './Todoinput';

interface Props {}

const AddTodo = ({}: Props) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  return (
    <>
      <AddButton onPress={() => setShowInput(true)} />
      {showInput && <Todoinput hideTodoinput={() => setShowInput(false)} />}
    </>
  );
};

export default AddTodo;
