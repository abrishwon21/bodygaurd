import React, { useState } from 'react'
import Clients from '../DUMMY_DATA';
import './Datatable.css'
const  Datatable = ()=> {
const [dummyData, setDummyData] = useState(Clients)
  return (
<table cellPadding="0" cellSpacing="0">
    <thead>
        <tr>
            <th rowspan="2" class="maintblhead">#
                <tr>
                    <th></th>
                </tr>
            </th>
            <th rowspan="2" class="maintblhead">Role
                   <tr>
                        <th></th>
                    </tr>
            </th>
            <th colspan="5" rowspan="2" class="maintblhead">Feature 1
                    <tr>
                        <th>All</th>
                        <th>Section 1</th>
                        <th>Section 2</th>
                        <th>Section 3</th>
                        <th>Section 4</th>
                    </tr>
            </th>
            <th colspan="5" rowspan="2" class="maintblhead">Feature 2
                    <tr>
                        <th>All</th>
                        <th>Section 1</th>
                        <th>Section 2</th>
                        <th>Section 3</th>
                        <th>Section 4</th>
                    </tr>
            </th>
         </tr>
    </thead>
    <tbody>
        
             <tr>            
                <td>1</td>
                <td>Super Admin</td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>

                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                
               
            </tr> 

            <tr>            
                <td>1</td>
                <td>Admin</td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>

                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                
               
            </tr> 

            <tr>            
                <td>2</td>
                <td>Marketing 1</td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>

                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                
               
            </tr> 

            <tr>            
                <td>3</td>
                <td> Marketing 2</td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>
                <td><input type="checkbox"/></td>

                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                <td className="feature2body"><input type="checkbox"/></td>
                
               
            </tr> 
       
       
      </tbody>
    </table>
  )
}

export default Datatable