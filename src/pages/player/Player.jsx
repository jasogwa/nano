import React, { useEffect } from "react";
import {
  Container,
  Wrapper,
  Button,
  Title,
  Video,
  WrapLeft,
  WrapRight,
} from "./style";

const Player = () => {
  var player;
  var streamNames = ["HX26g-NRbx9", "HX26g-uVn3M", "HX26g-VbAxm"];

  var config = {
    source: {
      defaults: {
        service: "bintu",
      },
      entries: [
        {
          index: 0,
          label: "stream 1",
          h5live: {
            rtmp: {
              streamname: streamNames[0],
            },
          },
        },
        {
          index: 1,
          label: "stream 2",
          h5live: {
            rtmp: {
              streamname: streamNames[1],
            },
          },
        },
        {
          index: 2,
          label: "stream 3",
          h5live: {
            rtmp: {
              streamname: streamNames[2],
            },
          },
        },
      ],
      options: {
        adaption: {
          rule: "deviationOfMean2",
        },
      },
      startIndex: 2,
    },
    playback: {
      autoplay: true,
      automute: true,
      muted: true,
      latencyControlMode: "classic",
    },
    style: {
      displayMutedAutoplay: true,
      width: "auto",
      height: "auto",
      buttonCursor: "pointer",
      backgroundColor: "#ed7d0e",
      symbolColor : "#ed7d0e",
      controlBarColor : "#000000FF"
    }
  };

  function initPlayer() {
    player = new window.NanoPlayer("playerDiv");
    player.setup(config).then(
      function (config) {
        console.log("setup success");
        console.log("config: " + JSON.stringify(config));
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  function pause() {
    if (!player) {
      player = new window.NanoPlayer("playerDiv");
    }
    try {
      player.pause();
    } catch (error) {
      console.log(error);
    }
  }

  function play() {
    if (!player) {
      player = new window.NanoPlayer("playerDiv");
    }
    try {
      player.play();
    } catch (error) {
      console.log(error);
    }
  }

  function unmute() {
    if (!player) {
      player = new window.NanoPlayer("playerDiv");
    }
    try {
      player.unmute();
    } catch (error) {
      console.log(error);
    }
  }

  function fullscreen() {
    if (!player) {
      player = new window.NanoPlayer("playerDiv");
    }
    player
      .requestFullscreen()
      .then(function () {
        console.log("requestFullscreen resolved");
      })
      .catch(function (err) {
        // error reasons can be 'denied' or 'disabled' (e.g. in audio player mode)
        console.log("requestFullscreen rejected: " + err.reason);
      });
  }

  function switchStream() {
    if (!player) {
      player = new window.NanoPlayer("playerDiv");
    }
    player.switchStream(1).then(
      function (config) {
        console.log(
          "switch stream initialized with config: " + JSON.stringify(config)
        );
      },
      function (error) {
        console.log(error);
      }
    );
  }

  useEffect(() => {
    initPlayer(config);
  }, []);

  return (
    <>
      <Container>
        <Title>H5Live Video Player</Title>
        <Video id="playerDiv" />
        <Wrapper>
          <WrapLeft>
            <Button onClick={play}>play</Button>
            <Button onClick={pause}>pause</Button>
            <Button onClick={fullscreen}>fullscreen</Button>
          </WrapLeft>
          <WrapRight>
            <Button onClick={switchStream}>switch</Button>
            <Button onClick={unmute}>unmute</Button>
          </WrapRight>
        </Wrapper>
      </Container>
    </>
  );
};

export default Player;
