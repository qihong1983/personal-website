import React, { PureComponent } from 'react'
import Link from 'next/link'
import { Motion, spring } from 'react-motion'
import Drawer from 'react-drag-drawer'

import { SocialModal, Head, Title } from '../components'

export default class Landing extends PureComponent {

  constructor (props) {
    super(props)

    this.state = {
      expanded: false
    }
  }

  toggle = () => {
    this.setState((state) => {
      return {
        expanded: !state.expanded
      }
    })
  }

  render () {
    const { expanded } = this.state

    return (
      <div>
        <Head />

        <div className='body'>

          <section className='container'>
            <div className='card' style={{padding: '20rem 0 10rem'}}>
              <div className='content'>
                <div className='intro'>
                  <Title content='👋 Jack Hanford' size={4} />
                  <div>I'm a senior software engineer at <a href='https://eaze.com' target='_blank'>Eaze</a>.</div>
                </div>

                <div className='button-row'>
                  <button className='beauty-button' onClick={this.toggle}>Get in touch</button>
                </div>
              </div>

              <div style={{overflow: 'hidden'}}>
                <div className='down-arrow'>&rsaquo;</div>
              </div>
            </div>

            <div className='card' style={{paddingTop: '20rem'}}>
              <div className='content'>
                <Title content='🔥 Side Projects' />

                <Link prefetch href='/projects'>
                  <a className='beauty-button'>Open source</a>
                </Link>

                <div>
                  <Link href='/chirp'>
                    <a target='_blank'>Chirp 🐦</a>
                  </Link>

                  <br />
                  <Link href='/instachrome'>
                    <a target='_blank'>Instachrome</a>
                  </Link>

                  <br />

                  <Link href='/youtube-darkmode'>
                    <a target='_blank'>Youtube Darkmode</a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Drawer
          open={expanded}
          onRequestClose={this.toggle}
          contentLabel='social modal'
          negativeScroll={-1}
        >
          <SocialModal toggle={this.toggle} />
        </Drawer>

        <style jsx>{`
          .body {
            width: 100%;
            display: flex;
            justify-content: center;
            position: relative;
            margin: 6rem auto;
          }

          a {
            color: #d40052;
            font-weight: 600;
            text-decoration: underline;
          }

          .container {
            width: 100%;
            color: #32325d;
            box-shadow: 0px -10px 35px rgba(0, 0, 0, 0.2);
            background-color: white;
            padding: 2rem;
          }

          .intro {
            font-size: 2rem;
            line-height: 2rem;
            letter-spacing: 0.03em;
            opacity: 0.9;
            margin: 1rem 0 2rem;
            text-align: center;
          }

          .intro > div:first-child {
            margin-bottom: 2rem;
          }

          .intro > div:last-child {
            font-size: 1.6rem;
            line-height: 2rem
          }

          .card {
            width: 100%;
            color: #32325d;
            padding: 2rem 4rem;
            position: relative;
            margin: 0 auto;
          }

          @media(max-width: 767px) {
            .card {
              padding-top: 1rem;
            }
          }

          .content {
            animation: fadeIn 0.6s linear;
            max-width: 50rem;
            margin: 0 auto;
            text-align: center;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .button-row {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;
          }

          .beauty-button {
            display: block;
            line-height: 4rem;
            padding: 0 1.4rem;
            background: #fff;
            border-radius: 0.4rem;
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: .025em;
            color: #32325d;
            text-decoration: none;
            border: 0px;
            cursor: pointer;
            outline: none;
            transition: all 0.25s ease-out;
            border: 2px solid #db594b;
            color: #db594b;
            font-weight: bold;
            font-family: Brandon;
          }

          .beauty-button:hover {
            transform: scale(1.1);
          }

          .down-arrow {
            margin-top: 10rem;
            width: 100%;
            text-align: center;
            font-size: 6rem;
            background: linear-gradient(-45deg, #D20B54 0%, #FFB849 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: pulseDown 2s ease-out infinite;
          }

          @keyframes hue {
            from {
              filter: hue-rotate(0deg);
            }

            to {
              filter: hue-rotate(-360deg);
            }
          }


          @keyframes pulseDown {
            from {
              transform: translateY(-1rem) rotate(90deg);
            }
            50% {
              transform: translateY(1rem) rotate(90deg);
            }
            to {
              transform: translateY(-1rem) rotate(90deg);
            }
          }
        `}</style>
      </div>
    )
  }
}
