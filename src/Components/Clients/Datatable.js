import React, {useState, useEffect}from 'react';
import './Datatable.css'

import Styled from 'styled-components'
import { AiOutlineEdit } from 'react-icons/ai'
import { AiOutlineDelete } from 'react-icons/ai'

import Clients from '../DUMMY_DATA';
export default function Datatable() {
  const [dummyData, setDammyData] = useState(Clients);


  return (
    <table cellPadding="0" cellSpacing="0">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Bodyguard</th>
          <th>Pickup</th>
          <th>Duration</th>
          <th>Note</th>
          <th colspan="2">Payment status</th>
          <th colspan="2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {dummyData ? dummyData.map((data)=>{
            return( <tr key={data.id}>            
                <td>{data.id}</td>
                <td>{data.date}</td>
                <td>
                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                  <span>{data.name}</span>
                </td>
                <td>{data.pickup}</td>
                <td>{data.duration}</td>
                <td>{data.note}</td>
           
                <td>{data.offer}</td>
                {data.status==='active' && <td  style={{color:'darkGreen', background:'#cefef0' }}>{data.status}</td>}
                {data.status==='cancelled' && <td  style={{color:'darkRed', background:'#f78484' }}>{data.status}</td>}
                {data.status==='pending' && <td  style={{color:'darkYellow', background:'#b3b47f'}}>{data.status}</td>}
                <td><EditIcon/></td>
                <td><DeleteIcon/></td>
            </tr>  )
        }): 'No Records Found!' }
       
      </tbody>
    </table>
  );
}

const EditIcon = Styled(AiOutlineEdit)`
cursor: pointer;
font-weight:normal;
font-size:20px;
`
const DeleteIcon = Styled(AiOutlineDelete)`
cursor: pointer;
font-weight:normal;
font-size:20px;
`