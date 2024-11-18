'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link'; // ใช้ next/link สำหรับการนำทาง

const pages = ['Home', 'About', 'Products & Service', 'News & Events or Reference Project', 'Contact Us'];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // เปิด Drawer
  const handleOpenNavMenu = () => {
    setDrawerOpen(true);
  };

  // ปิด Drawer
  const handleCloseNavMenu = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          {/* เมนูที่แสดงบนหน้าจอ Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}  // เปิด Drawer เมื่อคลิกเมนู
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* เมนูที่แสดงบนหน้าจอ Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link
                  href={page === 'Home' ? '/' : `/${page.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}  
                  style={{ color: 'white', textDecoration: 'none' }} 
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          {/* Drawer สำหรับแสดงเมนูบนมือถือ */}
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleCloseNavMenu}  // ปิดเมื่อคลิกที่ด้านนอกหรือเมนู
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={handleCloseNavMenu}  // ปิดเมื่อคลิกเมนู
              onKeyDown={handleCloseNavMenu}
            >
              <AdbIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>

              {pages.map((page) => (
                <Link
                  key={page}
                  href={page === 'Home' ? '/' : `/${page.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} // ไปที่ /Products, /Pricing, หรือ /Blog
                  style={{ color: 'black', textDecoration: 'none' }}  // กำหนดสีและไม่มีเส้นใต้
                >
                  <MenuItem>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
