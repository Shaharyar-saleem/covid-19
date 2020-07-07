import React from 'react';
import NavBar from './Components/Navbar';
import DataCards from './Components/DataCards';
import DailyData from './Components/DailyData';
import CountryPicker from './Components/CountryPicker';
import { fetchData } from './API';

class App extends React.Component{
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
      const fetchedData = await fetchData(country);
      this.setState({ data: fetchedData, country: country });
    }
    render(){
      const { data, country } = this.state;
      return (
        <div>
          <NavBar />
          <DataCards data={data}/>
          <CountryPicker  handleCountryChange={this.handleCountryChange}/>
          <DailyData data={data} country={country}/>
        </div>
      );
    }
  
}

export default App;
