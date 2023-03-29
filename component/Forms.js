import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";

export default function Forms() {
  return (
    <View style={styles.body}>
      <View>
        <Text>Email</Text>
        <TextInput placeholder="Enter your email" style={{ borderWidth: 1 }} />
      </View>

      <View style={{ marginTop: 10 }}>
        <Text>Password</Text>
        <TextInput
          secureTextEntry
          placeholder="Enter your password"
          style={{ borderWidth: 1 }}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          // do stuff
          console.log("clicked");
        }}
        style={styles.button}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#f3f3f3",
        flex: 1,
        padding: 20,
      },
      button: {
        backgroundColor: "tomato",
        color: "#fff",
        padding: 15,
        marginTop: 20,
      },
});
