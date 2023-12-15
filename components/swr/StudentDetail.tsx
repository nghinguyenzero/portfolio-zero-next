import * as React from 'react';
import useSWR from 'swr';

export interface  StudentDetailProps {
    studentId: string
}

const MILISECOND_PER_HOUR = 2*1000
export default function StudentDetail ({studentId}:  StudentDetailProps) {
    const{ data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, { 
      revalidateOnFocus : false,
      deduptingInterval: MILISECOND_PER_HOUR 
      /// when rendering a component that asks for a new request to refresh that data, the refresh will not be done
    })
    console.log(data);
    function handleMutateClick() {
      mutate({name: "Name mutate"}, true)
      
    }
  return (
    <div>
      Name: {data?.name || '--'}
      <button onClick={handleMutateClick}>mutate</button>
    </div>
  );
}
