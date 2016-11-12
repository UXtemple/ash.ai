// Edit at https://askash.usepages.com/home/~
// Learn how to use this Panel in your React app at https://howto.usepanels.com
import { Image, Text, Font, Horizontal, Vertical } from 'panels/blocks';
import React, { Component, PropTypes } from 'react'
export default class Home extends Component {
  render() {
    const { props } = this
    return (
      <Vertical
        data-block={props['data-block'] || 'home-0'}
        data-block-name={props['data-block-name']}
        style={{
          backgroundColor: "white",
          width: props.width,
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
          paddingBottom: 100
        }}
        styleBackground={{
          backgroundImage: "url(https://files.usepages.today/askAsh/askAshBack1.jpg)"
        }}
      >
        <Font family='Montserrat' weight='700' />
        <Font family='Montserrat' />
        <Horizontal
          data-block={"home-1"}
          style={{
            height: 450
          }}
        >
          <Image
            data-block={"home-2"}
            src={props.images[Math.ceil(Math.random()*100)%props.images.length].url}
            style={{
              height: 450
            }}
            styleWrapper={{
              width: "100%",
              position: "absolute"
            }}
          />
          <Text
            data-block={"home-3"}
            style={{
              color: "rgba(255,255,255,1)",
              fontFamily: "Montserrat, sans-serif",
              fontSize: 200,
              fontWeight: "700",
              marginTop: 50,
              marginLeft: -35,
              letterSpacing: -10,
              lineHeight: 0.6
            }}
            text={"Ask\nAsh\n"}
          />
        </Horizontal>
        <Text
          data-block={"home-4"}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: 34,
            marginTop: 50,
            fontWeight: "700",
            marginLeft: 20,
            marginRight: 30,
            lineHeight: "1.2"
          }}
          text={"Your personal design and development mentor, Ash, is always here to guide you..."}
        />
        <Text
          data-block={"home-5"}
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 12,
            fontFamily: "Montserrat, sans-serif"
          }}
          text={"Coming soon to other platforms. For now Ash is a part of Pages."}
        />
        <Horizontal
          data-block={"home-6"}
          style={{
            textDecoration: "none",
            justifyContent: "center",
            backgroundColor: "black",
            paddingTop: 15,
            paddingRight: 15,
            paddingLeft: 15,
            paddingBottom: 15,
            borderRadius: 40,
            width: 150,
            color: "white",
            marginLeft: 20,
            fontFamily: "Montserrat, sans-serif",
            textTransform: "uppercase",
            fontSize: 14,
            fontWeight: 700,
            marginTop: 30,
            transition: "all 0.2 ease-in-out"
          }}
          styleHover={{
            backgroundColor: "white",
            color: "black"
          }}
          teleportTo={"https://usepages.today"}
        >
          <Text
            data-block={"home-7"}
            text={"Use Pages"}
          />
        </Horizontal>
        {props.children}
      </Vertical>
    )
  }
}
// TODO
Home.propTypes = {
}
Home.defaultProps = {
  "images": [{
    "url": "https://media0.giphy.com/media/G0vaYbZDJV0cM/giphy.gif",
    "height": 480,
    "width": 480
  },{
    "url": "https://media0.giphy.com/media/xT8qBm9l6T0jRwTWrC/giphy.gif",
    "height": 480,
    "width": 480
  },{
    "url": "https://media0.giphy.com/media/VZxIV00dqepFu/giphy.gif",
    "height": 480,
    "width": 480
  },{
    "url": "https://media0.giphy.com/media/l0LIYv9tJFIVHxF5u/giphy.gif",
    "height": 480,
    "width": 480
  }]
}
Home.style = props => (
  {
    backgroundColor: "white",
    width: props.width,
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    paddingBottom: 100
  }
)
Home.styleBackground = props => (
  {"backgroundImage":"url(https://files.usepages.today/askAsh/askAshBack1.jpg)"}
)