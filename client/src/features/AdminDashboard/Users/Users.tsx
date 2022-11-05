import { Box, Button } from '@mui/material';
import React from 'react';

import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CreateUserByAdmin } from '../../../services/user/model';
import {
    useDeleteUserMutation,
    useGetAllUsersQuery,
} from '../../../services/user/user';
import UserModal from './UserModal/UserModal';

const Users = () => {
    const [deleteUser, { isLoading: isDeleteLoading }] =
        useDeleteUserMutation();

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState<
        CreateUserByAdmin | undefined
    >(undefined);

    const { data: users, isFetching: areUsersLoading } =
        useGetAllUsersQuery(undefined);

    return (
        <>
            <Box>
                <Button
                    size='large'
                    sx={{ marginBottom: 2, border: '1px solid grey' }}
                    onClick={() => setIsModalOpen(true)}
                >
                    Add new user
                </Button>
            </Box>
            {users && (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align='right'>Email</TableCell>
                                <TableCell align='right'>Name</TableCell>
                                <TableCell align='right'>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{
                                        '&:last-child td, &:last-child th': {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component='th' scope='row'>
                                        {row.id}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.email}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align='right'>
                                        <>
                                            <IconButton
                                                aria-label='delete'
                                                onClick={() => {
                                                    setSelectedUser(row);
                                                    setIsModalOpen(true);
                                                }}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton
                                                aria-label='delete'
                                                onClick={async () =>
                                                    await deleteUser(row.id)
                                                }
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            <UserModal
                key={selectedUser?.id}
                isOpen={isModalOpen}
                user={selectedUser}
                onClose={() => {
                    setSelectedUser(undefined);
                    setIsModalOpen(false);
                }}
            />
        </>
    );
};

export default Users;
