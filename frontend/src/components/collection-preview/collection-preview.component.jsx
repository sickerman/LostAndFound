import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = (props) => (
  <div className='collection-preview'>
    <table>
      <thead>
        <tr>
          <th>Date Found</th>
          <th>Area/Location</th>
          <th>Valuables</th>
          <th>Non-Valuables</th>
          <th>Perishable</th>
          <th>Finder</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => (
          <tr key={item.id}>
            <td>{item.datefound}</td>
            <td>{item.area}</td>
            <td className={item.valuable ? '' : 'v-padding'}>
              {item.valuable}
            </td>
            <td className={item.nonvaluable ? '' : 'nv-padding'}>
              {item.nonvaluable}
            </td>
            <td className={item.perishable ? '' : 'p-padding'}>
              {item.perishable}
            </td>
            <td>{item.finder}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CollectionPreview;
