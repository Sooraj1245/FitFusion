import React from "react";

const RegisterInputComponent = (props) => {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[15px]">{props.name}</span>
      <input
        type="text"
        placeholder={props.name}
        className="bg-accent/20 rounded-lg p-3 focus:outline-0 font-Mont font-light focus:border-b-1 focus:border-b-accent-hover focus:shadow-md
        "
      />
    </div>
  );
};

export default RegisterInputComponent;
