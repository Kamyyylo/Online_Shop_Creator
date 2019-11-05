import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer font-small  fixed-bottom footer">
        <div class=" copyright footer-copyright py-3 float-left  ">
          © 2019 Copyright: Kamil Kamyszek
        </div>
        <div class="contact py-3 text-right  ">
          Contact: tempemail@gmail.com
        </div>
      </footer>
    );
  }
}
export default Footer;
