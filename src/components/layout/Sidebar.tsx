import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
const { Sider } = Layout;

const user = {
  ADMIN : 'admin',
  FACULTY : 'faculty',
  STUDENT : 'student',

}

const Sidebar = () => {

  const role = 'admin';

  let sidebarItems;
  switch(role) {
    case  user.ADMIN : 
    sidebarItems = sidebarItemsGenerator(adminPaths, user.ADMIN);
    break;
    case user.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, user.FACULTY);
      break;
      case user.STUDENT :
        sidebarItems = sidebarItemsGenerator(studentPaths, user.STUDENT);
        break;
    default : 
    break;

  }
    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        
      >
        <div style={{ color: "white", textAlign: "center", marginTop: "5px", marginBottom : '2px' }}>
          <NavLink to='/' ><h1 style={{color : "white"}} >PH University</h1></NavLink>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
    );
};

export default Sidebar;