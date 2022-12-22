import { useDispatch } from "react-redux";

const NodeLabel = (props: any) => {
  let counter: number = 0;
  const { nodeData } = props;
  const dispatch = useDispatch();

  const modalHandler = () => {
    dispatch({ type: "showmodal" });
  };

  // console.log(nodeData.employees[0].id);
  return (
    <>
      <div className="bg-repeat">
        <article className="mx-auto my-5 rounded-xl bg-gradient-to-r hover:shadow-xl from-gray-300 via-green-100 to-gray-300">
          <div className=" p-2 rounded-lg">
            <h4 className="text-3xl font-semibold">{nodeData.name}</h4>
            <div className="font-semibold">
                {nodeData.employees.map((emp: any) => {
                  counter ++;
                })}
                {counter >= 2 ? (
                  <h1>{counter} employees</h1>
                ) : (
                  nodeData.employees.map((emp: any) => <h1>{emp.name}</h1>)
                )}
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default NodeLabel;
