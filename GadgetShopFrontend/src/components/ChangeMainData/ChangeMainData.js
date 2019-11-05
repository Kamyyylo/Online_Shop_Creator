import React, { Component } from "react";

class ChangeMainData extends Component {
  render() {
    return (
      <div class="add-PBI">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <h4 class="display-4 text-center">Change Main Data</h4>
              <br></br>
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    name="shopName"
                    placeholder="Name of the shop"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    name="pictureOnTheDashboard"
                    placeholder="Address to picture placed on the dashboard"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    name="contactEmail"
                    placeholder="Contact email on the footer"
                  />
                </div>
                <input type="submit" class="btn btn-primary btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ChangeMainData;
