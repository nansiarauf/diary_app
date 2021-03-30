import { useState } from "react";
import AddDiary from "./components/AddDiary";
import Diary from "./components/Diary";
import NavBar from "./components/NavBar";
import { initialDiary } from "./seeder/initData";

function App() {
  const [initData, setInitData] = useState(
    initialDiary
  );

  //this function deletes any entry that matches the return date
  const del = (date) => {
    setInitData(
      initData.filter((d) => d.date !== date)
    );
  };
  //this function loads the new data entered before the old/initial data
  const newDiary = (newdata) => {
    setInitData([newdata, ...initData]);
  };
  return (
    <>
      <NavBar />
      <AddDiary newDiary={newDiary} />
      <Diary initData={initData} del={del} />
    </>
  );
}

export default App;
