import DataCard from '@/components/dashboard/DataCard';
import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Table } from "@nextui-org/react";


export default function VolunteerDashboard() {
    return (
      <form action="/send-data-here" method="post">

      <label for="phoneNumber">Phone Number:</label>
      <input type="text" id="phoneNumber" name="phoneNumber" /><br/>

      <label for="password">Password:</label>
      <input type="text" id="password" name="password" /><br/>

      <Button variant='contained' disableElevation disableRipple disableTouchRipple sx={{ textTransform: 'none' }}>Cancel</Button>
      <Button variant='contained' disableElevation disableRipple disableTouchRipple sx={{ textTransform: 'none' }}>Log in</Button>
      </form>
    )
}