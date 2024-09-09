import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {

    const {data} = useGetAllSemesterQuery(undefined)
    console.log( "My Academic Semester data => " , data)
  return (
    <div>
      <h1>Academic Semester page</h1>
    </div>
  );
};

export default AcademicSemester;
