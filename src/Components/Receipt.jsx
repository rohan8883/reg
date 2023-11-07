import React from 'react'
import rks from './receipt.module.css'
const Receipt = () => {
  return (
    <div id={rks.header} >
      <div className={rks.header}>
        <div className={rks.card}>
          <h1>
            AKOLA MUNICIPAL CORPORATION
          </h1>
          <div className={rks.receipt_border}>
            <h3>WATER USER CHARGE PAYMENT</h3>
            <h3>RECEIPT</h3>
          </div>
          <div >
            <div className={rks.WATERCONNECTION}>
              WATER CONNECTION FEE DETAILS
            </div>
            <table className={rks.responsive_table}>
              <tbody>
                <tr>
                  <td><h1>fdfdfdfdfg</h1></td>
                  <td><h1>fdfdfdfdfg</h1></td>
                </tr>
                <tr>
                  <td>ffgdfgdf</td>
                  <td><p>fdfdfdfdfg</p></td>
                </tr>
                <tr>
                  <td>ffgdfgdf</td>
                  <td> <p>fdfdfdfdfg</p></td>
                </tr>
                <tr>
                  <td>ffgdfgdf</td>
                  <td><p>fdfdfdfdfg</p></td>
                </tr>
                <tr>
                  <td>ffgdfgdf</td>
                  <td><p>fdfdfdfdfg</p></td>
                </tr>
                <tr>
                  <td>ffgdfgdf</td>
                  <td><p>fdfdfdfdfg</p></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Receipt
