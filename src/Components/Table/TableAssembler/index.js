import makeStyles from "./Style";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../../../Context/AppStateContext";
import { PackageContext } from "../../../Context/PackageContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTranslation } from "react-i18next";
import { StyledTableCell } from "../StyledTableCell";

const TableAssembler = () => {
  const { IS_RTL, isMobileView } = useContext(AppStateContext);
  const { packageData } = useContext(PackageContext);
  const [rows, setRows] = useState([]);
  const classes = makeStyles({ IS_RTL });
  const { t } = useTranslation();

  useEffect(() => {
    assembleRows();
  }, [packageData, isMobileView]);

  const createData = (branch, date, time, activity, reason) => {
    return { branch, date, time, activity, reason };
  };
  const assembleRows = () => {
    if (packageData) {
      const { TransitEvents } = packageData;
      let rows = TransitEvents.map((event) => {
        let timestamp = new Date(event.timestamp);
        const date =
          timestamp.getUTCDate() +
          "/" +
          timestamp.getUTCMonth() +
          "/" +
          timestamp.getUTCFullYear();
        const time = timestamp.getUTCHours() + ":" + timestamp.getUTCMinutes();
        console.log(event.reason ?? "none");

        return createData(
          event.hub ?? "-",
          date,
          time,
          event.state,
          event.reason ?? null
        );
      });

      setRows(rows);
    }
  };
  const renderTableMobileView = () => {
    if (packageData) {
      const { TransitEvents } = packageData;
      return (
        <TableContainer
          sx={{ height: 400, transform: IS_RTL ? "ScaleX(-1)" : "" }}
        >
          <Table aria-label="customized table" stickyHeader>
            {TransitEvents.map((event) => {
              let timestamp = new Date(event.timestamp);
              const date =
                timestamp.getUTCDate() +
                "/" +
                timestamp.getUTCMonth() +
                "/" +
                timestamp.getUTCFullYear();
              const time =
                timestamp.getUTCHours() + ":" + timestamp.getUTCMinutes();
              return (
                <>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell
                        IS_RTL={IS_RTL}
                        align={IS_RTL ? "right" : "left"}
                      >
                        {t("activity")}
                      </StyledTableCell>
                      <StyledTableCell
                        IS_RTL={IS_RTL}
                        align={IS_RTL ? "right" : "left"}
                      >
                        {t(`${event.state}`)}
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {event.reason && (
                      <TableRow>
                        <StyledTableCell
                          IS_RTL={IS_RTL}
                          align={IS_RTL ? "right" : "left"}
                        >
                          {t("reason")}
                        </StyledTableCell>
                        <StyledTableCell
                          IS_RTL={IS_RTL}
                          align={IS_RTL ? "right" : "left"}
                        >
                          <h5 style={{ color: "red", fontSize: 12 }}>
                            {" "}
                            {t(`reasonDescription`)}
                          </h5>
                        </StyledTableCell>
                      </TableRow>
                    )}

                    <TableRow>
                      <StyledTableCell
                        IS_RTL={IS_RTL}
                        align={IS_RTL ? "right" : "left"}
                      >
                        {t("branch")}
                      </StyledTableCell>
                      <StyledTableCell
                        IS_RTL={IS_RTL}
                        align={IS_RTL ? "right" : "left"}
                      >
                        {event.hub ? t(`${event.hub.split(" ")[0]}`) : "-"}
                      </StyledTableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell
                        IS_RTL={IS_RTL}
                        align={IS_RTL ? "right" : "left"}
                      >
                        {t("date")}
                      </StyledTableCell>
                      <StyledTableCell
                        IS_RTL={IS_RTL}
                        align={IS_RTL ? "right" : "left"}
                      >
                        {date}
                      </StyledTableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell
                        IS_RTL={IS_RTL}
                        align={IS_RTL ? "right" : "left"}
                      >
                        {t("time")}
                      </StyledTableCell>
                      <StyledTableCell
                        IS_RTL={IS_RTL}
                        align={IS_RTL ? "right" : "left"}
                      >
                        {time}
                      </StyledTableCell>
                    </TableRow>
                  </TableBody>
                </>
              );
            })}
          </Table>
        </TableContainer>
      );
    }
    return null;
  };
  const renderRows = () => {
    return rows.map((row, index) => {
      return (
        <TableRow key={row.activity + index}>
          <StyledTableCell IS_RTL={IS_RTL} align="center">
            {t(`${row.branch.split(" ")[0]}`)}
          </StyledTableCell>
          <StyledTableCell IS_RTL={IS_RTL} align="center">
            {row.date}
          </StyledTableCell>
          <StyledTableCell IS_RTL={IS_RTL} align="center">
            {row.time}
          </StyledTableCell>
          <StyledTableCell IS_RTL={IS_RTL} align="center">
            <div>
              <h5>{t(`${row.activity}`)}</h5>
              {row.reason && (
                <h5 style={{ color: "red" }}>{t(`reasonDescription`)}</h5>
              )}
            </div>
          </StyledTableCell>
        </TableRow>
      );
    });
  };

  const renderColumns = () => {
    return (
      <TableHead>
        <TableRow>
          <StyledTableCell IS_RTL={IS_RTL} align="center">
            {t("branch")}
          </StyledTableCell>
          <StyledTableCell IS_RTL={IS_RTL} align="center">
            {t("date")}
          </StyledTableCell>
          <StyledTableCell IS_RTL={IS_RTL} align="center">
            {t("time")}
          </StyledTableCell>
          <StyledTableCell IS_RTL={IS_RTL} align="center">
            {t("activity")}
          </StyledTableCell>
        </TableRow>
      </TableHead>
    );
  };

  const renderTable = () => {
    return (
      packageData && (
        <TableContainer
          className={classes.tableContainer}
          sx={{
            width: "50%",
          }}
        >
          <Table aria-label="customized table" stickyHeader>
            {renderColumns()}
            <TableBody>{renderRows()}</TableBody>
          </Table>
        </TableContainer>
      )
    );
  };

  return isMobileView ? renderTableMobileView() : renderTable();
};

export default TableAssembler;
