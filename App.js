import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "./components/Row";
import Button from "./components/Button";
import Connect from "./components/Connect";
import Quotes from "./components/Quotes";
import Calculator, { initialState } from "./util/Calculator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});

const dummy = [ 
  {
      "id": 1,
      "title": "Hello World",
      "content": "Try Reactjs is awesome. Can't wait to learn more",
      "date": "12-04-2017",
      "slug": "hello-world"
  },
  {
      "id": 2,
      "title": "Setup React",
      "content": "Setting up react is easy. Learn more about it!",
      "date": "1-28-2018",
      "slug": "setup-react"
  }
];

export default class App extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => Calculator(type, value, state));
  };

 

  render() {
  
    // Quotes Fetch API function using functional components, comment below block to view calculator
    return(

      <View>
      <Quotes />
      </View>

    );

    // Calculator Return function using class components
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.handleTap("clear")}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.handleTap("posneg")}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.handleTap("percentage")}
            />
            <Button
              text="/"
              theme="secondary"
              onPress={() => this.handleTap("operator", "/")}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
            <Button
              text="x"
              theme="secondary"
              onPress={() => this.handleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
            <Button
              text="-"
              theme="secondary"
              onPress={() => this.handleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
            <Button
              text="+"
              theme="secondary"
              onPress={() => this.handleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button
              text="0"
              size="double"
              onPress={() => this.handleTap("number", 0)}
            />
            <Button text="." onPress={() => this.handleTap("number", ".")} />
            <Button
              text="="
              theme="secondary"
              onPress={() => this.handleTap("equal")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
