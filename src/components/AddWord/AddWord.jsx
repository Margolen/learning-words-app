import Form from 'react-bootstrap/Form';

function AddWord() {
  return (
    <>
      <tr>
        <td>
          <Form.Control
            placeholder="Type an english word"
            aria-label="English Word"
            aria-describedby="basic-addon2"
          />
        </td>
        <td>
          <Form.Control
            placeholder="Type a transcrption"
            aria-label="Transcrption"
            aria-describedby="basic-addon2"
          />
        </td>
        <td>
          <Form.Control
            placeholder="Type a russian word"
            aria-label="Russian Word"
            aria-describedby="basic-addon2"
          />
        </td>
        {/* <img src="./img/add.png" alt="" /> */}
      </tr>
    </>
  );
}

export default AddWord;
