import React from "react";
import Positions from "./dataModel/positions";
import nextId, { useId } from "react-id-generator";

let positions: Positions[] = [
  {
    name: "CEO",
    employees: [{
      name: "Yohannes",
      id: nextId("11."),
      description: "this is the ceo"
    },
    
  ],
    _collapsed: false,
    pid: nextId("1."),
    children: [
      {
        name: "CTO",
        employees: [{
          id: nextId("22."),
          name: "samit",
          description: "this is the cto"
        }
      ],
        pid: nextId("2."),
        children: [
          {
            name: "Project Manager",
            pid: nextId("3."),
            employees: [{
              id: nextId("33."),
              name: "sami",
              description: "this is the project manager"

            }],
            children: [
              {
                name: "Product owner",
                pid: nextId("4."),
                employees: [{
                  name: "sami",
                  id: nextId("44."),
                  description: "this is the product owner"

                }],
                children: [
                  {
                    name: "Tech Lead",
                    pid: nextId("5."),
                    employees: [{
                      name: "sami",
                      id: nextId("55."),
                      description: "this is the tech lead"

                    }],
                    children: [
                      {
                        name: "Frontend Developer",
                        pid: nextId("6."),
                        employees: [{
                          name: "sami",
                          id: nextId("66."),
                          description: "this is the frontend developer"

                        },
                        {
                          name: "sami",
                          id: nextId("66."),
                          description: "this is the frontend developer"

                        },
                        {
                          name: "sami",
                          id: nextId("66."),
                          description: "this is the frontend developer"

                        }, {
                          name: "sami",
                          id: nextId("66."),
                          description: "this is the frontend developer"

                        }, {
                          name: "sami",
                          id: nextId("66."),
                          description: "this is the frontend developer"

                        },
                      ],
                        children: [],
                      },
                      {
                        name: "Backend Developer",
                        pid: nextId("6."),
                        employees: [{
                          name: "sami",
                          id: nextId("66."),
                          description: "this is the backend developer"

                        }],
                        children: [],
                      },
                      { name: "Devops Engineer",
                      pid: nextId("6."),
                      employees: [{
                        name: "sami",
                        id: nextId("66."),
                        description: "this is the devops engineer"

                      }],
                      children: [] },
                    ],
                  },
                  {
                    name: "QA Engineer",
                    pid: nextId("5."),
                    employees: [{
                      name: "sami",
                      id: nextId("55."),
                      description: "this is the qa engineer"

                    }],
                    children: [],
                  },
                  {
                    name: "Scrum Master",
                    pid: nextId("5."),
                    employees: [{
                      name: "sami",
                      id: nextId("55."),
                      description: "this is the scrum master"

                    },
                    {
                      name: "sami",
                      id: nextId("55."),
                      description: "this is the scrum master 2"


                    }
                  ],
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "CFO",
        pid: nextId("2."),
        employees: [{
          name: "samirrr",
          id: nextId("22."),

        }],
        children: [
          {
            name: "Chef Accountant",
            pid: nextId("3."),
            employees: [{
              name: "sami",
              id: nextId("33."),
              description: "this is the chef accountant"

            }],
            children: [
              {
                name: "Financial Analyst",
                pid: nextId("4."),
                employees: [{
                  name: "sami",
                  id: nextId("44."),
                  description: "this is the financial analyst"

                }],
                children: [],
              },
              {
                name: "Account And Payable",
                pid: nextId("4."),
                employees: [{
                  name: "sami",
                  id: nextId("44."),
                  description: "this is the account and payable"

                }],
                children: [],
              },
            ],
          },
          {
            name: "Internal Audit",
            pid: nextId("3."),
            employees: [{
              name: "sami",
              id: nextId("33."),
              description: "this is the internal audit"

            }],
            children: [],
          },
        ],
      },
      {
        name: "COO",
        employees: [{
          name: "samirtrt",
          id: nextId("22."),
          description: "this is the coo"

        }],
        pid: nextId("2."),
        children: [
          {
            name: "Product Manager",
            pid: nextId("3."),
            employees: [{
              name: "sami",
              id: nextId("33."),
              description: "this is the project manager"

            }],
            children: [],
          },
          {
            name: "Operation Manager",
            pid: nextId("3."),
            employees: [{
              name: "sami",
              id: nextId("33."),
              description: "this is the operation manager"

            }],
            children: [],
          },
          {
            name: "Customer Relation",
            pid: nextId("3."),
            employees: [{
              name: "sami",
              id: nextId("33."),
              description: "this is the customer relation"

            }],
            children: [],
          },
        ],
      },
      {
        name: "HR",
        pid: nextId("2."),
        employees: [{
          name: "samigo",
          description: "this is the hr",
          id: nextId("22."),

        }],
        children: [],
      },
    ],
  },
];


// const AddPosition = () {

// }

export default positions;
