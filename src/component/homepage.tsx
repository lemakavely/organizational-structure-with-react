import React, { Component } from "react";
import NavBar from "./navbar";
import BgAnimation from "./bgAnimation";
import Footer from "./footer";
import { useSelector, useDispatch } from "react-redux";
import TreeDraw from "./TreeDraw";
// import InfoModal from "./modal";
// import { ListItem } from "@mantine/core/lib/List/ListItem/ListItem";
import ListView from "./listView";
// import ReactHookForm from "./addemployeeform";
import ReactHookForm from "./reactHookForm";

// import EmployeeAdd from "./addemployee";

const HomePage = () => {
  const dispatch = useDispatch();
  const listVewState = useSelector((state: any) => state.showList);
  const treeState = useSelector((state: any) => state.showTree);
  const addPageState = useSelector((state: any) => state.addPage);


  const treeHandler = () => {
    dispatch({ type: "showtree" });
  };

 
  // console.log(treeState);

  return (
    <>
      <NavBar></NavBar>
      {!treeState && <BgAnimation></BgAnimation>}
      {treeState && !listVewState && <TreeDraw></TreeDraw>}
      {!treeState && <div className="bg-gray-100 flex items-center py-12 justify-center">
        <button onClick={treeHandler} className=" relative items-start pb-20 rounded-full ">
          <span className=" hover:bg-green-200 px-6 py-3 rounded-md text-indigo-900 font-semibold bg-green-300 hover:bg transition">
            Org Chart
          </span>
        </button>
      </div>
      }
      {listVewState && !addPageState && <ListView></ListView>}
      {addPageState && <ReactHookForm></ReactHookForm>}
      {/* // <ReactHookForm></ReactHookForm> */}
      <Footer></Footer>
    </>
  );
};

export default HomePage;
