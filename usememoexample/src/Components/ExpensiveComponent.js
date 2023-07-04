import React,{useMemo} from 'react'

const ExpensiveComponent = ({data}) => {
    const sum=useMemo(()=>{
        let total=0;
            for(let i=0; i<data.length;i++){
                total+=data[i];
            }
            return total;
    },[data]);
  return (
    <div>
        <p>Data:{data.join(",")}</p>
        <p>Sum:{sum}</p>
    </div>
  )
}

export default ExpensiveComponent