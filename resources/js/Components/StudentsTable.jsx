import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StudentsTable = ({students}) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Family Name</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Created By</TableCell>
                        <TableCell>Created At</TableCell>
                        <TableCell>Updated By</TableCell>
                        <TableCell>Updated At</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {students.sort((a, b) => {
                        return a.family_name > b.family_name || a.first_name > b.first_name;
                    }).map((student) => (

                        <TableRow key={student.id}>
                            <TableCell>{student.family_name}</TableCell>
                            <TableCell>{student.first_name}</TableCell>
                            <TableCell>{student.created_by}</TableCell>
                            <TableCell>{student.created_at}</TableCell>
                            <TableCell>{student.updated_by}</TableCell>
                            <TableCell>{student.updated_at}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default StudentsTable;
