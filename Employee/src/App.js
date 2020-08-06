import React from 'react';
import './App.css';
import axios from 'axios'

class App  extends React.Component {
 constructor(props){
   super(props);
   this.state = {
     employeelist : []
   }
 }

 componentWillMount(){
   axios.get("http://dummy.restapiexample.com/api/v1/employees").then((data) => {
          this.setState({
            employeelist : data.data.data
          })
   })
 }
 render() {
   console.log(this.state.employeelist)
   const details = this.state.employeelist.map((emp,index) => {
       return <tbody key={index}>
              <tr>
              <td>{emp.id}</td>
              <td>{emp.employee_name}</td>
              <td>{emp.employee_salary}</td>
              </tr>
              </tbody>
   })

   return (
      <div>
        <table>
          <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>salary</th>
          </tr>
          </thead>
          {details}
        </table>
      </div>
   )

 }
}

export default App;
