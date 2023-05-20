import { useContext, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import Link from "@mui/material/Link";

import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";

import clsx from "clsx";
import {
  Container,
  CurrencyMenu,
  CurrencyMenuBtn,
  CurrencyMenuItem,
  LoginBtn,
  MobileActions,
  MobileContainer,
  MobileCurrencyMenu,
  MobileMenu,
  MobileMenuDivider,
  MobileMenuItem,
  MobileMenuItemWrapper,
  NavLink,
  SignUpBtn,
  SignUpLink,
} from "./navbarStyle";

import { currencies } from "../../mockdatas/currenciesData";
import { useAppContext } from "../../contexts";
import { AppActionType } from "../../contexts/reducer/AppReducer";
import { ICurrency as ICurrency } from "../../types/general";

const navItems = [
  {
    id: 0,
    label: (
      <>
        <span>OSRS</span> Gold
      </>
    ),
  },
  {
    id: 1,
    label: (
      <>
        <span>RS3</span> Gold
      </>
    ),
  },
  {
    id: 2,
    label: (
      <>
        Sell <span>RS</span> Gold
      </>
    ),
  },
  {
    id: 3,
    label: (
      <>
        <span>OSRS</span> Items
      </>
    ),
  },
  {
    id: 4,
    label: (
      <>
        <span>OSRS</span> Accounts
      </>
    ),
  },
  {
    id: 5,
    label: <>Reward Chests</>,
  },
];

const NavBar = () => {
  const { state, dispatch } = useAppContext();
  const selectedCurrency = state.selectedCurreny;
  const [anchorElCurrency, setAnchorElCurrency] = useState<null | HTMLElement>(
    null
  );
  const [anchorElMobileMenu, setAnchorElMobileMenu] =
    useState<null | HTMLElement>(null);

  const [selectedNavId, setSelectedNavId] = useState(0);

  const [currencyMenuState, setCurrencyMenuState] = useState(false);

  const handleClickNavMenu = (id: number) => {
    setSelectedNavId(id);
  };

  const handleOpenCurrencyMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCurrency(event.currentTarget);
    setCurrencyMenuState(true);
  };

  const handleCloseCurrencyMenu = () => {
    setAnchorElCurrency(null);
    setCurrencyMenuState(false);
  };

  const handleClickCurrency = (currency: ICurrency) => {
    dispatch({
      type: AppActionType.selectCurrency,
      data: currency,
    });
    handleCloseCurrencyMenu();
  };

  const handleOpenMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMobileMenu(event.currentTarget);
  };

  const handleCloseMobileMenu = () => {
    setAnchorElMobileMenu(null);
  };

  const handleClickMobileNav = (
    event: React.MouseEvent<HTMLElement>,
    id: number
  ) => {
    setSelectedNavId(id);
  };

  const handleClickMobileCurrency = (
    event: React.MouseEvent<HTMLElement>,
    currency: ICurrency
  ) => {
    dispatch({
      type: AppActionType.selectCurrency,
      data: currency,
    });
  };
  const handleClickMobileCurrencyMenu = () => {
    setCurrencyMenuState(currencyMenuState ? false : true);
  };

  return (
    <Box>
      <Container
        sx={{
          display: { xs: "none", md: "none", lg: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img src="images/logo.png" alt="logo" />

        <Box sx={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {navItems.map((navItem) => {
            return (
              <NavLink
                key={`navItem-${navItem.id}`}
                className={clsx("nav-item", {
                  "selected-nav-item": selectedNavId === navItem.id,
                })}
                onClick={() => handleClickNavMenu(navItem.id)}
              >
                {navItem.label}
              </NavLink>
            );
          })}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Tooltip title="Currency Settings">
            <CurrencyMenuBtn
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onClick={handleOpenCurrencyMenu}
            >
              <img
                src={`images/flags/${selectedCurrency?.label}.png`}
                width="16px"
                height="16px"
              />
              <span>{selectedCurrency?.label}</span>
              {currencyMenuState ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </CurrencyMenuBtn>
          </Tooltip>

          <SignUpLink onClick={handleCloseCurrencyMenu}>Sign Up</SignUpLink>
          <LoginBtn className="nav-button" onClick={handleCloseCurrencyMenu}>
            Log In
          </LoginBtn>
        </Box>
      </Container>

      <MobileContainer
        sx={{
          display: { xs: "flex", md: "flex", lg: "none" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton sx={{ padding: "0" }} onClick={handleOpenMobileMenu}>
          <MenuIcon />
        </IconButton>

        <img src="images/logo.png" alt="logo" />

        <LoginBtn className="nav-button" onClick={handleCloseMobileMenu}>
          Log In
        </LoginBtn>
      </MobileContainer>

      <CurrencyMenu
        anchorEl={anchorElCurrency}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        open={Boolean(anchorElCurrency)}
        onClose={handleCloseCurrencyMenu}
      >
        {currencies.map((currency) => {
          return (
            <CurrencyMenuItem
              key={`currency-${currency.id}`}
              className={clsx("currency-item", {
                "selected-currency-item": currency.id === selectedCurrency.id,
              })}
              sx={{ display: "flex", alignItems: "center", gap: "8px" }}
              onClick={() => handleClickCurrency(currency)}
            >
              <img
                src={`images/flags/${currency.label}.png`}
                width="16px"
                height="16px"
              />
              {currency.label}
            </CurrencyMenuItem>
          );
        })}
      </CurrencyMenu>

      <MobileMenu
        anchorReference="anchorPosition"
        anchorPosition={{ top: 0, left: 0 }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        sx={{ mt: "-16px", ml: "-16px" }}
        open={Boolean(anchorElMobileMenu)}
        onClose={handleCloseMobileMenu}
      >
        <MobileMenuItem
          key={`navItem`}
          className="nav-item"
          sx={{
            display: "flex",
            alignItems: "center",
            height: "80px",
          }}
        >
          <IconButton onClick={handleCloseMobileMenu}>
            <CloseIcon />
          </IconButton>
        </MobileMenuItem>
        <MobileMenuDivider />
        {navItems.map((navItem) => {
          return (
            <Box key={`navItem-${navItem.id}`}>
              <MobileMenuItem
                className={clsx("nav-item", {
                  "selected-nav-item": selectedNavId === navItem.id,
                })}
                onClick={(event) => handleClickMobileNav(event, navItem.id)}
              >
                {navItem.label}
              </MobileMenuItem>
              <Divider />
            </Box>
          );
        })}

        <MobileCurrencyMenu>
          <MobileMenuItem
            key={`currency`}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "8px",
            }}
            onClick={handleClickMobileCurrencyMenu}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src={`images/flags/${selectedCurrency?.label}.png`}
                width="16px"
                height="16px"
              />
              {selectedCurrency?.label}
            </Box>
            {currencyMenuState ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </MobileMenuItem>
          <Fade in={currencyMenuState}>
            <Box>
              {currencyMenuState &&
                currencies.map((currency) => {
                  return (
                    <MobileMenuItem
                      key={`currency-${currency.id}`}
                      className={clsx("currency-item", {
                        "selected-currency-item":
                          currency.id === selectedCurrency.id,
                      })}
                      sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                      onClick={(event) =>
                        handleClickMobileCurrency(event, currency)
                      }
                    >
                      <img
                        src={`images/flags/${currency.label}.png`}
                        width="16px"
                        height="16px"
                      />
                      {currency.label}
                    </MobileMenuItem>
                  );
                })}
            </Box>
          </Fade>
        </MobileCurrencyMenu>

        <MobileMenuDivider />

        <MobileActions sx={{ display: "flex", gap: "16px" }}>
          <SignUpBtn className="nav-button" onClick={handleCloseMobileMenu}>
            Sign Up
          </SignUpBtn>

          <LoginBtn className="nav-button" onClick={handleCloseMobileMenu}>
            Log In
          </LoginBtn>
        </MobileActions>
      </MobileMenu>
    </Box>
  );
};
export default NavBar;
