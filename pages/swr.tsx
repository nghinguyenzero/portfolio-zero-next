import StudentDetail from '@/components/swr/StudentDetail';
import React, {useState} from 'react';

export default function SwrPage () {

  const [ detailList, setDetailList] = useState([1,2,3])
  function handleClickAdd () {
    setDetailList( prevList => [...prevList, 1])

  }
  return (
    <div>
      <h1>SWR</h1>
      <button onClick={handleClickAdd}>add detail</button>
      <ul>
        {detailList.map((item, idx) =>(
          <li key={idx}><StudentDetail studentId='lea319jollj7y1rs'/></li>
        ))}
        <li><StudentDetail studentId='lea319jollj7y1rs'/></li>

      </ul>
    </div>
  );
}
