import React , {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, Grid, TextField, Typography } from '@mui/material';

export default function UserCreate() {
    const handleSubmit = event => {
        event.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "fname": fname,
        "lname": lname,
        "username": username,
        "email": email,
        "avatar": avatar
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        fetch("http://localhost:3000/api/users/", requestOptions)
            .then((response) => response.json())
            .then((result) => {window.location.href = '/';
            })
            .catch((error) => console.error(error));

    }
    const [fname , setFname] = useState('');
    const [lname , setLname] = useState('');
    const [username , setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [avatar , setAvatar] = useState('');

    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" sx={{ p : 2}}>
            <Typography variant="h6" gutterBottom>
                Create User
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField id="fname" label="First Name" variant="outlined" fullWidth required 
                        onChange={(e) => setFname(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="lname" label="last Name" variant="outlined" fullWidth required 
                        onChange={(e) => setLname(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="username" label="UserName" variant="outlined" fullWidth required 
                        onChange={(e) => setUsername(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="email" label="Email" variant="outlined" fullWidth required 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="avatar" label="Avatar" variant="outlined" fullWidth required 
                        onChange={(e) => setAvatar(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" fullWidth>Create</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
        </React.Fragment>
    );
}
