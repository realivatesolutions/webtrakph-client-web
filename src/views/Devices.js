import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
import Header from "../components/Header";

class Devices extends React.Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };
  state = {
    devices: []
  };
  componentDidMount() {
    fetch("https://wetrakph-api.firebaseapp.com/api/v1/devices")
      .then(res => res.json())
      .then(data => {
        console.log(data["devices"][0]);
        this.setState({ devices: data["devices"] });
        console.log(this.state.devices);
      })
      .catch(console.log);
  }
  getDevices = devices => {
    let deviceList = []
    for (let id in devices) {
      let device = (
        <tr key={id}>
          <td>{devices[id].deviceName}</td>
          <td>{devices[id].deviceType}</td>
        </tr>
      );
      deviceList.push(device);
    }
    return deviceList;
  };
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Devices</h3>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Type</th>
                    </tr>
                  </thead>
                  <tbody>{this.getDevices(this.state.devices)}</tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(Devices);
