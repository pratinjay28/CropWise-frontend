import Layout from "../components/Layout";

function Dashboard(){

  return(
    <Layout>
      <div style={{padding:30}}>
        <h2>Dashboard</h2>

        <ul>
          <li>Crop suitability insight</li>
          <li>Yield prediction overview</li>
          <li>Profit analysis summary</li>
        </ul>

        <p>(Charts can be added later)</p>
      </div>
    </Layout>
  );
}

export default Dashboard;
