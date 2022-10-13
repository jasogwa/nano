import React, { useEffect } from "react";
import {
  Container,
  Wrapper,
  Button,
  Title,
  Video,
  WrapLeft,
  WrapRight,
  Input,
} from "./style";
import {
  Fullscreen,
  Tune,
  Pause,
  PlayArrow,
  VolumeOff,
  VolumeUp,
} from "@material-ui/icons";

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
      startIndex: 0,
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
      symbolColor: "#ed7d0e",
      controlBarColor: "#000000FF",
    },
    events: {
      onUnmute: true,
      onMute: false,
    },
  };

  function initPlayer() {
    player = new window.NanoPlayer("playerDiv");
    player.setup(config).then(
      function (success) {
        console.log("setup success");
        console.log("config: " + JSON.stringify(success));
      },
      function (error) {
        console.log(error.message);
      }
    );
  }

  function pause() {
    if (!player) {
      return;
    }
    try {
      player.pause();
    } catch (error) {
      console.log(error);
    }
  }

  function play() {
    if (!player) {
      return;
    }
    try {
      player.play();
    } catch (error) {
      console.log(error);
    }
  }

  function unmute() {
    if (!player) {
      return;
    }
    try {
      player.unmute();
      document.getElementById("unmute").style.display = "none";
      document.getElementById("mute").style.display = "";
    } catch (error) {
      console.log(error);
    }
  }

  function mute() {
    if (!player) {
      return;
    }
    try {
      player.mute();
      document.getElementById("unmute").style.display = "";
      document.getElementById("mute").style.display = "none";
    } catch (error) {
      console.log(error);
    }
  }

  function fullscreen() {
    if (!player) {
      return;
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
      return;
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

  function setVolume(e, value) {
    if (!player) {
      return;
    }
    if (value < 0) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    }
    var volume = value / 100;
    player.setVolume(volume);
  }

  useEffect(() => {
    initPlayer();
  }, []);

  return (
    <Container>
      <Title>H5Live Video Player</Title>
      <Video id="playerDiv" />
      <Wrapper>
        <WrapLeft>
          <Button onClick={fullscreen}>
            <Fullscreen />
          </Button>
          <Button onClick={play}>
            <Pause />
          </Button>
          <Button onClick={pause}>
            <PlayArrow />
          </Button>
          <Button onClick={unmute} id="unmute" style={{ display: "" }}>
            <VolumeOff />
          </Button>
          <Button onClick={mute} id="mute" style={{ display: "none" }}>
            <VolumeUp />
          </Button>
        </WrapLeft>
        <WrapRight>
          <Button onClick={switchStream}>
            <Tune />
          </Button>
          <Input
            onInput={(e) => setVolume(null, e.target.value)}
            onChange={(e) => setVolume(null, e.target.value)}
            type="range"
            min="0"
            max="100"
          />
        </WrapRight>
      </Wrapper>
    </Container>
  );
};

export default Player;
