import React, { Component } from 'react';
import './OsloBySykkel.css';
import VisSykkelsStatus from '../vissykkelsstatus/VisSykkelsStatus';

const stasjonInformasjonUrl = `https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json`;
const stasjonStatusUrl = `https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json`;

const mergeArrayById = (array1, array2) =>
array1.map(item1 => ({
        ...item1,
        ...array2.find((item2) => (item2.station_id === item1.station_id) && item2)
    }));

class OsloBySykkel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        stasjonDetaljertInformasjon: [],
        erOppdatert : false
    }
}

async componentDidMount() {
    const stasjonInformasjonResponse = await fetch(stasjonInformasjonUrl);
    const stasjonInformasjon = await stasjonInformasjonResponse.json();

    const stasjonStatusResponse = await fetch(stasjonStatusUrl);
    const stasjonStatus = await stasjonStatusResponse.json();

    const stasjonDetaljertInformasjon = await mergeArrayById(stasjonInformasjon.data.stations, stasjonStatus.data.stations);

    this.setState({
      stasjonDetaljertInformasjon : stasjonDetaljertInformasjon,
      erOppdatert : true
    });
}

  render() {
    const { erOppdatert, stasjonDetaljertInformasjon } = this.state;

  if(!erOppdatert) {
      return(<div className="OsloBySykke1"> Lasting ...  </div>);
    }

  return (
    <div className="OsloBySykkel">
        <VisSykkelsStatus stations = {stasjonDetaljertInformasjon} />
    </div>
  );
  }
}

export default OsloBySykkel;
