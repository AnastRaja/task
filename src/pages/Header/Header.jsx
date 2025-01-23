import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import headerImage from "../../assets/Taskasset/tasklogo.png";
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
    width: 300,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <main className="law_header">
        <header className="scrolled">
          <div className="header-bar">
            <div className="left">
              <select>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
              </select>
              <select>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
              <span>Need Help? +002 123-123-123</span>
            </div>
            <div className="right">
              <a href="#my-account">My Account</a>
              <a href="#about-us">About Us</a>
              <a href="#contact-us">Contact Us</a>
              <a href="#faqs">FAQs</a>
            </div>
          </div>
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

                        <div className="search-container">
                          <select>
                            <option value="all">All</option>
                            <option value="category1">Shop by Goals</option>
                            <option value="category2">Equipment</option>
                            <option value="category2">Supplements</option>
                            <option value="category2">Deals</option>
                          </select>
                          <input type="text" placeholder="Search" />
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21.71,20.29l-5.4-5.39a8.49,8.49,0,1,0-1.42,1.42l5.39,5.4a1,1,0,0,0,1.42-1.42ZM10,16A6,6,0,1,1,16,10,6,6,0,0,1,10,16Z" />
                            </svg>
                          </button>
                        </div>
                        <div
                          className={`menu_new_typr ${classes.appBarItems}`}
                        ></div>
                      </div>
                    </Typography>

                    <div className={`menu_new_typr ${classes.appBarItems}`}>
                      <IconBar />
                    </div>
                  </Toolbar>
                </AppBar>
              </div>
            </div>
          </div>
          <div className="header-bar justify-content-center">
            <div className="left">
              <select>
                <option value="usd">Shop by Goals</option>
              </select>
              <select>
                <option value="en">Equipment</option>
              </select>
              <select>
                <option value="en">Supplements</option>
              </select>
              <select>
                <option value="en">Deals</option>
              </select>
            </div>
          </div>
        </header>
      </main>
    </>
  );
};

export default Header;
