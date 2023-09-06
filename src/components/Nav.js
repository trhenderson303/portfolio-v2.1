import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import "../styles/main.css"

export default function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="nav-menu">
      <Button
        id="menu"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon id="menu"/>
      </Button>
      <Menu
        className="nav-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}> <Link to={"/MyWork"} className="nav-item"> My Work </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={"/MyWorld"} className="nav-item">
            My World
            </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={"/contact"} className="nav-item">
            Connect
            </Link></MenuItem>
      </Menu>
    </div>
  );
}