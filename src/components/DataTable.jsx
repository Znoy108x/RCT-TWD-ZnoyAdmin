import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom"

const DataTable = () => {
    const actionColumn = [
      {
        field : "action" , headerName:"Action" , width: 200 , renderCell : (params) =>{
          return <div className="flex  space-x-4">
            <div className="cursor-pointer hover:text-white hover:bg-green-500   px-1 py-1">View</div>
            <div className="cursor-pointer hover:text-white hover:bg-red-600   px-1 py-1">Delete</div>
          </div>
        }
      }
    ]
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 220 ,
          renderCell : (params) =>{
            return <Link to={`/users/${params.row.id}`}>
            <div className="flex space-x-10 items-center cursor-pointer">
              <img src={params.row.img} alt="" className="my-2 rounded-full w-10 h-10 m-2"/>
              {
                params.row.username
              }
            </div>
            </Link>
          }},
          { field: 'email', headerName: 'Email', width: 230 },
          { field: 'age', headerName: 'Age', width: 30 },
          { field: 'status', headerName: 'status', width: 160 , renderCell:(params)=>{
            return (
               <>
                {
                  params.row.status === "Approved" ? <div className="ring-1 ring-green-500 ring-inset text-center bg-green-100 text-green-500  text-xs rounded-xl px-1 py-1">
                    {params.row.status}
                  </div> : <div className="ring-1 ring-red-500 ring-inset text-center bg-red-100 text-red-500  text-xs rounded-xl px-1 py-1">
                    {params.row.status}
                  </div>
                }
              </>
            )
          }},
        ];
      const rows = [
        { id: 1, username: 'Abhay Bisht', img: "https://i.pinimg.com/564x/43/af/76/43af762f9ddb92bbaf50258985011e19.jpg" , email:"abhayb2002@gmail.com" , age :"20" , status:"Approved"},
        { id: 2, username: 'Suraj Kumar', img: "https://i.pinimg.com/236x/bf/9c/b7/bf9cb79aad9500e40f5483370c9b714f.jpg" , email:"StarlordPubg@gmail.com" , age :"12" , status:"Approved"},
        { id: 3, username: 'Zolo Farswan', img: "https://i.pinimg.com/236x/a2/34/3e/a2343e6e1c717721c46612cca4795939.jpg" , email:"lovey12@gmail.com" , age :"31" , status:"Not Approved"},
        { id: 4, username: 'Aditya Singh', img: "https://i.pinimg.com/236x/94/38/26/94382676ad9163703f099d4d289131a3.jpg" , email:"ymca.use.ac.in@gmail.com" , age :"45" , status:"Approved"},
        { id: 5, username:'Sunny Negi', img: "https://i.pinimg.com/236x/72/5f/4a/725f4ab46b6aad81d840bbfab3d4d814.jpg" , email:"codingninjas@gmail.com" , age :"67" , status:"Not Approved"},
        { id: 6, username: 'Kaka Rawat', img: "https://i.pinimg.com/236x/e6/d4/30/e6d430859f9aac211f8665d0c04602d7.jpg" , email:"leetcode@gmail.com" , age :"52" , status:"Approved"},
        { id: 7, username: 'Abhay Bisht', img: "https://i.pinimg.com/564x/43/af/76/43af762f9ddb92bbaf50258985011e19.jpg" , email:"abhayb2002@gmail.com" , age :"20" , status:"Approved"},
        { id: 8, username: 'Suraj Kumar', img: "https://i.pinimg.com/236x/bf/9c/b7/bf9cb79aad9500e40f5483370c9b714f.jpg" , email:"StarlordPubg@gmail.com" , age :"12" , status:"Approved"},
        { id: 9, username: 'Zolo Farswan', img: "https://i.pinimg.com/236x/a2/34/3e/a2343e6e1c717721c46612cca4795939.jpg" , email:"lovey12@gmail.com" , age :"31" , status:"Not Approved"},
        { id: 10, username: 'Aditya Singh', img: "https://i.pinimg.com/236x/94/38/26/94382676ad9163703f099d4d289131a3.jpg" , email:"ymca.use.ac.in@gmail.com" , age :"45" , status:"Approved"},
        { id: 11, username:'Sunny Negi', img: "https://i.pinimg.com/236x/72/5f/4a/725f4ab46b6aad81d840bbfab3d4d814.jpg" , email:"codingninjas@gmail.com" , age :"67" , status:"Not Approved"},
        { id: 12, username: 'Kaka Rawat', img: "https://i.pinimg.com/236x/e6/d4/30/e6d430859f9aac211f8665d0c04602d7.jpg" , email:"leetcode@gmail.com" , age :"52" , status:"Approved"},
      ];
  return (
    <>
    <Link to="/users/new">
      <h1 className="font-bold tracking-wider text-xs cursor-pointer rounded-3xl px-2 py-1 w-[110px] text-red-500 bg-red-100 
      hover:bg-green-100 hover:text-green-500  mx-1">Add New User</h1>
    </Link>
    <div className="w-full h-full" style={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
    </>
  )
}

export default DataTable