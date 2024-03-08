import React , {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, Grid, TextField, Typography } from '@mui/material';

export default function UserUpdate() {
    const { id } = useParams();

    useEffect(() => {
        const requestOptions = {
        method: "GET",
        redirect: "follow"
        };

        fetch("http://localhost:3000/api/users/"+id, requestOptions)
        .then((response) => response.json())
        .then((result) => {
                setFname(result['fname'])
                setLname(result['lname'])
                setUsername(result['username'])
                setEmail(result['email'])
                setAvatar(result['avatar'])
        })
        .catch((error) => console.error(error));
    },[id])

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
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        fetch("http://localhost:3000/api/users/"+id, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                window.location.href = '/';
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
                Update User
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField id="fname" label="First Name" variant="outlined" fullWidth required 
                        onChange={(e) => setFname(e.target.value)}
                        value={fname}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="lname" label="last Name" variant="outlined" fullWidth required 
                        onChange={(e) => setLname(e.target.value)}
                        value={lname}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="username" label="UserName" variant="outlined" fullWidth required 
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="email" label="Email" variant="outlined" fullWidth required 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="avatar" label="Avatar" variant="outlined" fullWidth required 
                        onChange={(e) => setAvatar(e.target.value)}
                        value={avatar}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" fullWidth>Update</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
        </React.Fragment>
    );
}
