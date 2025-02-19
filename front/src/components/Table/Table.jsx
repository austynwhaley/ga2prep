import React from "react";

const Table = ({ data }) => {

  const dateformat = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "2-digit", month: "2-digit", day: "2-digit" });
  }

  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Number</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
        {data.map((claim) => (
          <tr key={claim.claim_id}>
            <td>{claim.claim_id}</td>
            <td>{claim.claimant_name}</td>
            <td>{claim.claim_number}</td>
            <td>{claim.claim_amount}</td>
            <td>{dateformat(claim.claim_date)}</td>
            <td>{claim.status}</td>
          </tr>
        ))}
      </tbody>
      
    </table>
  );
};

export default Table;
