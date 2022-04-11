import "./tutorList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TutorList() {

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  

  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "tutor",
      headerName: "Tutor",
      width: 200,
        renderCell: (params) =>
        {
        return (
          <div className="tutorListUser">
            <img className="tutorListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
            );
            
      },
      },
    
    
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      },
    
    {
      field: "tutors",
      headerName: "Tutors",
      width: 160,
    },
    

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/tutor/" + params.row.id}>
              <button className="tutorListEdit">Edit</button>
            </Link>
            
            <DeleteOutline
              className="tutorListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="tutorList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}