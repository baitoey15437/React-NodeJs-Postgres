import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import { ButtonGroup } from '@mui/material';

export default function Users() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          fetch("http://localhost:3000/api/users/", requestOptions)
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
            }
          )
      }, [])

      const UserUpdate = id => {
        window.location = '/update/' + id;
      }

      const UserDelete = id => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "id": id
        });

        const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        fetch("http://localhost:3000/api/users/"+id, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            window.location.href = '/';
        })
      }


    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ p : 2}}>
            <Paper sx={{ p:2 }}>
                <Box display="flex">
                    <Box sx={{ flexGrow: 1 }}> 
                        <Typography variant="h6" gutterBottom>
                            Users
                        </Typography>
                    </Box>
                    <Box> 
                        <Link href="create">
                            <Button variant="contained">Create</Button>
                        </Link>
                    </Box>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="center">Avatar</TableCell>
                            <TableCell align="center">First Name</TableCell>
                            <TableCell align="center">Last Name</TableCell>
                            <TableCell align="center">Username</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {items.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="center">
                                <Box display="flex" justifyContent="center">
                                    <Avatar alt={row.username} src={row.avatar} />
                                </Box>
                            </TableCell>
                            <TableCell align="left">{row.fname}</TableCell>
                            <TableCell align="left">{row.lname}</TableCell>
                            <TableCell align="left">{row.username}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">
                            <ButtonGroup variant="outlined" aria-label="Basic button group">
                                <Button onClick={()=> UserUpdate(row.id)}>Edit</Button>
                                <Button onClick={()=> UserDelete(row.id)}>Delete</Button>
                            </ButtonGroup>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
        </React.Fragment>
    );
}