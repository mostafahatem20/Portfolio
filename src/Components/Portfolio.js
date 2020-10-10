import React, { useState } from 'react'
import elesol1 from '../images/elesol1.png'
import elesol2 from '../images/elesol2.png'
import lirten1 from '../images/lirten1.png'
import lirten2 from '../images/lirten2.png'
import tbh1 from '../images/tbh1.png'
import tbh2 from '../images/tbh2.png'
import bobian1 from '../images/bobian1.png'
import bobian2 from '../images/bobian2.png'

export default function Portfolio() {
  const [liclass, setLi] = useState('item repo')
  const [liclass1, setLi1] = useState('item repo')
  const [liclass2, setLi2] = useState('item repo')
  const [liclass3, setLi3] = useState('item repo')

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
          <td style={{ width: '22.5%' }}></td>
          <td style={{ width: '55%' }}>
            <h1 className="titlep">Web Developer Portfolio</h1>
            <h3 className="bodyp">
              Developing websites and companies' systems using modern
              programming technologies. Check out my skills and latest web
              software development portfolio projects.
            </h3>
            <div className="filters hidden">
              <ul>
                <li className="active" title="Show All Projects">
                  <span>Skills:</span>
                </li>
                <li title="Filter by FRONT-END">
                  <span>FRONT-END</span>
                </li>
                <li title="Filter by BACK-END">
                  <span>BACK-END</span>
                </li>
                <li title="Filter by HTML5">
                  <span>HTML</span>
                </li>
                <li title="Filter by SASS">
                  <span>CSS</span>
                </li>
                <li title="Filter by LESS">
                  <span>JAVA</span>
                </li>
                <li title="Filter by JAVASCRIPT">
                  <span>JAVASCRIPT</span>
                </li>
                <li title="Filter by NODEJS">
                  <span>NODEJS</span>
                </li>
                <li title="Filter by ELECTRON">
                  <span>BOOTSTRAP</span>
                </li>
                <li title="Filter by REACTJS">
                  <span>REACTJS</span>
                </li>
                <li title="Filter by METEOR">
                  <span>MATERIAL UI</span>
                </li>
                <li title="Filter by COFFEESCRIPT">
                  <span>AWS</span>
                </li>
                <li title="Filter by MONGODB">
                  <span>MONGODB</span>
                </li>
                <li title="Filter by MYSQL">
                  <span>SQL</span>
                </li>
                <li title="Filter by BACKBONEJS">
                  <span>NOSQL</span>
                </li>
                <li title="Filter by UI/UX DESIGN">
                  <span>POSTGRESQL</span>
                </li>
                <li title="Filter by ANIMATIONS">
                  <span>PYTHON</span>
                </li>
                <li title="Filter by GAME DESIGN">
                  <span>C/C#</span>
                </li>
              </ul>
            </div>
            <ul className="grid-list cf_">
              <li
                className={liclass}
                onMouseOver={() => setLi('item repo hover ready')}
                onMouseOut={() => setLi('item repo')}
              >
                <a className="screen" href="https://elesol.com.au/">
                  <div className="bar">
                    <h2>Elesol Website</h2>
                    <i></i>
                  </div>
                  <div className="main">
                    <picture className="back">
                      <source srcset={elesol1} type="image/png" />
                      <source srcset={elesol1} type="image/png"></source>
                      <img src={elesol1}></img>
                    </picture>
                    <div class="tags">
                      <div>
                        <ul>
                          <li>BOOTSTRAP</li>
                          <li>HTML5</li>

                          <li>CSS MODULES</li>

                          <li>NODEJS</li>

                          <li>REACTJS</li>
                          <li>REDUX</li>
                        </ul>
                      </div>
                    </div>
                    <picture class="imgs">
                      <source srcset={elesol2} type="image/png" />
                      <source srcset={elesol2} type="image/png" />
                      <img src={elesol2} />
                    </picture>
                  </div>
                </a>
              </li>
              <li
                className={liclass1}
                onMouseOver={() => setLi1('item repo hover ready')}
                onMouseOut={() => setLi1('item repo')}
              >
                <a className="screen" href="https://bobianelevators.com/">
                  <div className="bar">
                    <h2>Bobian Website</h2>
                    <i></i>
                  </div>
                  <div className="main">
                    <picture className="back">
                      <source srcset={bobian1} type="image/png" />
                      <source srcset={bobian1} type="image/png"></source>
                      <img src={bobian1}></img>
                    </picture>
                    <div class="tags">
                      <div>
                        <ul>
                          <li>BOOTSTRAP</li>
                          <li>HTML5</li>

                          <li>CSS MODULES</li>

                          <li>NODEJS</li>

                          <li>REACTJS</li>
                          <li>REDUX</li>
                        </ul>
                      </div>
                    </div>
                    <picture class="imgs">
                      <source srcset={bobian2} type="image/png" />
                      <source srcset={bobian2} type="image/png" />
                      <img src={bobian2} />
                    </picture>
                  </div>
                </a>
              </li>
              <li
                className={liclass2}
                onMouseOver={() => setLi2('item repo hover ready')}
                onMouseOut={() => setLi2('item repo')}
              >
                <a className="screen" href="https://lirten.com/">
                  <div className="bar">
                    <h2>Lirten Website</h2>
                    <i></i>
                  </div>
                  <div className="main">
                    <picture className="back">
                      <source srcset={lirten1} type="image/png" />
                      <source srcset={lirten1} type="image/png"></source>
                      <img src={lirten1}></img>
                    </picture>
                    <div class="tags">
                      <div>
                        <ul>
                          <li>BOOTSTRAP</li>
                          <li>HTML5</li>

                          <li>CSS MODULES</li>

                          <li>NODEJS</li>

                          <li>REACTJS</li>
                          <li>REDUX</li>
                        </ul>
                      </div>
                    </div>
                    <picture class="imgs">
                      <source srcset={lirten2} type="image/png" />
                      <source srcset={lirten2} type="image/png" />
                      <img src={lirten2} />
                    </picture>
                  </div>
                </a>
              </li>
              <li
                className={liclass3}
                onMouseOver={() => setLi3('item repo hover ready')}
                onMouseOut={() => setLi3('item repo')}
              >
                <a className="screen" href="https://thebusinesshub.space/">
                  <div className="bar">
                    <h2>TBH Website</h2>
                    <i></i>
                  </div>
                  <div className="main">
                    <picture className="back">
                      <source srcset={tbh1} type="image/png" />
                      <source srcset={tbh1} type="image/png"></source>
                      <img src={tbh1}></img>
                    </picture>
                    <div class="tags">
                      <div>
                        <ul>
                          <li>BOOTSTRAP</li>
                          <li>HTML5</li>

                          <li>CSS MODULES</li>

                          <li>NODEJS</li>

                          <li>REACTJS</li>
                          <li>REDUX</li>
                        </ul>
                      </div>
                    </div>
                    <picture class="imgs">
                      <source srcset={tbh2} type="image/png" />
                      <source srcset={tbh2} type="image/png" />
                      <img src={tbh2} />
                    </picture>
                  </div>
                </a>
              </li>
            </ul>
          </td>
          <td style={{ width: '22.5%' }}></td>
        </tr>
      </tbody>
    </table>
  )
}
