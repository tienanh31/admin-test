import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';

import { useState, useEffect } from 'react';

// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableHead,
  IconButton,
  TableContainer,
  TablePagination,
  TextField,
} from '@mui/material';
// components
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { database } from '../Firebase-config';
import Label from '../components/label';
import Popup from '../components/Popup';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'id', label: 'Id', alignRight: false },
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'location', label: 'Location', alignRight: false },
  { id: 'time', label: 'Time', alignRight: false },
  { id: 'cost', label: 'Cost', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function Oder() {
  const Datatour = [];
  const [data, setData] = useState(Datatour);
  useEffect(() => {
    const db = getDatabase();
    // Update the document title using the browser API
    const starCountRef = ref(db, 'Order/');
    onValue(
      starCountRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          setData((pre) => [...pre, childSnapshot.val()]);
          Datatour.push(data);
        });
      },
      {
        onlyOnce: true,
      }
    );
  }, []);

  const [open, setOpen] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');

  const filterRows = (row) => {
    const values = Object.values(row).join(' ').toLowerCase();
    return values.indexOf(searchQuery.toLowerCase()) !== -1;
  };
  // useEffect(() => {
  //   const db = getDatabase();
  //   // Update the document title using the browser API
  //   // const starCountRef = ref(db, 'tour/');
  //   onValue(
  //     starCountRef,
  //     (snapshot) => {
  //       snapshot.forEach((childSnapshot) => {
  //         const id = childSnapshot.key;
  //         const name = childSnapshot.val().name;
  //         const location = childSnapshot.val().location;
  //         const time = childSnapshot.val().time;
  //         const cost = childSnapshot.val().cost;
  //       });
  //     },
  //     {
  //       onlyOnce: true,
  //     }
  //   );
  // }, []);
  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const [test, set] = useState();
  const handleItemClick = (item) => {
    set(item.target);
  };
  console.log(test);
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };
  const selectedUser = selected.indexOf(1) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;
  const [selectedRow, setSelectedRow] = useState(null);
  const handleRowClick = (row) => {
    setSelectedRow(row);
    const key = 'order_ID';
    localStorage.setItem(key, selectedRow.ID);
    const key1 = 'user_ID';
    localStorage.setItem(key1, selectedRow.user_ID);
    const key2 = 'order_total';
    localStorage.setItem(key2, selectedRow.order_total);
    const key3 = 'order_status';
    localStorage.setItem(key3, selectedRow.order_status);
    window.location = '/dashboard/editorder';
  };
  const handleRowClick1 = (row) => {
    const key = 'user';
    localStorage.setItem(key, 3);
    window.location = '/dashboard/edituser';
  };
  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} />
          <Typography variant="h4" gutterBottom>
            Order
          </Typography>
          <a href="/dashboard/neworder">
            <Button onClick={() => setOpenPopup(true)} variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
              New Order
            </Button>
          </a>
        </Stack>

        <Card>
          <TextField label="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table enableRowSelection>
                <TableHead>
                  <TableRow>
                    <TableCell> </TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell>User ID</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Status</TableCell>

                    <TableCell> </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.filter(filterRows).map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      hover
                      onClick={() => handleRowClick(row)}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox />
                      </TableCell>
                      <TableCell>{row.ID}</TableCell>
                      <TableCell>{row.user_ID}</TableCell>
                      <TableCell>{row.order_total}</TableCell>
                      <TableCell>
                        <Label color={row.order_status === 'Delivering' ? 'success' : 'error'}>
                          {row.order_status}
                        </Label>
                      </TableCell>
                      <TableCell>
                        <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                          <Iconify icon={'eva:more-vertical-fill'} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}
