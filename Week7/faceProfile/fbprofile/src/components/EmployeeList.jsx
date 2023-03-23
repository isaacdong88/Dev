import React from 'react'
import EmployeeListItem from './EmployeeListItem'
import employeeID from '../models/employees'

function EmployeeList() {
//     return (
//         <div className='employeelist'>
//             <EmployeeListItem />
//         </div>
//     )
// };    
    const emp =  employeeID.map((player) => {
            return (
                <div>
                    <EmployeeListItem pic={player.img} player={player.name} position={player.position}/>
                </div>
            );
        });
    return (
        <div>
            {emp}
        </div>
    )    
};    

    // const emp = employeeID.map(({player}) => {
    //     return(
    //         <div className='employeelist'>
    //         <EmployeeListItem pic={player.img} player={player.name} position={player.position}/>
    //     </div>
    //     )
    // }
    
    // <div className='employeelist'>
    //     <EmployeeListItem pic={employeeID.Curry.img} player={employeeID.Curry.name} position={employeeID.Curry.position} />
    //     <EmployeeListItem pic={employeeID.Kobe.img} player={employeeID.Kobe.name} position={employeeID.Kobe.position} />
    //     <EmployeeListItem pic={employeeID.Yao.img} player={employeeID.Yao.name} position={employeeID.Yao.position} />
    //     <EmployeeListItem pic={employeeID.Lebron.img} player={employeeID.Lebron.name} position={employeeID.Lebron.position} />
    //     <EmployeeListItem pic={employeeID.Jordan.img} player={employeeID.Jordan.name} position={employeeID.Jordan.position} />
    //     <EmployeeListItem pic={employeeID.Lin.img} player={employeeID.Lin.name} position={employeeID.Lin.position} />
    // </div>
//   )
// }

export default EmployeeList