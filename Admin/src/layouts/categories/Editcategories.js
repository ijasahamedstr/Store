import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
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
  const [categorie, setCategorie] = useState({
    Categorie: "",
    Categoriedec: "",
    Categoriesstatus: "",
    photo: null, // To store the selected image file
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategorie((prevCategorie) => ({
      ...prevCategorie,
      [name]: value,
    }));
  };

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setCategorie((prevCategorie) => ({
        ...prevCategorie,
        photo: file, // Store the file for later use (e.g., in the form submission)
      }));
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Create FormData to handle file uploads
    const formData = new FormData();
    formData.append("Categorie", categorie.Categorie);
    formData.append("Categoriedec", categorie.Categoriedec);
    formData.append("Categoriesstatus", categorie.Categoriesstatus);
    if (categorie.photo) {
      formData.append("photo", categorie.photo); // Append image if exists
    }

    try {
      // Send data to the backend using axios
      const response = await axios.put("http://localhost:8000/categories", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Check if the update was successful
      if (response.status === 200) {
        Swal.fire("Success", "Category updated successfully", "success");
      } else {
        Swal.fire("Error", "Failed to update category", "error");
      }
    } catch (error) {
      Swal.fire("Error", "An error occurred while updating the category", "error");
    } finally {
      setLoading(false);
    }
  };

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
                  Edit Category
                </MDTypography>
              </MDBox>

              {/* Add Category Form */}
              <MDBox pt={3} px={2} sx={{ paddingBottom: "24px" }}>
                <form noValidate onSubmit={handleSubmit}>
                  {/* Category Name */}
                  <TextField
                    label="Category Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="Categorie"
                    value={categorie.Categorie}
                    onChange={handleChange}
                    required
                  />

                  {/* Category Description */}
                  <TextField
                    label="Category Description"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    name="Categoriedec"
                    value={categorie.Categoriedec}
                    onChange={handleChange}
                    required
                  />

                  {/* Dropdown for Show on Menu */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Show on Menu?</InputLabel>
                    <Select
                      label="Show on Menu?"
                      sx={{ height: "40px" }}
                      name="Categoriesstatus"
                      value={categorie.Categoriesstatus}
                      onChange={handleChange}
                      required
                    >
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
                      style={{ display: "none" }}
                      onChange={handleImageChange}
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
