import { styled } from "@mui/material/styles";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";

export const StyledTableCell = styled((props) => <TableCell {...props} />)(
  ({ theme, IS_RTL }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#fafafa",
        color: "#5e5e5e",
        transform: IS_RTL ? "scaleX(-1)" : "",
        fontSize:16,
        fontWeight:600

      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        transform: IS_RTL ? "scaleX(-1)" : "",

      },
      
  })
);
