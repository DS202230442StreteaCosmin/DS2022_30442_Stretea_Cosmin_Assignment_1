import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Autocomplete,
  Badge,
  Drawer,
  FormControl,
  Icon,
  InputLabel,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Cart from "../components/Cart/Cart";
import ContentTable from "../components/ContentTable/ContentTable";
import HeaderBar from "../components/HeaderBar/HeaderBar";

const restaurants = ["Big belly", "Samsara", "20Pizza", "MucDeFluier"];
const categories = ["Pizza", "Pasta", "Desert"];
const deliveryZones = ["1", "2", "3"];
const orderStatuses = [
  "PENDING",
  "ACCEPTED",
  "DECLINED",
  "IN_DELIVERY",
  "DELIVERED",
];

const foods = [
  {
    name: "Pizza Capricioasa",
    description: "ham, dough, tomato sauce, mushrooms, corn",
    category: categories[0],
    price: "24.99",
  },
  {
    name: "Pizza Capricioasa",
    description: "ham, dough, tomato sauce, mushrooms, corn",
    category: categories[0],
    price: "24.99",
  },
  {
    name: "Pizza Capricioasa",
    description: "ham, dough, tomato sauce, mushrooms, corn",
    category: categories[0],
    price: "24.99",
  },
  {
    name: "Pizza Capricioasa",
    description: "ham, dough, tomato sauce, mushrooms, corn",
    category: categories[0],
    price: "24.99",
  },
];

const orders = [
  {
    id: "1",
    description: "1 x Pizza Capricioasa, 2 x CocaCola, 3 x Tiramisu",
    total: "123.99",
    status: orderStatuses[0],
  },
  {
    id: "1",
    description: "1 x Pizza Capricioasa, 2 x CocaCola, 3 x Tiramisu",
    total: "123.99",
    status: orderStatuses[0],
  },
  {
    id: "1",
    description: "1 x Pizza Capricioasa, 2 x CocaCola, 3 x Tiramisu",
    total: "123.99",
    status: orderStatuses[0],
  },
  {
    id: "1",
    description: "1 x Pizza Capricioasa, 2 x CocaCola, 3 x Tiramisu",
    total: "123.99",
    status: orderStatuses[0],
  },
];

const CustomerDashboard = () => {
  const [category, setCategory] = React.useState(categories[0]);
  const [cartDrawer, setCartDrawer] = React.useState(false);
  const [tab, setTab] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const renderCustomerMenu = () => {
    return (
      <Box>
        <FormControl>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Restaurant"
            onChange={(event: SelectChangeEvent) =>
              setCategory(event.target.value)
            }
          >
            {categories.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <ContentTable
          header={
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          }
          body={foods.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={() => {
                    /*add row item to cart*/
                  }}
                >
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        />
      </Box>
    );
  };
  const renderCustomerOrders = () => {
    return (
      <Box>
        <ContentTable
          header={
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          }
          body={orders.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        />
      </Box>
    );
  };

  return (
    <>
      <HeaderBar
        isCustomer
        badgeCount={foods.length}
        onClickShoppingCart={() => setCartDrawer(true)}
      />

      <Drawer
        anchor="right"
        open={cartDrawer}
        onClose={() => setCartDrawer(false)}
      >
        <Cart />
      </Drawer>

      <Box mt={4}>
        <Autocomplete
          disablePortal
          options={restaurants}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Restaurant" />}
        />

        <TabContext value={tab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Menu" value="1" />
              <Tab label="Orders" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">{renderCustomerMenu()}</TabPanel>
          <TabPanel value="2">{renderCustomerOrders()}</TabPanel>
        </TabContext>
      </Box>
    </>
  );
};
export default CustomerDashboard;
