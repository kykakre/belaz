import React from 'react';

const LkMainTableBody = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.nameProduct}</td>
            <td>1</td>
            <td>{props.productOrder}</td>
            <td>{props.dateDelivery}</td>
            <td>{props.statusDelivery}</td>
        </tr>
    );
};

export default LkMainTableBody;