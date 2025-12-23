import { styled } from "..";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const CartButton = styled("button", {
  background: "$gray800",
  width: 48,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  position: "relative",

  svg: {
    color: "$gray300",
    opacity: 0.5,
  },

  "&:hover": {
    svg: {
      opacity: 1,
    },
  },

  span: {
    background: "$green500",
    width: 28,
    height: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    border: "3px solid $gray900",
    color: "$white",
    fontWeight: "bold",
    fontSize: "$sm",

    position: "absolute",
    top: "-10px",
    right: "-10px",
    zIndex: 10,
  },
});
