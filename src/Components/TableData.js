import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    
    mappingDataUser = () => this.props.dataUserProps.map((value,key) => (
        
        <TableDataRow userName={value.name} key={key} stt={key} tel={value.tel}
        permission={value.Permission}
        />
    ))
    

    render() {

       

        return (
            <div className="col">
                <table className="table table-striped table-hover   ">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên </th>
                        <th>Điện thoại </th>
                        <th>Quyền </th>
                        <th>Thao tác </th>
                    </tr>
                    </thead>
                    <tbody>

                        {this.mappingDataUser()}
                   
                    </tbody>
                </table>
                </div>

        );
    }
}

export default TableData;