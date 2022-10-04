import React, { useEffect } from "react";
import { Container, Wrapper, Control, Button, Title } from "./style";

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
            }
          },
        },
        {
          index: 1,
          label: "stream 2",
          h5live: {
            rtmp: {
              streamname: streamNames[1],
            }
          },
        },
        {
          index: 2,
          label: "stream 3",
          h5live: {
            rtmp: {
              streamname: streamNames[2],
            }
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
    },
    metrics: {
      accountId: "nanocosmos1",
      accountKey: "nc1wj472649fkjah",
      userId: "nanoplayer-demo",
      eventId: "nanocosmos-demo",
      statsInterval: 10,
      customField1: "demo",
      customField2: "public",
      customField3: "online resource",
    },
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
      player = new window.NanoPlayer('playerDiv');
    }
    player.pause();
    /*if(player){
      player.setup(config)
        .then( function (config) {
            config.pause()
          }, function (error) {
            console.log(error.message);
          }
        );
    }*/
  }

  function play() {
    if(player){
      player.setup(config)
        .then( function (config) {
            config.play()
          }, function (error) {
            console.log(error.message);
          }
        );
    }
  }

  function unmute() {
    if(player){
      player.setup(config)
        .then( function (config) {
            config.unmute()
          }, function (error) {
            console.log(error.message);
          }
        );
    }
  }

  useEffect(() => {
    initPlayer(config);
  }, []);

  return (
    <Container>
        <Title>H5Live Video Player</Title><hr/>
        <Wrapper>
          <div id="playerDiv"></div>
        </Wrapper>
        <Control>
          <Button  onClick={play} >play</Button>
          <Button  onClick={pause} >pause</Button>
          <Button  onClick={unmute} >unmute</Button>
        </Control>
    </Container>
  );
};

export default Player;
