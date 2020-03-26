import React from 'react';
import MaterialTable from 'material-table';

export default function VisSykkelsStatus({stations}) {

  return (
    <MaterialTable
      title="Oslo Bysykkel"
      columns={[
        { title: 'ID', field: 'station_id' },
        { title: 'Station Name', field: 'name' },
        { title: 'Available Bikes', field: 'num_bikes_available', type: 'numeric' },
        { title: 'Available Docks', field: 'num_docks_available', type: 'numeric' },
        { title: 'Capacity', field: 'capacity', type: 'numeric' },
        { title: 'Installed', field: 'is_installed' },
        { title: 'Renting', field: 'is_renting' },
        { title: 'Returning', field: 'is_returning' },
        { title: 'Last Reported', field: 'last_reported' },
        { title: 'Adress', field: 'address' },
      ]}
      data={stations}
      options={{
        paging: true
      }}
    />
  )
}