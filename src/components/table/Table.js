import './Table.css'

const Table = ({details}) => {
    return (
      <table>
        <thead>
          <tr>
            {Object.keys(details[0]).map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              {Object.values(detail).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  export default Table;