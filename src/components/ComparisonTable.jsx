function ComparisonTable({ crops }) {

  if(!crops || crops.length===0) return null;

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Crop</th>
          <th>Yield</th>
          <th>Cost</th>
          <th>Profit</th>
          <th>Suitability</th>
        </tr>
      </thead>
      <tbody>
        {crops.map((c,i)=>(
          <tr key={i}>
            <td>{c.crop}</td>
            <td>{c.yield}</td>
            <td>{c.cost}</td>
            <td>{c.profit}</td>
            <td>{c.suitability}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ComparisonTable;
