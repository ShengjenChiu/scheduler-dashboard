import React, { Component } from "react";
import classnames from "classnames";

import Loading from "./Loading";
import Panel from "./Panel";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];

class Dashboard extends Component {
  state = {
    loading: false,
    focused: null
  };

  //Class property with arrow function
  // selectPanel = id => {
  //   this.setState({ 
  //     focused: id 
  //   });
  // };
  
  //instance method
  // selectPanel(id) {
  //   this.setState({ 
  //     focused: null
  //   });
  // }

  selectPanel(id) {
    this.setState(previousState => ({
      focused: previousState.focused !== null ? null : id
    }));
  }

  render() {
    const dashboardClasses = classnames("dashboard", { "dashboard--focused": this.state.focused });
    //const { id, label, value, onSelect } = this.props; 


    if (this.state.loading) {
      return <Loading />;
    }

    const panelArr = (this.state.focused ? data.filter(panel => this.state.focused === panel.id) : data)
    .map((panel) => {
      return (

        // <section className="dashboard__panel" onClick={(event) => onSelect(id)}>
          <Panel
            key={panel.id}
            // id={panel.id}
            label={panel.label}
            value={panel.value}
            onSelect={() => this.selectPanel(panel.id)}
            //onClick={() => onSelect(id)}
          
          />

        //</section>
      );
    });


    return (
      <main className={dashboardClasses}> 
        {panelArr}
      </main>
    );

  }
}

export default Dashboard;
