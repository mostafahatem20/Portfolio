import React from 'react'
import Resume from './Mostafa_hatem.pdf'
export default function Contact() {
  return (
    <table
      style={{
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        animation: 'fadeIn 1s',
        marginTop: '100px',
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              paddingLeft: '75px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            className="contact"
          >
            <header className="header">
              <h1>Get in touch</h1>
              <p>
                If you wanna get in touch, talk to me about a project
                collaboration or just say hi,
                <br />
                send an email to{' '}
                <span class="fancy">
                  <a href="mailto:mostafahatem300@gmail.com">
                    mostafahatem300@gmail.com
                  </a>
                </span>{' '}
                and ~let's talk.
              </p>
            </header>

            <button type="submit" className="download">
              <a href={Resume} download="MostafaAbdelrahman">
                Get My Resume!
              </a>
            </button>
            <div>
              <h4>Let's get social</h4>
              <p>
                Follow my profiles on Facebook, Instagram, GitHub and Linkedin
                from the bar
                <br />
                on the right.
              </p>
            </div>
          </td>
          <td className="first">
            <div className="icon-bar1">
              <p className="follow1">Follow me</p>
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
        </tr>
      </tbody>
    </table>
  )
}
