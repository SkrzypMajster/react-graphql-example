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

import {EpisodesListProps} from "./EpisodesList.types";
import {BaseLink} from "../BaseLink/BaseLink";

export const EpisodesList = ({ page, count, episodes, onChangePage }: EpisodesListProps) => {
    const handlePageChange = (
        _event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => onChangePage(newPage + 1);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Episode</TableCell>
                        <TableCell>Air date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {episodes.map((episode) => (
                        <TableRow
                            key={episode.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <BaseLink path={`/episodes/${episode.id}`}>{episode.episode}</BaseLink>
                            </TableCell>
                            <TableCell>{episode.name}</TableCell>
                            <TableCell>{episode.air_date}</TableCell>
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
                            onPageChange={handlePageChange}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
