/** @jsx jsx */
import { keyframes } from "@emotion/core"
import LogoDark from "assets/logo.svg"
import Logo from "components/logo"
import { Link } from "react-scroll"
import { Button, Container, Flex, jsx } from "theme-ui"
import menuItems from "./header.data"
import MobileDrawer from "./mobile-drawer"

export default function Header({ className }) {
  return (
    <header style={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Logo src={LogoDark} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menu, indx) => (
            <Link
              activeClass="active"
              to={menu.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={indx}
            >
              {menu.label}
            </Link>
          ))}
        </Flex>
        <Button
          className="donate_btn"
          variant="secondary"
          aria-label="Get Started"
        >
          Get Started
        </Button>
        <MobileDrawer />
      </Container>
    </header>
  )
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`

const styles = {
  header: {
    color: "nav",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255,0.25)",
    color: "#EEEEEE",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      color: "text",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },
}
