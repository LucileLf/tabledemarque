import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import { Text, View } from './Themed';
import logoPath from '../assets/images/logo.png';
import playIconPath from '../assets/images/play_icon.png';
import pauseIconPath from '../assets/images/pause_icon.png';
import penaltyYes from '../assets/images/penalty-red.png'
import penaltyNo from '../assets/images/penalty-dark.png'
import { FontAwesome } from '@expo/vector-icons';
// import * as SecureStore from 'expo-secure-store';

import GameOver from './GameOver';
import Colors from '@/constants/Colors';

export interface Team {
  name: string,
  score: number,
  penalties: number
}

export default function Home({ title, setTitle, scores, setScores }) {
  const [time, setTime] = useState(50 * 60); // 50 minutes in seconds
  const [isRunning, setIsRunning] = useState(false); // State to track whether the timer is running
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  const [team1, setTeam1] = useState<Team>({
    name: '',
    score: 0,
    penalties: 0
  });
  const [team2, setTeam2] = useState<Team>({
    name: '',
    score: 0,
    penalties: 0
  });

  const [penaltyStates, setPenaltyStates] = useState([[false, false, false], [false, false, false]]);
  const [gameIsOver, setGameIsOver] = useState(false);
  //HANDLING SESSION DATA
  // async function save(key, value) {
  //   await SecureStore.setItemAsync(key, value);
  // }

  // async function getValueFor(key) {
  //   let result = await SecureStore.getItemAsync(key);
  //   if (result) {
  //     alert("🔐 Here's your value 🔐 \n" + result);
  //   } else {
  //     alert('No values stored under that key.');
  //   }
  // }


  useEffect(() => {
    if (time > 0 && isRunning) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (time === 0) {
      setGameIsOver(true); // Set the game over state to true when time reaches zero
    }
  }, [time, isRunning]);

  if (gameIsOver) {
    return <GameOver winningTeam={team1}/>; // Render the GameOver component instead of Home when the game is over
  }
  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const totalTimeInSeconds = minutes * 60 + seconds;
    console.log("team1", team1);
    console.log("team2", team2);

    if (totalTimeInSeconds === 0) {
      return <GameOver winningTeam={team1}/>; // When time is exactly 0:00
    } else if (totalTimeInSeconds > 30) {
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    } else {
      return "...";
    }
    //return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setIsRunning(prevState => !prevState); // Toggle the running state
  };

  const updateScore = (team: Team, action: string) => {
    let newScore = team.score;
    if (action === 'increase') {
      newScore = ++team.score;
    } else if (action === 'decrease') {
      newScore = --team.score;
    }
    if (team === team1) {
      setTeam1({...team1, score: newScore});
    } else if (team === team2) {
      setTeam2({...team2, score: newScore});
    }
  };

  const handleImageClick = (teamIndex, logoIndex) => {
    setPenaltyStates(prevStates => {
      const newStates = [...prevStates]; // Create a copy of penaltyStates
      newStates[teamIndex][logoIndex] = !newStates[teamIndex][logoIndex]; // Toggle the state of the clicked logo
      return newStates; // Return the updated penaltyStates
    });
  };

  const renderPenaltyLogos = (i) => {
    const teamPenalties = penaltyStates[i]
    //console.log(`penaltyStates[${i}]:`, penaltyStates[i]);
    return teamPenalties.map((isPenalty, index) => (
      <TouchableOpacity key={index} style={styles.penaltyButton} onPress={() => handleImageClick(i, index)}>
        <Image
          style={styles.penaltyLogo}
          source={isPenalty ? penaltyYes : penaltyNo}
          resizeMode="contain"
        />
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.mainContainer}>

{/* LOGO */}
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={logoPath}
          resizeMode="contain"
        />
        {/* <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen:
        </Text> */}
      </View>

{/* TITLE */}
      <View style={styles.titleContainer}>
        {/* <Text style={styles.title} adjustsFontSizeToFit numberOfLines={1}>
            {title}
        </Text> */}
        {/* <TextInput style={styles.title} placeholder={"Titre de l'impro"} onFocus={setTitle("")} onChangeText={setTitle} value={title} numberOfLines={1}/> */}
        <TextInput
      style={styles.title}
      onChangeText={setTitle}
      value={title}
      numberOfLines={1}
      placeholder={placeholderVisible ? "Titre de l'impro" : ''}
      onFocus={() => setPlaceholderVisible(false)}
      onBlur={() => {
        if (!title) {
          setPlaceholderVisible(true);
        }
      }}
    />
      </View>

      {/* BOTTOMCONTAINER BEGIN */}
      <View style={styles.bottomContainer}>

        {/* TEAM1 SCORE + PENALTIES */}
        <View style={styles.scoreContainer}>

          <View style={styles.penaltyContainer}>
            {renderPenaltyLogos(0)}
            {/* <TouchableOpacity style={styles.penaltyButton} onPress={handleImageClick}>
                <Image
                style={styles.penaltyLogo}
                source={isPenalty ? penaltyYes : penaltyNo}
                resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.penaltyButton} onPress={handleImageClick}>
                <Image
                style={styles.penaltyLogo}
                source={isPenalty ? penaltyYes : penaltyNo}
                resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.penaltyButton} onPress={handleImageClick}>
                <Image
                style={styles.penaltyLogo}
                source={isPenalty ? penaltyYes : penaltyNo}
                resizeMode="contain"
                />
              </TouchableOpacity> */}
          </View>

          <View style={styles.pointsContainer}>
            <View style={styles.score}>
              <TouchableOpacity onPress={() => updateScore(team1, 'increase')} style={styles.arrowButton}>
                <FontAwesome name="chevron-up" size={24} color={Colors.blue} />
              </TouchableOpacity>
                <Text style={styles.scoreText}>{team1.score}</Text>
              <TouchableOpacity onPress={() => updateScore(team1, 'decrease')} style={styles.arrowButton}>
                <FontAwesome name="chevron-down" size={24} color={Colors.blue} />
              </TouchableOpacity>
            </View>

          </View>
        </View>

        {/* TIMER */}
        <View style={styles.timeContainer}>
          <TouchableOpacity onPress={toggleTimer} style={styles.playIconContainer}>
            <Image
              source={isRunning ? pauseIconPath : playIconPath}
              style={styles.playIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.time}>{formatTime()}</Text>
        </View>

        {/* TEAM2 SCORE + PENALTIES */}
        <View style={styles.scoreContainer}>

          <View style={styles.pointsContainer}>
            <View style={styles.score}>
              <TouchableOpacity onPress={() => updateScore(team2, 'increase')} style={styles.arrowButton}>
                <FontAwesome name="chevron-up" size={24} color={Colors.blue} />
              </TouchableOpacity>
              <Text style={styles.scoreText}>{team2.score}</Text>
              <TouchableOpacity onPress={() => updateScore(team2, 'decrease')} style={styles.arrowButton}>
                <FontAwesome name="chevron-down" size={24} color={Colors.blue} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.penaltyContainer}>
            {renderPenaltyLogos(1)}
            {/* <TouchableOpacity style={styles.penaltyButton} onPress={handleImageClick}>
                <Image
                style={styles.penaltyLogo}
                source={isPenalty ? penaltyYes : penaltyNo}
                resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.penaltyButton} onPress={handleImageClick}>
                <Image
                style={styles.penaltyLogo}
                source={isPenalty ? penaltyYes : penaltyNo}
                resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.penaltyButton} onPress={handleImageClick}>
                <Image
                style={styles.penaltyLogo}
                source={isPenalty ? penaltyYes : penaltyNo}
                resizeMode="contain"
                />
              </TouchableOpacity> */}
          </View>

        </View>
      </View>
{/* BOTTOMCONTAINER END */}

{/* TEAMNAMES CONTAINER BEGIN */}
        <View style={styles.teamNamesContainer}>
          <TextInput
            style={styles.teamName}
            onChangeText={(name)=>setTeam1({...team1, name})}
            value={team1.name}
            placeholder={placeholderVisible ? "Equipe 1" : ''}
            onFocus={() => setPlaceholderVisible(false)}
            onBlur={() => {
              if (!team1.name) {
                setPlaceholderVisible(true);
              }}}
            multiline
          />
          <View style={styles.teamsNamesMargin}></View>

          <TextInput
              style={styles.teamName}
              onChangeText={(name)=>setTeam2({...team2, name})}
              value={team2.name}
              placeholder={placeholderVisible ? "Equipe 2" : ''}
              onFocus={() => setPlaceholderVisible(false)}
              onBlur={() => {
                if (!team2.name) {
                  setPlaceholderVisible(true);
                }}}
              multiline
            />
        </View>
{/* TEAMNAMES CONTAINER END */}

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:  {
    backgroundColor: Colors.blue,
    height: '100vh',
  },
  logoContainer: {
    //paddingTop: 5,
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    //border: '1px solid Yellow',
    //objectFit: 'contain',
    // zIndex: 1000,
  },
  logo: {
    maxHeight: '100%',
    //width: '100%',
  },
  titleContainer: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    //border: '1px solid green'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    fontFamily: 'Cochin',
    textAlign: 'center'
  },
  timeContainer: {
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    //flexDirection: 'column',
    width: '20%',
    //aspectRatio: 1,
    height: '100%',
    //marginBottom: '5vh',
    flex: 1,
    //position: 'relative', // Ensure container is positioned relatively
    //zIndex: 0,
    //padding: 10,
    border: '1px solid yellow',
  },
  playIconContainer: {
    flex: 0.7,
    //justifyContent: 'flex-start',
    alignItems: 'center',
    //height: '70%',
    maxWidth: '100%',
    //aspectRatio: 1,
    border: '1px solid white',
    //objectFit: 'cover',
    //marginLeft: '0'
  },
  playIcon: {
    border: '1px solid green',
    width: '60%',
    height: '100%',
    aspectRatio: 1,
    opacity: 0.5,
    // maxHeight: '60%',
  },
  time: {
    flex: 0.3,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    opacity: 0.5,
    //zIndex: 1
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '30%',
    backgroundColor: Colors.blue,
    border: "1px solid red",
    paddingHorizontal: 'auto'
    //zIndex: 1000,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: "40%",
    height: "100%",
    //border: "1px solid green",
    backgroundColor: Colors.blue,
  },
  pointsContainer: {
    //flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    aspectRatio: 1,
    //maxWidth: "70%",
    //paddingRight: 0,
    backgroundColor: Colors.blue,
    //border: '2px solid red',
    //zIndex: 100,
  },
  score: {
    height: '100%', // Adjust the height as necessary
    aspectRatio: 1, // This ensures the width is always equal to the height, making it a circle
    justifyContent: 'center', // Centers children vertically within the circle
    alignItems: 'center', // Centers children horizontally within the circle
    backgroundColor: 'white',
    borderRadius: '50%', // This large borderRadius value effectively makes the element a circle
    borderWidth: 2, // Optional: adds a border to the circle for visual clarity
    borderColor: 'transparent', // Adjust the border color as needed
  },
  scoreText: {
    color: Colors.blue,
    fontSize: 50, // Adjust font size as needed for the circle size
    fontWeight: 'bold',
  },
  arrowButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    //zIndex: 1000,
  },
  penaltyContainer:{
    backgroundColor: Colors.blue,
    height: "auto",
    width: "30%",
    //border: '1px solid green',
    justifyContent: 'space-evenly',
    //alignItems: 'center',
  },
  penaltyButton: {
    //position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '33%',
  },
  penaltyLogo: {
    width: '100%',
    height: '100%'
  },
  teamNamesContainer: {
    justifyContent: 'space-between',
    marginHorizontal: '8%',
    backgroundColor: Colors.blue,
    height: '20%',
    flexDirection: 'row',
    //alignItems: 'center',
  },
  teamName:{
    color: "white",
    fontWeight: "bold",
    fontSize: 60,
    maxWidth: "50%",
  },
  teamsNamesMargin: {
    //flex: 1,
    //width: '25%',
    backgroundColor: Colors.blue
  }
});
