import React, { ReactNode } from "react";
import TreeData from "../treedata";
import { useSelector, useDispatch } from "react-redux";
import { Rating, Group } from "@mantine/core";

let employeeData: any = {};

function Demo() {
  const dispatch = useDispatch();
  const detailPageState = useSelector((state: any) => state.showDetail);

  const showdetailhandler = (data: any) => {
    employeeData = data;
    dispatch({ type: "showdetail" });
  };

  const hideDetail = () => {
    dispatch({ type: "showdetail" });
  };

  const addPageHandler = () => {
    dispatch({ type: "addpagestate" });
  };

  let arr: object[] = [];
  TreeData[0].employees?.map((emp) => {
    arr.push({
      name: TreeData[0].name + "=>" + emp.name,
      description: emp.description,
    });
  });
  {
    TreeData[0].children.map((emp: any) => {
      emp.employees.map((e: any) => {
        arr.push({
          name: emp.name + "=>" + e.name,
          description: e.description,
        });
        emp.children.map((em: any) => {
          em.employees.map((empl: any) => {
            arr.push({
              name: em.name + "=>" + empl.name,
              description: empl.description,
            });
            em.children.map((e: any) => {
              e.employees.map((emplo: any) => {
                arr.push({
                  name: e.name + "=>" + emplo.name,
                  description: emplo.description,
                });
                e.children.map((employ: any) => {
                  employ.employees.map((amploye: any) => {
                    arr.push({
                      name: employ.name + "=>" + amploye.name,
                      description: amploye.description,
                    });
                    employ.children.map((employee: any) => {
                      employee.employees.map((es: any) => {
                        arr.push({
                          name: employee.name + "=>" + es.name,
                          description: es.description,
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  const ShowDetail = () => {
    return (
      <div className="bg-gray-100 p-20">
        <article className="p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-blue-400 via-green-500 to-indigo-500">
          <div className="bg-white p-5 rounded-lg">
            <h1>{employeeData.name}</h1>
            <h4 className="text-2xl font-bold">{employeeData.description}</h4>
            <Group position="center">
              <Rating value={3.5} fractions={2} readOnly />
            </Group>
            <button className="from-blue-400 via-green-500 to-indigo-500 m-4 p-1 rounded-full bg-gradient-to-r">
              <span
                onClick={hideDetail}
                className="block text-black px-4 py-2 font-semibold rounded-full bg-white"
              >
                To The Employee List
              </span>
            </button>
          </div>
        </article>
      </div>
    );
  };

  const ShowList = () => {
    return (
      <div className="block text-black px-4 py-20 font-semibold bg-gray-100 w-30 grid gap-2 place-content-center">
        {arr.map((a: any) => (
          <div
            onClick={() => showdetailhandler(a)}
            className="w-30 border-green-500 bg-blue-200 hover:border-b-4 rounded p-4 cursor-pointer"
          >
            {a.name}
          </div>
        ))}
        <button
          onClick={addPageHandler}
          className="m-4 p-1 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-gray-500"
        >
          <span className="block text-black px-4 py-2 font-semibold rounded-full">
            Add Position
          </span>
        </button>
      </div>
    );
  };

  return (
    <>
      {!detailPageState && <ShowList></ShowList>}
      {detailPageState && <ShowDetail></ShowDetail>}
    </>
  );
}

// export default Demo;
export default Demo;
