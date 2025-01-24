import {useState} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  ListItem,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link, useNavigate} from "react-router-dom";
import headerImage from "../../assets/Taskasset/tasklogo.png";
import Darkheader from "../../assets/Taskasset/tasklogo.png";
import {IconAlignJustified} from "@tabler/icons-react";
import IconBar from "./IconBar";
// import NavMenu from "./NavMenu";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBarItems: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mobileMenuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawerIcon: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  drawer: {
    width: 400,
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };
  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const nav_page = () => {
  //   navigate("/login");
  // };

  return (
    <>
      <main className="law_header">
        <header className="scrolled">
          <div className="">
            <div className="header_new_mega">
              <div className={`${classes.root} `}>
                <AppBar position="static">
                  <Toolbar className="container-fluid logo_new_sectio">
                    <Typography variant="h6" className={classes.title}>
                      <div className="d-flex justify-content-between align-items-center">
                        <Link to="/" className="logo-brand">
                          <img
                            src={headerImage}
                            alt="Header"
                            style={{width: "120px"}}
                          />
                        </Link>

                        <div
                          className={`menu_new_typr ${classes.appBarItems}`}
                        ></div>
                      </div>
                    </Typography>

                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      className={` m-0 p-0 ${classes.mobileMenuButton} ${classes.drawerIcon}`}
                    >
                      <IconAlignJustified
                        stroke={2}
                        onClick={handleMobileMenuOpen}
                        className="light-menu-icon"
                      />
                      <IconAlignJustified
                        stroke={2}
                        onClick={handleMobileMenuOpen}
                        className="dark-menu-icon"
                      />
                    </IconButton>
                    <div className={`menu_new_typr ${classes.appBarItems}`}>
                      <IconBar />
                    </div>
                  </Toolbar>
                </AppBar>
                <Drawer
                  anchor="left"
                  open={mobileMenuOpen}
                  className={classes.drawer}
                  onClose={() => handleMobileMenuClose(false)}
                >
                  <div className={classes.mobileMenu}>
                    <div className="logo_new_sectio mobile_menu_icon">
                      <Link to="/" className="logo-brand">
                        <img
                          src={headerImage}
                          alt="Header"
                          style={{width: "150px"}}
                        />
                      </Link>
                      <Link to="/" className="logo-brand-dark">
                        <img
                          src={Darkheader}
                          alt="Header"
                          style={{width: "150px"}}
                        />
                      </Link>
                    </div>
                    <div className="menu_statis">
                      <ListItem button className="drawa">
                        <a href="#home">All</a>
                      </ListItem>
                      <ListItem button className="drawa">
                        <a href="#feature">Shop by Goals</a>
                      </ListItem>
                      <ListItem button className="drawa ">
                        <a href="#overview">Equipment</a>
                      </ListItem>

                      <ListItem button className="drawa ">
                        <a href="#tutorial">Supplements</a>
                      </ListItem>
                      <ListItem button className="drawa ">
                        <a href="#tutorial">Deals</a>
                      </ListItem>
                    </div>
                  </div>
                </Drawer>
              </div>
            </div>
          </div>
          <div className="header-bar justify-content-center">
            <div className="search-container inmobine w-100">
              <select>
                <option value="all">All</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </select>
              <input type="text" placeholder="Search" />
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21.71,20.29l-5.4-5.39a8.49,8.49,0,1,0-1.42,1.42l5.39,5.4a1,1,0,0,0,1.42-1.42ZM10,16A6,6,0,1,1,16,10,6,6,0,0,1,10,16Z" />
                </svg>
              </button>
            </div>
          </div>
        </header>
      </main>
    </>
  );
};

export default Header;
