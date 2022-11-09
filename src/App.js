import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  FlatList
} from "react-native";

const App = () => {
  const user = "Anand";
  const [userInput, setUserInput] = useState("");
  const [finalText, setFinalText] = useState("");
  const logo = {
    uri: "https://reactnative.dev/img/tiny_logo.png",
    width: 64,
    height: 64
  };

  const flatData = [
    { key: "Devin" },
    { key: "Dan" },
    { key: "Dominic" },
    { key: "Jackson" },
    { key: "James" },
    { key: "Joel" },
    { key: "John" },
    { key: "Jillian" },
    { key: "Jimmy" },
    { key: "Julie" }
  ];

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Hello {user}</Text>
        <Image source={logo} />
        <Text>Learn React Native</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png"
          }}
          style={{ width: 200, height: 200 }}
        />
        <TextInput
          style={{
            borderColor: "gray",
            borderWidth: 1
          }}
          placeholder="Enter your query..."
          onChangeText={(newText) => setUserInput(newText)}
          onSubmitEditing={() => setFinalText("done")}
        />
        <Text>{userInput}</Text>
        <Text>{finalText}</Text>
        <FlatList
          data={flatData}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
    </ScrollView>
  );
};

export default App;
