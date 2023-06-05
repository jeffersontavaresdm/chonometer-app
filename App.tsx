import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import chronometerStyles from "./components/styles/chonometer.styles";
import ChronometerBGIMG from "./components/ChonometerBGIMG";

const App = () => {
  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
  const { timer, isRunning, start, reset } = useChronometer(setIsDisabled);

  React.useEffect(() => {
    if (timer === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(isRunning);
    }
  }, [isRunning]);

  return (
    <View style={chronometerStyles.container}>
      <ChronometerBGIMG />
      <Text style={chronometerStyles.timer}>{timer == 0 ? "0" : timer.toFixed(1)}</Text>
      <View style={chronometerStyles.buttonArea}>
        <TouchableOpacity
          style={chronometerStyles.button}
          onPress={start}>
          <Text style={chronometerStyles.buttonText}>{isRunning ? "PAUSE" : "START"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[chronometerStyles.button, { opacity: isDisabled ? 0.5 : 1 }]}
          onPress={reset}
          disabled={isDisabled}>
          <Text style={chronometerStyles.buttonText}>CLEAN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const useChronometer = (setIsDisabled: (isDisable: boolean) => void) => {
  const [timer, setTimer] = React.useState<number>(0.0);
  const [timerId, setTimerId] = React.useState<number>(0);
  const [isRunning, setIsRunning] = React.useState<boolean>(false);

  const start = () => {
    if (timerId !== 0) {
      clearInterval(timerId);
      setIsRunning(false);
      setTimerId(0);
    } else {
      let handlerInterval = () => {
        setTimer((prevState) => prevState + 0.1);
      };

      const intervalId = setInterval(handlerInterval, 100);

      setIsRunning(true);
      setTimerId(intervalId);
    }
  };

  const reset = () => {
    setTimer(0);
    setIsDisabled(true);
  };

  return { timer, isRunning, start, reset };
};
export default App;
