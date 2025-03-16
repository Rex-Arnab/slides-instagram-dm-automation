import React from "react";

type Props = {
  children: React.ReactNode;
};

function layout(props: Props) {
  return (
    <div className="h-screen flex justify-center items-center">
      {props.children}
    </div>
  );
}

export default layout;
