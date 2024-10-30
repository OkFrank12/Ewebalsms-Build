import React from "react";
import styled from "styled-components";

class ExportCSVButton extends React.Component {
  exportDataToCSV = () => {
    const data = [
      {
        phoneNo1: 2349054634220,
        phoneNo2: 23481242423221,
        phoneNo3: 23490909045343,
      },
    ];

    const csvContent = this.converToCSV(data);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "PhoneNo_CSV_Template.csv");
    link.click();
  };

  converToCSV(data: {}[]) {
    const headers = Object.keys(data[0]);
    const rows = data.map((obj: any) => headers.map((header) => obj[header]));
    const headerRow = headers.join(",");
    const csvRows = [headerRow, ...rows.map((row) => row.join(","))];
    return csvRows.join("\n");
  }

  render() {
    return (
      <div>
        <Button onClick={this.exportDataToCSV}>Download CSV Template</Button>
      </div>
    );
  }
}

export default ExportCSVButton;

const Button = styled.div`
  padding: 10px;
  background-color: #043260;
  transition: all 350ms;
  color: white;
  cursor: pointer;

  &:hover {
    border-radius: 5px;
  }
`;
