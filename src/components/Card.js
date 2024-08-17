import React from "react";

export default function Card(props) {
 let options=props.options;
 let priceOptions=Object.keys(options)
 
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="https://plus.unsplash.com/premium_photo-1689371958614-cd30635630ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <div className="card-body">
            <h5 className="card-title">{props.ecommerceName}</h5>
           
            <div className="container w-100">
              <select className="m-2 h-100 bg-success">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success">
               {priceOptions.map((data)=>{
                return <option key={data} value={data}>{data}</option>
               })}
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}