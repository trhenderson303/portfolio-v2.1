import React from "react";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { blue } from '@mui/material/colors';
import { ContactForm } from "../components/ContactForm";
import "../styles/connect.css"
import NavMenu from "../components/Nav";


export default function Contact() {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ y: window.innerHeight }}
    >
      <NavMenu/>
      <div className="page-container">
        <div className="page-title"> Connect <span>with me!</span></div>
        <div className="body-box">

          <div className="connect-box">
            <Stack direction="row" spacing={1}>
                <IconButton sx={{ color: blue[400], fontSize: 50 }}  aria-label="github" href="https://github.com/trhenderson303" target="blank">
                <GitHubIcon />
              </IconButton>
              <IconButton sx={{ color: blue[300], fontSize: 50 }} size="large" aria-label="linkedin" href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target="_blank">
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: blue[200], fontSize: 50 }} aria-label="twitter" href="https://twitter.com/t_r_henderson" target="_blank">
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: blue[100], fontSize: 50 }}  aria-label="instagram" href="https://www.instagram.com/tommyhenderson/" target="_blank">
                <InstagramIcon />
              </IconButton>
            </Stack>
            </div>
            <ContactForm />
          </div>
        </div>
    </motion.div>
  );
}
