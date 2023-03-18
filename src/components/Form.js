import React, { useState } from "react";

const Form = ({getData}) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false)

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleSubmit = (event) => {
    if(isNaN(weight)||isNaN(height))
    {
        setAlert(true)
    }
    else{
        getData(weight,height)
        setAlert(false)
    }
    event.preventDefault();
    console.log(weight);
    console.log(height);
  };
 

  return (
 
      <div className="col-sm-4 shadow p-3 mb-5 bg-white rounded px-5">
        <h1 className="text-center text-secondaary h2 pt-3">BMI Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Weight(kg):</label>
                <input
                  defaultValue={weight}
                  onChange={handleWeightChange}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Height(cm):</label>
                <input
                  defaultValue={height}
                  onChange={handleHeightChange}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <input type="submit" className="btn btn-primary my-3" value="Get Bmi" />
        </form>
        {alert && <div className="alert-danger alert" role="alert">Please enter valid input</div> }
      </div>
   
  );
};

export default Form;
