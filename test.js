// const arr = [1, 2, 3, 4];

// const result = arr.reduce((acc, item) => {
//     return acc + item;
// }, 0);

// console.log(result); 



// const adminPaths2 = [
//     {
//       name: "Dashboard",
//       path: "dashboard",
//       element: "AdminDashboard" ,
//     },
//     {
//       name : 'User Management',
//       Children : [
//           {
//               name : "create-student",
//               path : "create-student",
//               element : "CreateStudent",
//           },
//           {
//               name : "create-admin",
//               path : "create-admin",
//               element : "CreateAdmin" ,
//           },
//           {
//               name : "create-faculty",
//               path : "create-faculty",
//               element : "CreateFaculty" ,
//           }
//       ]
//     },
//   ];

  // const newArray = adminPaths2.reduce((acc, item) => {
  //  if(item.path && item.element)
  //  {
  //   acc.push({
  //     path : item.path,
  //     element : item.element,
  //   });
  //  }
  //   if(item.Children)
  //  {
  //   item.Children.forEach(child =>{
  //     acc.push({
  //       path : child.path,
  //       element : child.element,
  //     })
  //   })
  //  }
   
  //  return acc;
  // }, [])

  // console.log(newArray);



  // const newArray = adminPaths2.reduce((acc, item) => {
  //   if(item.path && item.name)
  //   {
  //    acc.push({
  //      key : item.name,
  //      label : "NavLink",
  //    });
  //   }

  //    if(item.Children)
  //   {
  //   acc.push({
  //     key : item.name,
  //     label : item.name,
  //     Children : item.Children.map(child => ({
  //       key : child.name,
  //       label : "NavaLink",
  //     }))
  //   })
    
  //   }
    
  //   return acc;
  //  }, [])
 
  //  console.log(newArray);



  const obj = {
    name : 'foysal',
    role : 'engineer',
    age : 18,
  }
  console.log(JSON.stringify(obj));