import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported
import Swal from "sweetalert2"; // Ensure Swal is imported
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Editcategories() {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MDTypography variant="h6" color="white">
                  Add New Category
                </MDTypography>
              </MDBox>

              {/* Add Category Form */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form onSubmit={handleSubmit}>
                  {/* Category Name */}
                  <TextField
                    label="Category Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="Categorie"
                    value={Categorie}
                    onChange={handleChange}
                  />

                  {/* Category Description */}
                  <TextField
                    label="Category Description"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="Categoriedec"
                  />

                  {/* Dropdown for Show on Menu */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Show on Menu?</InputLabel>
                    <Select label="Show on Menu?" sx={{ height: "40px" }} name="Categoriesstatus">
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Image Upload Field */}
                  <label htmlFor="file-upload">
                    <input
                      id="file-upload"
                      name="photo"
                      accept="image/*"
                      type="file"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    <Button
                      variant="outlined"
                      component="span"
                      fullWidth
                      sx={{
                        mb: 2,
                        textTransform: "none",
                        borderColor: "#1976d2",
                        color: "#1976d2",
                        "&:hover": {
                          borderColor: "#1565c0",
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                    >
                      Upload Image
                    </Button>
                  </label>

                  {/* Image Preview */}
                  {imagePreview && (
                    <MDBox
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        mb: 2,
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        padding: "8px",
                      }}
                    >
                      <img
                        src={imagePreview}
                        alt="Preview"
                        style={{
                          width: "100%",
                          height: "auto",
                          maxWidth: "200px", // Limit the image size
                          borderRadius: "4px",
                        }}
                      />
                    </MDBox>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ color: "#FFFFFF" }}
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Editcategories;
