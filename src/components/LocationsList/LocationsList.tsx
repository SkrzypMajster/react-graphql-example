import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TableFooter, TablePagination} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

import {LocationsListProps} from "./LocationsList.types";
import {BaseLink} from "../BaseLink/BaseLink";

export const LocationsList = ({ page, count, locations, onChangePage }: LocationsListProps) => {
    const handleChangePage = (
        _event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => onChangePage(newPage + 1);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Dimension</TableCell>
                        <TableCell>Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {locations.map((location) => (
                        <TableRow
                            key={location.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <BaseLink path={`/locations/${location.id}`}>{location.name}</BaseLink>
                            </TableCell>
                            <TableCell>{location.dimension || '-'}</TableCell>
                            <TableCell>{location.type  || '-'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[20]}
                            colSpan={3}
                            count={count}
                            rowsPerPage={20}
                            page={page - 1}
                            onPageChange={handleChangePage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
