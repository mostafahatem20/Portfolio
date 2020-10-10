import React from 'react'
import { Image } from 'react-bootstrap'
import me from '../images/avatar1.jpeg'
export default function About(props) {
  return (
    <table className="Page">
      <tbody>
        <tr>
          <td className="first">
            <div className="icon-bar">
              <p className="follow">Follow me</p>
              <a href="https://web.facebook.com/mhhali" className="facebook">
                <i class="fa fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/mostafahassan99/"
                className="instagram"
              >
                <i class="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/mostafahatem20" className="github">
                <i class="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mostafahatem/"
                className="linkedin"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </div>
          </td>
          <td className="second">
            <div class="content">
              <Image
                src={me}
                roundedCircle
                style={{
                  width: '100px',
                  marginBottom: '20px',
                }}
              />
              <h3 className="title">Hello, my name is Mostafa Abdelrahman.</h3>
              <p className="description">
                I am a Computer Science and Engineering undergraduate at the
                German University in Cairo and a full-stack developer with 1
                year of experince using MERN stack.
                <br />
                Forward-thinking individual with refined interpersonal and
                multitasking skills. Looking forward to always learning new
                skills and joining progressive organizations to provide
                assistance in serveral interesting technologies.
                <br /> Feel free to take a look at my latest projects on the{' '}
                <span className="herftext fancy">
                  <a
                    itemprop="significantLink"
                    onClick={() => props.handleActive('port', false)}
                  >
                    web portfolio page.
                  </a>
                </span>{' '}
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
