import React, { useRef, useState } from "react";
import { Content, Parrent, Button } from "./styled";

const testContent = (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
      voluptates!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
      voluptates!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
      voluptates!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
      voluptates!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
      voluptates!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
      voluptates!
    </p>
  </div>
);

export const Collapsible = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const parrentRef = useRef(null);

  return (
    <div>
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "Close" : "Open"}
      </Button>
      <Parrent ref={parrentRef} parrentRef={parrentRef} isOpen={isOpen}>
        <Content>{children || testContent}</Content>
      </Parrent>
    </div>
  );
};
