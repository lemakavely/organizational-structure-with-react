import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import Positions from "../dataModel/positions";
import TreeData from "../treedata";
import NodeLabel from "./nodeLabel";
import { useSelector, useDispatch } from "react-redux";

function TreeDraw() {
  const dispatch = useDispatch();
  
  const listVewState = useSelector((state: any) => state.showList);
  const listViewHandler = () => {
    dispatch({type: "showlist"})
  }
  const treeHandler = () => {
    dispatch({ type: "showtree" });
  };

  return (
    <div className="App">
      {/*<h1>ORG Chart POC</h1>
       <button
        onClick={expandHandler}
        className="m-4 p-1 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
      >
        <span className="block text-black px-4 py-2 font-semibold rounded-full bg-white">
          Expand All
        </span>
      </button>
      <button
        onClick={collapseHandler}
        className="m-4 p-1 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
      >
        <span className="block text-black px-4 py-2 font-semibold rounded-full bg-white">
          Collapse All
        </span>
      </button> */}
      <div id="treeWrapper" style={{ width: "1500px", height: "1500" }}>
        <div className=" bg-repeat h-screen py-20 bg-gray-100 items-center justify-center">
          <Tree
            data={TreeData}
            nodeSvgShape={{ shape: "rect" }}
            pathFunc="step"
            separation={{ siblings: 2, nonSiblings: 3 }}
            orientation="vertical"
            // zoomable={false}
            zoom={0.5}
            translate={{ x: 790.3781262912275, y: 70.73512015217267 }}
            allowForeignObjects={true}
            nodeLabelComponent={{
              render: <NodeLabel />,
              foreignObjectWrapper: {
                width: 250,
                height: 300,
                y: -70,
                x: -100,
              },
            }}
            initialDepth={10}
          />
        </div>
      </div>
  <div className="bg-gray-100">
  <button onClick={listViewHandler}
        className="hover:border-b-4 border-green-500 m-4 p-1 rounded bg-gradient-to-r from-green-400 via-green-200 to-indigo-300 hover:"
      >
        <span className="block text-black px-4 py-2 font-semibold rounded-full">
          Plain List View Of Employees
        </span>
      </button>
  </div>
    </div>
  );
}

export default TreeDraw;
