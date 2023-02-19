import { useState } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.module.scss';

function TableRow(props) {
  const { english, transcription, russian } = props.word;
  const [edited, setEdited] = useState(false);

  return (
    <tr>
      {edited ? (
        <>
          <td>
            <input defaultValue={english}></input>
          </td>
          <td>
            <input defaultValue={transcription}></input>
          </td>
          <td>
            <input defaultValue={russian}></input>
          </td>
        </>
      ) : (
        <>
          <td>{english}</td>
          <td>{transcription}</td>
          <td>{russian}</td>
        </>
      )}

      <td>
        {edited ? (
          <>
            <img
              onClick={() => setEdited(false)}
              styleName="img-row"
              src="./img/cancel.png"
              alt=""
            />
            <img styleName="img-row" src="./img/save.png" alt="" />
          </>
        ) : (
          <>
            <img
              onClick={() => setEdited(true)}
              styleName="img-row"
              src="./img/edit.png"
              alt=""
            />
            <img styleName="img-row" src="./img/delete.png" alt="" />
          </>
        )}
      </td>
    </tr>
  );
}

export default CSSModules(TableRow, styles);
