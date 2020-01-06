import React, { PureComponent } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class HeaderLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const toggle = () => {
      this.setState(state => ({
        isOpen: !state.isOpen,
      }));
    };
    const { children } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Recipe App :v</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {children}
      </div>
    );
  }
}

export default HeaderLayout;
