import axios from "axios";

export default {
  getAllVendor: function () {
    return axios.get("/api/businessVendor/").then((result) => result.data);
  },
  //Get BusinessOwner details by Id
  getVendorDetails: function (_id) {
    return axios
      .get(`/api/businessVendor/${_id}`)
      .then((result) => result.data);
  },
  //Get ALL Customer Form List by BusinessOwner Id
  getCustomerList: function (_id) {
    return axios.get(`/api/customerForm/${_id}`).then((result) => result.data);
  },
  // Saves Contact Details from Mobile User Application
  saveCustomerDetails: function (_id, customerDetails) {
    return axios
      .post(`/api/customerForm/${_id}`, customerDetails)
      .then((result) => result.data);
  },
  saveTheme: function (id, themeObject) {
    return axios.post(`/api/mAppTheme/${id}`, themeObject).then((res) => {
      console.log(res.data);
    });
  },

  getTheme: function (id) {
    return axios.get(`/api/mAppTheme/${id}`).then((res) => res.data);
  },
};
