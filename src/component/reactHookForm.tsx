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

  const forExistsCheck = TreeData;

  let forDropdown: any = [{}];

  TreeData[0].children.map((item: any) => {
    forDropdown.push({ value: item.name, text: item.name });
    item.children.map((i: any) => {
      forDropdown.push({ value: i.name, text: i.name });
      console.log(i.children);
      if (i.children) {
        i.children.map((it: any) => {
          forDropdown.push({ value: it.name, text: it.name });
          it.children.map((its: any) => {
            forDropdown.push({ value: its.name, text: its.name });
            its.children.map((ites: any) => {
              forDropdown.push({ value: ites.name, text: ites.name });
            });
          });
        });
      }
    });
  });

  let positionData = { name: "", description: "" };
  let parentPosition = "";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "CEO",
      description: "this is the CEO",
      parentPosition: "male",
    },
  });
  // console.log((data.name));
  return (
    <div className="pt-20 h-screen grid place-content-center w-full bg-gray-100">
      <form
        className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit((data) => {
          positionData = { name: data.name, description: data.description };
          parentPosition = data.parentPosition;
          EmployeeAdd(parentPosition, positionData);
          console.log(forExistsCheck);
        })}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("name", {
              required: "Please type the name of the position",
            })}
            placeholder="Name"
          />
          <p className="text-red-500 text-xs italic">{errors.name?.message}</p>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="resize-y shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("description", {
              required: "Please type the description of the position",
              minLength: {
                value: 4,
                message: "Minimum length of this field is 4",
              },
            })}
            placeholder="Description"
          />
          <p className="text-red-500 text-xs italic">
            {errors.description?.message}
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
          {...register("parentPosition", {
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
        <p>{errors.parentPosition?.message}</p>
        <button
          type="submit"
          className="m-4 p-1 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-gray-500"
        >
          <span className="block text-black px-4 py-2 font-semibold rounded-full">
            Add Position
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
