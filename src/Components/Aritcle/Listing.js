import React, { useState } from 'react';

const Listing = () => {
  const [data, setData] = useState({name:''});
  const [value, setValue] = useState([]);

  const InputTaking = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]:value});
  };
  const newbox = (e) => {
    const newData = {...data,  id: new Date().getTime().toString()}
    setValue([...value, newData]);
    setData({name:''});
  };
  return (
    <div className='container'>
      <div>
        <h1>Listing Component</h1>
        <textarea
        className='mt-2'
          name='name'
          value={data.name}
          onChange={InputTaking}
        ></textarea>
        <button className='ml-3 ' onClick={newbox}>comment</button>

        {value.map((curElem) => {
          return (
            <div>
              <table>
                <td>{curElem.name} </td>
               </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Listing;
