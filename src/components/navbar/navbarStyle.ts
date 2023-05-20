import { styled } from "@mui/system";
import { Theme } from "@mui/system";

import { Link } from "@mui/material";
import { Button } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Divider } from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
  height: "80px",
  paddingLeft: "70px",
  paddingRight: "71.5px",
  backgroundColor: "#142241",
  borderBottom: "0.5px solid rgba(233, 177, 9, 1)",
  boxShadow: "0px 4px 3px 0px rgba(23, 34, 39, 0.25)",
}));

export const MobileContainer = styled('div')(({ theme }) => ({
  height: "80px",
  paddingLeft: "16px",
  paddingRight: "16px",
  backgroundColor: "#142241",
  borderBottom: "0.5px solid rgba(233, 177, 9, 1)",
  boxShadow: "0px 4px 3px 0px rgba(23, 34, 39, 0.25)",
}));

export const NavLink = styled(Link)(() => ({
  textDecoration: "none",
  fontSize: "14px",
  lineHeight: "21px",
  cursor: "pointer",
  color: "#ffffff",
  "&.selected-nav-item": {
    color: "rgba(233, 177, 9, 0.75)",
    "& span": {
      borderBottom: "solid 1px #E9B109",
      paddingBottom: "4px"
    }
  },
  "&:hover": {
    color: "#E9B109",
  }
}));

export const CurrencyMenu = styled(Menu)({
  '& .MuiMenu-paper': {
    width: '105px',
    padding: '0px',
    borderRadius: '4px',
    backgroundColor: '#142241',
    boxShadow: '0px -1px 5px 2px rgba(49, 66, 75, 0.1)',
  },
  '& .MuiMenu-list': {
    padding: '0px',
  },
});

export const CurrencyMenuItem = styled(MenuItem)({
  padding: '0px',
  color: '#ffffff',
  fontSize: '14px',
  lineHeight: '21px',

  '&.currency-item': {
    margin: '0px',
    padding: '6px 8px',
    borderLeft: 'none',
  },

  '&:hover': {
    background: 'rgba(44, 62, 103, 0.2)',
    borderRight: '2px solid #E9B109',
    color: '#E9B109',
  },
});

export const MobileMenu = styled(Menu)({
  '& .MuiMenu-paper': {
    width: '269px',
    top: '0px',
    left: '0px',
    padding: '0px',
    borderRadius: '0px',
    backgroundColor: '#142241',
    boxShadow: '4px 0px 3px 0px rgba(23, 34, 39, 0.25)',
  },
  '& .MuiMenu-list': {
    padding: '0px',
  },
  '& .MuiDivider-root': {
    margin: '0px 16px !important',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  },
});

export const MobileMenuItem = styled(MenuItem)({
  padding: '10px 16px',
  fontSize: '16px',
  lineHeight: '24px',
  whiteSpace: 'break-spaces',
  color: '#ffffff',

  '&.selected-nav-item': {
    color: '#E9B109',
  },

  '&.currency-item': {
    borderLeft: '2px solid #142241',
  },

  '&.selected-currency-item': {
    borderLeft: '2px solid #E9B109',
    color: '#E9B109',
  },

  '&.mobile-selected-item': {
    color: "#E9B109",
  }
});

export const MobileMenuDivider = styled(Divider)({
  margin: '0px 16px !important',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
});

export const MobileCurrencyMenu = styled("div")({
  fontSize: '16px',
  lineHeight: '21px',
});

export const MobileMenuItemWrapper = styled("div")({
  '& .MuiButtonBase-root': {
    color: '#ffffff',
  },
});

export const MobileActions = styled("div")({
  padding: '16px 16px 40px 16px',
});

export const CurrencyMenuBtn = styled(Button)({
  fontSize: "14px",
  lineHeight: "21px",
  color: "#ffffff",
});

export const SignUpLink = styled(Link)({
  textDecoration: 'none',
  fontSize: '14px',
  lineHeight: '21px',
  cursor: 'pointer',
  color: '#ffffff',
});

export const SignUpBtn = styled(Button)({
  color: "#ffffff",
  backgroundColor: `rgba(20, 34, 65, 1)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
});

export const LoginBtn = styled(Button)({
  color: "#142241",
  backgroundColor: `rgba(233, 177, 9, 1)`,
  "&:hover": {
    backgroundColor: `rgba(233, 177, 9, 0.35)`,
  },
});
