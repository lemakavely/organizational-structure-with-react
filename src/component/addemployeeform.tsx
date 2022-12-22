import React from "react";
import { useForm } from "react-hook-form";
import EmployeeAdd from "./addemployee";
import { useDispatch } from "react-redux";
import TreeData from "../treedata";

export default function ReactHookForm() {
  const dispatch = useDispatch();
  const addPageHandler = () => {
    dispatch({ type: "addpagestate" });
  };

  // const forExistsCheck = TreeData;

  let forDropdown: any = [{}];

  let employeeName = "";
  let employeePosition = "";

  TreeData[0].children.map((item: any) => {
    forDropdown.push({ value: item.name, text: item.name });
    item.children.map((i: any) => {
      forDropdown.push({ value: i.name, text: i.name });
      i.children.map((it: any) => {
        forDropdown.push({ value: it.name, text: it.name });
        it.children.map((its: any) => {
          forDropdown.push({ value: its.name, text: its.name });
          its.children.map((ites: any) => {
            forDropdown.push({ value: ites.name, text: ites.name });
          });
        });
      });
    });
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      FirstName: "",
      LastName: "",
      Position: "",
    },
  });
  // console.log(watch("name"));
  return (
    <div className="pt-20 h-screen grid place-content-center w-full bg-gray-100">
      <form
        className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit((data) => {
          employeeName = `${data.FirstName} + " " + ${data.LastName}`;
          employeePosition = data.Position;
          EmployeeAdd(employeeName, employeePosition);
        })}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstNAme"
          >
            FirstName
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("FirstName", {
              required: "Please type the name of the Employee",
            })}
            placeholder="FirstName"
          />
          <p className="text-red-500 text-xs italic">
            {errors.FirstName?.message}
          </p>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            LastName
          </label>
          <input
            className="resize-y shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("LastName", {
              required: "Please type lastname of employee",
            })}
            placeholder="LastName"
          />
          <p className="text-red-500 text-xs italic">
            {errors.LastName?.message}
          </p>
        </div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Parent Position
        </label>
        <select
          className="w-full h-10 rounded-sm border-solid border-black bg-gray-100"
          {...register("Position", {
            required: "Please select parent position",
          })}
          placeholder="Pick one"
        >
          {forDropdown.map((element: any, index: any) => (
            <option key={index} value={element.value}>
              {element.text}
            </option>
          ))}
        </select>
        <p>{errors.Position?.message}</p>
        <button
          type="submit"
          className="m-4 p-1 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-gray-500"
        >
          <span className="block text-black px-4 py-2 font-semibold rounded-full">
            Add Employee
          </span>
        </button>
        <button
          onClick={addPageHandler}
          className="m-4 p-1 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-gray-500"
        >
          <span className="block text-black px-4 py-2 font-semibold rounded-full bg-white">
            Back To List
          </span>
        </button>
        {/* <input
          onClick={addPageHandler}
          className="cursor-pointer bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        /> */}
      </form>
    </div>
  );
}
