import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState, useRef, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import TopBar from "../components/TopBar"; 

const ChatwithUs = () => {
  const [message, setMessage] = useState("");
  const scrollViewRef = useRef();
  const [chat, setChat] = useState([
    {
      id: "1",
      text: "Nice to meet you. To start a chat just send a message to us.",
      sender: "support",
    },
    {
      id: "2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      sender: "user",
    },
    {
      id: "3",
      text: "One moment please. An agent will be available soon.",
      sender: "support",
    },
    {
      id: "4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum suscipit purus et pretium.",
      sender: "user",
    },
  ]);

  const [loaded] = useFonts({
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [chat]);

  if (!loaded) return null;

  const handleSend = () => {
    if (!message.trim()) return;
    setChat([...chat, { id: Date.now().toString(), text: message, sender: "user" }]);
    setMessage("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <TopBar title="Customer Support" showBackIcon={true} />
            <Text style={styles.statusText}>Online</Text>
            <Text style={styles.timestamp}>Today, 7:03 PM</Text>

            <ScrollView
              ref={scrollViewRef}
              contentContainerStyle={styles.chatArea}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              {chat.map((msg) => (
                <View
                  key={msg.id}
                  style={[
                    styles.messageBubble,
                    msg.sender === "user" ? styles.userBubble : styles.supportBubble,
                  ]}
                >
                  <Text style={[
                    styles.messageText,
                    msg.sender === "user" ? styles.userText : styles.supportText
                  ]}>{msg.text}</Text>
                </View>
              ))}
            </ScrollView>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Type your message..."
                placeholderTextColor="#999"
                value={message}
                onChangeText={setMessage}
                style={styles.input}
                multiline
              />
              <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                <Ionicons name="send" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatwithUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  statusText: {
    textAlign: "center",
    marginTop: 2,
    fontSize: 12,
    color: "#4caf50",
    fontWeight: "500",
  },
  timestamp: {
    textAlign: "center",
    fontSize: 11,
    color: "#888",
    marginBottom: 10,
  },
  chatArea: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  messageBubble: {
    maxWidth: "75%",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  supportBubble: {
    backgroundColor: "#f1f1f1",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },
  userBubble: {
    backgroundColor: "#2563eb",
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },
  messageText: {
    fontSize: 13,
    fontFamily: "poppinsMedium",
  },
  userText: {
    color: "#fff",
  },
  supportText: {
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    maxHeight: 120,
    minHeight: 45,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  sendButton: {
    backgroundColor: "#2563eb",
    borderRadius: 25,
    padding: 10,
    marginLeft: 10,
  },
});
