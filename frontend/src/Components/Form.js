import * as React from 'react';
import { Typography, Fade, Modal, Box, Backdrop, TextField, Button } from '@mui/material';
import { AddPerson, UpdatePerson } from '../api';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    borderRadius: "5px",
    p: 4,
};

const inputStyles = {
    mt: "1.5vh"
}

function Form({ handleClose, open, edit, setEdit, getData }) {
    const [details, setDetails] = React.useState({ name: "", email: "", phone: "", hobbies: [] })
    const submitHandler = (e) => {
        e.preventDefault();

        const { name, email, phone, hobbies } = details;

        if (!name.trim() || !email.trim() || !phone || hobbies.length < 1) {
            return;
        } else if (edit) {
            UpdatePerson(details._id, details)
            console.log('Updating!');
        } else {
            AddPerson(details)
            console.log('Adding!');
        }

        setTimeout(getData, 1000)
        setDetails({ name: "", email: "", phone: "", hobbies: [] })
        setEdit(null);
        handleClose();
    }

    React.useEffect(() => {
        if (edit) {
            setDetails(edit)
        }
    }, [edit])
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography align='center' fontWeight='bold' variant="h6" component="h2">
                            {edit ? "Edit a Person" : "Add New Person"}
                        </Typography>
                        <form onSubmit={submitHandler}>
                            <TextField
                                required
                                sx={inputStyles}
                                fullWidth
                                type='text'
                                label="Full Name"
                                placeholder='Atul Morchhlay'
                                onChange={(e) => setDetails({ ...details, name: e.target.value })}
                                value={details.name}
                            />
                            <TextField
                                required
                                sx={inputStyles}
                                fullWidth
                                type='email'
                                placeholder='atulmorchhlay204@gmail.com'
                                label="Email Address"
                                onChange={(e) => setDetails({ ...details, email: e.target.value })}
                                value={details.email}
                            />
                            <TextField
                                required
                                sx={inputStyles}
                                fullWidth
                                placeholder='9669801746'
                                type='number'
                                label="Phone No."
                                onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                                value={details.phone}
                            />
                            <TextField
                                required
                                sx={inputStyles}
                                fullWidth
                                placeholder='cricket, football'
                                type='text'
                                label="Hobbies"
                                onChange={(e) => setDetails({ ...details, hobbies: e.target.value })}
                                value={details.hobbies}
                            />
                            <Button type='submit' sx={{ backgroundColor: "teal", color: "white", mt: "3vh", ":hover": { backgroundColor: "white", color: "teal" } }} fullWidth>Save</Button>
                            <Button onClick={() => {
                                handleClose();
                                setEdit(null)
                                setDetails({ name: "", email: "", phone: "", hobbies: [] })
                            }} sx={{ backgroundColor: "#ccc", color: "black", mt: "1vh", ":hover": { backgroundColor: "#fff", color: "#ccc" } }} fullWidth>Cancel</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default React.memo(Form);