import React, { PureComponent } from 'react'
import Link from 'next/link'
import { Motion, spring } from 'react-motion'
import Drawer from 'react-drag-drawer'

import { SocialModal, Head, Title, Article } from '../components'

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

          <div className='card'>
            <div className='content'>
              <div className='intro'>
                <Title content='👋 Jack Hanford' size={4} />
                <div>I'm a senior software engineer at <a href='https://eaze.com' target='_blank' className='work'>Eaze</a>.</div>
              </div>

              <div className='button-row'>
                <button className='beauty-button' onClick={this.toggle}>
                  Get in touch
                </button>
              </div>

            </div>
          </div>

          <div className='card'>
            <div className='content'>

              <div className='projects'>
                <Article
                  path='/instachrome'
                  name='Instachrome'
                  about='Browse Instagram from anywhere'
                />

                <Article
                  path='/chirp'
                  name='Chirp 🐦'
                  about='A desktop twitter application built for all platforms'
                />

                <Article
                  path='https://github.com/hanford/react-drag-drawer'
                  name='React Drag Drawer'
                  about='Mobile first ReactJS modal component with native touch gesture support'
                />

                <Article
                  path='https://github.com/hanford/react-motion-kanban'
                  name='React Kanban'
                  about='Custom react drag and drop interface built trello style but with better animations'
                />

                <Article
                  path='/youtube-darkmode'
                  name='Youtube Darkmode 🐦'
                  about='Google is redesigning youtube and also adding darkmode, this enables it right now'
                />
              </div>

              <Link prefetch href='/projects'>
                <a className='view-all'>View all</a>
              </Link>
            </div>
          </div>
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
            flex-direction: column;
            margin: 6rem auto;
          }

          .project-title {
            color: #d40052;
            margin: 0;
            font-size: 1.8rem;
          }

          .project-about {
            margin-top: 0;
          }

          a {
            color: #d40052;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          .projects {
            text-align: left;
            max-width: 100%;
            width: 70rem;
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
            margin: 1rem 0 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
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
            background-color: white;
          }

          @media(max-width: 767px) {
            .card:first-of-type {
              padding-top: 5rem;
              padding-bottom: 0;
            }
          }

          .content {
            animation: fadeIn 0.6s linear;
            max-width: 55rem;
            margin: 0 auto;
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

          .arrow-container {
            margin-top: 10rem;
            width: 100%;
            text-align: center;
            display: flex;
            align-items: center;
            flex-direction: column;
            overflow: hidden;
          }

          .down-arrow {
            font-size: 6rem;
            background: linear-gradient(-45deg, #D20B54 0%, #FFB849 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: pulseDown 4s ease-out infinite;
          }

          @keyframes hue {
            from {
              filter: hue-rotate(0deg);
            }

            to {
              filter: hue-rotate(-360deg);
            }
          }

          .view-all {
            text-align: center;
            width: 100%;
            display: block;
            color: #D20B54;
            font-weight: bold;
            text-decoration: none;
            margin-top: 1rem;
          }

          .view-all:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
    )
  }
}
