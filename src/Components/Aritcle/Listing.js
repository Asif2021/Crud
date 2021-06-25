import React, { useState } from 'react';

function Listing() {
  const [data, setData] = useState();
  const [value, setValue] = useState();

  const InputTaking = (e) => {
    setData(e.target.value);
  };
  const newbox = () => {
    setValue(data);
    setData('');
  };
  return (
    <div className='container'>
      <div>
        <h1>Listing component</h1>
        <textarea
          name=''
          id='text_box'
          cols='30'
          rows='4'
          name='input'
          value={data}
          onChange={InputTaking}
        ></textarea>
        <button onClick={newbox}>comment</button>

        {<h1>{value}</h1>}
      </div>
    </div>
  );
}

export default Listing;
