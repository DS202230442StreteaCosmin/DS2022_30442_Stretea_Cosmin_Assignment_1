import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
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
import {
  FormControl,
  Icon,
  InputLabel,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import RestaurantModal from "../components/RestaurantModal/RestaurantModal";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import FoodModal from "../components/FoodModal/FoodModal";
import ContentTable from "../components/ContentTable/ContentTable";

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

const AdminDashboard = () => {
  const [restaurant, setRestaurant] = React.useState(restaurants[0]);
  const [category, setCategory] = React.useState(categories[0]);
  const [orderStatus, setOrderStatus] = React.useState(orderStatuses[0]);
  const [restaurantModal, setRestaurantModal] = React.useState(false);
  const [foodModal, setFoodModal] = React.useState(false);
  const [tab, setTab] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const handleClose = () => {
    setRestaurantModal(false);
    setFoodModal(false);
  };

  const renderAdminMenu = () => {
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

        <IconButton onClick={() => setFoodModal(true)}>
          <Icon fontSize="large">add_circle</Icon>
        </IconButton>

        <FoodModal
          isOpen={foodModal}
          onClose={handleClose}
          onSubmit={() => {}}
        />

        <ContentTable
          header={
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Price</TableCell>
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
            </TableRow>
          ))}
        />
      </Box>
    );
  };
  const renderAdminOrders = () => {
    return (
      <Box>
        <FormControl>
          <InputLabel>Category</InputLabel>
          <Select
            value={orderStatus}
            label="Restaurant"
            onChange={(event: SelectChangeEvent) =>
              setOrderStatus(event.target.value)
            }
          >
            {orderStatuses.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>

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
              <TableCell align="right">
                <Select
                  defaultValue={row.status}
                  onChange={(event: SelectChangeEvent) => {
                    //change status of the order
                  }}
                >
                  <MenuItem value={orderStatuses[0]}>
                    {orderStatuses[0]}
                  </MenuItem>
                  <MenuItem value={orderStatuses[1]}>
                    {orderStatuses[1]}
                  </MenuItem>
                  <MenuItem value={orderStatuses[2]}>
                    {orderStatuses[2]}
                  </MenuItem>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        />
      </Box>
    );
  };

  return (
    <>
      <HeaderBar />
      <Box mt={4}>
        <FormControl>
          <InputLabel>Restaurant</InputLabel>
          <Select
            value={restaurant}
            label="Restaurant"
            onChange={(event: SelectChangeEvent) =>
              setRestaurant(event.target.value)
            }
          >
            {restaurants.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <IconButton onClick={() => setRestaurantModal(true)}>
          <Icon fontSize="large">add_circle</Icon>
        </IconButton>

        <RestaurantModal
          isOpen={restaurantModal}
          onClose={() => setRestaurantModal(false)}
          onSubmit={() => {}}
        />

        <TabContext value={tab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Menu" value="1" />
              <Tab label="Orders" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">{renderAdminMenu()}</TabPanel>
          <TabPanel value="2">{renderAdminOrders()}</TabPanel>
        </TabContext>
      </Box>
    </>
  );
};
export default AdminDashboard;
