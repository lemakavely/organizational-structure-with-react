import TreeData from "../treedata";
import { useSelector, useDispatch } from "react-redux";

const EmployeeAdd = (pname: string, newTreeData: any) => {
  // const addPageState = useSelector((state: any) => state.addPage);

  const checkexist = (data: any) => {
    data.children.map((child: any) => {
      if (child.name === newTreeData.name) return true;
    })
    return false;
  }

  // let newTreeData: object = { name: "the boss" };
  // let pname = "Tech Lead";
  TreeData.map((item) => {
    console.log(item);
    // if (item.name == pname) {
    //   if (!checkexist(item))
    //   item.children.push(newTreeData);
    //   return;
    // }
    if (item.children) {
      item.children.map((it: any) => {
        console.log(it);
        if (it.name == pname) {
          it.children.push(newTreeData);}
        if (it.children) {
          it.children.map((i: any) => {
            console.log(i);
            if (i.name == pname) i.children.push(newTreeData);
            if (i.children) {
              i.children.map((itt: any) => {
                console.log(itt);

                if (itt.name == pname) itt.children.push(newTreeData);
                if (itt.children) {
                  itt.children.map((itte: any) => {
                    console.log(itte);

                    if (itte.name == pname) itte.children.push(newTreeData);
                    if (itte.children) {
                      itte.children.map((its: any) => {
                        console.log(its);

                        if (its.name == pname) its.children.push(newTreeData);
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};

export default EmployeeAdd;
