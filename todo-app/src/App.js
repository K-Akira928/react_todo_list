import "./App.css";
import { RecoilRoot } from "recoil";

import { HeaderLayout } from "./components/templates/HeaderLayout";
import { Todo } from "./components/pages/Todo";

function App() {
  return (
    <>
      <HeaderLayout />
      <RecoilRoot>
        <Todo />
      </RecoilRoot>
    </>
  );
}

export default App;
