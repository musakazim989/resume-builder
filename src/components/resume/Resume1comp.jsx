import React, { forwardRef } from "react"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"

export const Resume1comp = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-white p-5">
      <table>
        <tr>
          <td>
            <h1
              className="text-primary"
              style={{ fontWeight: "bold", fontSize: "40px" }}
            >
              Maria Dela Cruz
            </h1>
            <p
              className="mt-4 mb-0"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Address:{" "}
              <span style={{ fontWeight: "normal", fontSize: "18px" }}>
                Cebu City, Cebu,Philipines,6000
              </span>
            </p>
            <p
              className="mb-0"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Phone:{" "}
              <span style={{ fontWeight: "normal", fontSize: "18px" }}>
                (555) 432-1000
              </span>
            </p>
            <p
              className="mb-0"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Email:{" "}
              <span style={{ fontWeight: "normal", fontSize: "18px" }}>
                mdelacruz@gmail.com
              </span>
            </p>
          </td>
        </tr>
        <tr>
          <td className="pt-4">
            <p style={{ fontWeight: "normal", fontSize: "18px" }}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s.
            </p>
          </td>
        </tr>
        <tr>
          <td className="mt-5">
            <h3
              className="text-primary mb-0"
              style={{ fontWeight: "bold", fontSize: "24px" }}
            >
              Skills
            </h3>
            <hr className="m-0" style={{ border: "2px solid #c2c2c2" }} />
          </td>
        </tr>
        <tr>
          <td>
            <table>
              <td style={{ paddingLeft: "150px" }}></td>
              <td style={{ paddingLeft: "20px" }}>
                <ul>
                  <li>Store opening and closing</li>
                  <li>Sales expertise</li>
                  <li>Accute Money Handling</li>
                  <li>Store Merhchandising</li>
                </ul>
              </td>
            </table>
          </td>
        </tr>
        <tr>
          <td className="mt-5">
            <h3
              className="text-primary mb-0"
              style={{ fontWeight: "bold", fontSize: "24px" }}
            >
              Work History
            </h3>
            <hr className="m-0" style={{ border: "2px solid #c2c2c2" }} />
          </td>
        </tr>
        <tr>
          <td style={{ paddingTop: "10px" }}>
            <table>
              <td style={{ width: "150px", fontWeight: "bold" }}>
                2015-03-Current
              </td>
              <td style={{ paddingLeft: "20px" }}>
                <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                  Retail Sales Associate <br />
                  <span
                    style={{
                      fontWeight: "normal",
                      fontStyle: "italic",
                      fontSize: "16px",
                    }}
                  >
                    H&M, Cebu City
                  </span>
                </p>
                <ul>
                  <li>Store opening and closing</li>
                  <li>Sales expertise</li>
                  <li>Accute Money Handling</li>
                  <li>Store Merhchandising</li>
                </ul>
              </td>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{ paddingTop: "10px" }}>
            <table>
              <td style={{ width: "150px", fontWeight: "bold" }}>
                2015-03-Current
              </td>
              <td style={{ paddingLeft: "20px" }}>
                <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                  Retail Sales Associate <br />
                  <span
                    style={{
                      fontWeight: "normal",
                      fontStyle: "italic",
                      fontSize: "16px",
                    }}
                  >
                    H&M, Cebu City
                  </span>
                </p>
                <ul>
                  <li>Store opening and closing</li>
                  <li>Sales expertise</li>
                  <li>Accute Money Handling</li>
                  <li>Store Merhchandising</li>
                </ul>
              </td>
            </table>
          </td>
        </tr>

        <tr>
          <td className="mt-5">
            <h3
              className="text-primary mb-0"
              style={{ fontWeight: "bold", fontSize: "24px" }}
            >
              Work History
            </h3>
            <hr className="m-0" style={{ border: "2px solid #c2c2c2" }} />
          </td>
        </tr>
        <tr>
          <td style={{ paddingTop: "10px" }}>
            <table>
              <td style={{ width: "150px", fontWeight: "bold" }}></td>
              <td style={{ paddingLeft: "20px" }}>
                <p
                  style={{ fontWeight: "bold", fontSize: "18px", margin: "0" }}
                >
                  Retail Sales Associate <br />
                  <span
                    style={{
                      fontWeight: "normal",
                      fontStyle: "italic",
                      fontSize: "16px",
                    }}
                  >
                    H&M, Cebu City
                  </span>
                </p>
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "18px",
                    margin: "0",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </td>
            </table>
          </td>
        </tr>
      </table>
    </div>
  )
})
