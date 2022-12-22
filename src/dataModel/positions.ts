class Positions {
  name: string;
  children?: any;
  _collapsed?: boolean;
  attributes?: { [key: string]: string };
  pid?: string;
  employees?: [{name: string, id?: string, pid?: string, description: string}];

  constructor(
    positionName: string,
    childrens: any,
    attribute: { [key: string]: string },
    collapsed: boolean,
    posid: string,
    employees: [{name: string, id?: string, pid?: string, description: string}],
  ) {
    this.name = positionName;
    this.children = childrens;
    this.attributes = attribute;
    this._collapsed = collapsed;
    this.pid = posid;
    this.employees = employees;
  }
}

export default Positions;
