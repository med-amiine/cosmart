import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import Ledger from "@daml/ledger";
import { useStreamQuery, useLedger, useParty } from "@daml/react";
import { ContractId } from "@daml/types";
import { AcceptExporterInvitation,ExporterInvitation,   } from "@daml.js/cosmart-0.0.1/lib/Main";
import { InputDialog, InputDialogProps } from "./InputDialog";
import useStyles from "./styles";

export default function Report() {
  const classes = useStyles();
  const party = useParty();
  const ledger : Ledger = useLedger();
  const assets = useStreamQuery(ExporterInvitation).contracts;

  const defaultAcceptExporterInvitationProps : InputDialogProps<AcceptExporterInvitation> = {
    open: false,
    title: "Accept invitation",
    defaultValue: { customsGua : "" },
    fields: {
      customsGua : {
        label: "exporter",
        type: "text" }},
    onClose: async function() {}
  };

  const [ acceptExporterInvitationProps, setAcceptExporterInvitationProps ] = useState(defaultAcceptExporterInvitationProps);
  // One can pass the original contracts CreateEvent
  function showAcceptExporterInvitation(asset : ExporterInvitation.CreateEvent) {
    async function onClose(state : AcceptExporterInvitation | null) {
      setAcceptExporterInvitationProps({ ...defaultAcceptExporterInvitationProps, open: false});
      await ledger.exercise(ExporterInvitation.AcceptExporterInvitation, asset.contractId, state);
    };
    setAcceptExporterInvitationProps({ ...defaultAcceptExporterInvitationProps, open: true, onClose})
  };
  return (
    <>
    
    <InputDialog { ...acceptExporterInvitationProps } />  
      <Table size="small">
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell key={6} className={classes.tableCell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map(a => (
            <TableRow key={a.contractId} className={classes.tableRow}>
            
              <TableCell key={6} className={classes.tableCellButton}>
                <Button color="primary" size="small" className={classes.choiceButton} variant="contained" disabled={a.payload.exporter !== party} onClick={() => showAcceptExporterInvitation(a)}>AcceptExporterInvitation</Button>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
