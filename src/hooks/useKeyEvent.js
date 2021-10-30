import { useEffect } from "react";

const useKeyEvent = ({
  key,
  modifier = [],
  type = "onkeypress",
  callback,
  context = window
}) => {
  useEffect(() => {
    context[type] = (e) => {
      // console.log(e);
      for (let i = 0; i < modifier.length; i++) {
        if (!e[modifier[i]]) return;
      }
      if (e.keyCode === key) {
        e.preventDefault();
        callback();
      }
    };
  }, []);
};

export default useKeyEvent;
