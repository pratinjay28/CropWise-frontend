import { useState } from "react";

function ConditionForm({ onSubmit }) {

  const [form,setForm] = useState({
    soil:"",
    ph:"",
    rainfall:"",
    temperature:"",
    area:""
  });

  function change(e){
    setForm({...form,[e.target.name]:e.target.value});
  }

  return (
    <>
      <input name="soil" placeholder="Soil type" onChange={change}/>
      <input name="ph" placeholder="pH" onChange={change}/>
      <input name="rainfall" placeholder="Rainfall" onChange={change}/>
      <input name="temperature" placeholder="Temperature" onChange={change}/>
      <input name="area" placeholder="Land area" onChange={change}/>
      <br/><br/>
      <button onClick={()=>onSubmit(form)}>Recommend Crops</button>
    </>
  );
}

export default ConditionForm;
