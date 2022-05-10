import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import SettingsIcon from '@mui/icons-material/Settings';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import { DeletePerson } from '../api';

function Popover({ handleOpen, row, setEdit, getData }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClickPopover = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const closePopover = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <MoreVertIcon
                size='small'
                id="basic-button"
                aria-controls={open ? row._id : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClickPopover}
                sx={{ cursor: "pointer" }}
            />
            <Menu
                sx={{ boxShadow: 1 }}
                id={row._id}
                anchorEl={anchorEl}
                open={open}
                onClose={closePopover}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.12))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => {
                    setEdit(row);
                    closePopover()
                    handleOpen();
                }}>
                    <ListItemIcon>
                        <EditIcon fontSize="small" />
                    </ListItemIcon>
                    Edit</MenuItem>
                <MenuItem sx={{ color: "red" }} onClick={() => {
                    DeletePerson(row._id);
                    closePopover()
                    setTimeout(getData, 0)
                }}>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                    </ListItemIcon>
                    Delete</MenuItem>
            </Menu>
        </div>
    )
}

export default React.memo(Popover)
