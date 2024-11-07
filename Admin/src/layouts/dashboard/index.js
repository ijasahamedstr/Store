import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Material-UI icons
import { ShoppingCart, Storefront, PersonAdd, LocalMall } from "@mui/icons-material";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import CategoryIcon from "@mui/icons-material/Category";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          {/* Product Statistics */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<ShoppingCart />}
                title="Products"
                count={281}
                color="primary"
              />
            </MDBox>
          </Grid>

          {/* Today's Users */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<HourglassEmptyIcon />}
                title="Pending Orders"
                count="23"
                color="warning"
              />
            </MDBox>
          </Grid>

          {/* Revenue */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon={<Storefront />}
                title="Completed Orders"
                count="345"
              />
            </MDBox>
          </Grid>

          {/* Followers */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon={<DeliveryDiningIcon />}
                title="Completed Shipping"
                count="91"
              />
            </MDBox>
          </Grid>

          {/* Active Customers */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<PersonAdd />}
                title="Active Customers"
                count={281}
                color="info"
              />
            </MDBox>
          </Grid>

          {/* Duplicate Cards (Example repetition) */}
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<CategoryIcon />}
                title="Top Categories"
                count={281}
                color="primary"
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon={<CategoryIcon />}
                title="Mid Categories"
                count="2,300"
                color="secondary"
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon={<CategoryIcon />}
                title="End Categories"
                count="34k"
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon={<PersonAdd />}
                title="Active Seller"
                count="+91"
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
