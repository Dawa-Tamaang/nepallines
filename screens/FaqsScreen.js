import TopBar from '@/components/TopBar';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const FAQScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [faqData, setFaqData] = useState([
    { id: '1', question: 'What is Viral Pitch?', answer: 'At Viral Pitch, we expect at a day’s start is you, better and happier than yesterday. We have got you covered to share your concern or check our FAQs.', isOpen: false },
    { id: '2', question: 'How to apply for a campaign?', answer: 'You can apply for a campaign directly from the campaign details page on our app.', isOpen: false },
    { id: '3', question: 'How to know the status of a campaign?', answer: 'The status of your campaign can be tracked in the "My Campaigns" section.', isOpen: false },
    { id: '4', question: 'How to contact support?', answer: 'You can contact support via the provided email or through the "Send a Message" button.', isOpen: false },
  ]);

  const toggleFAQ = (id) => {
    setFaqData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const renderFAQItem = ({ item }) => (
    <View style={styles.faqItem}>
      <TouchableOpacity onPress={() => toggleFAQ(item.id)} style={styles.faqQuestion}>
        <Text style={styles.questionText}>{item.question}</Text>
        <Text style={styles.toggleIcon}>{item.isOpen ? '-' : '+'}</Text>
      </TouchableOpacity>
      {item.isOpen && <Text style={styles.answerText}>{item.answer}</Text>}
    </View>
  );

  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <TopBar title="Help & Support" showBackIcon={true} />
      <View style={styles.container}>
        <Text style={styles.heading}>
          We’re here to help you with anything and everything on ViralPitch
        </Text>
        <Text style={styles.subheading}>
          At Viral Pitch, we expect at a day’s start is you, better and happier than yesterday. We have got you covered—share your concern or check our frequently asked questions listed below.
        </Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Help"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <Text style={styles.heading}>FAQ</Text>
        <FlatList
          data={filteredFAQs}
          keyExtractor={(item) => item.id}
          renderItem={renderFAQItem}
          contentContainerStyle={styles.faqList}
        />
        <View style={{ height: 1, backgroundColor: '#E5E5E5' }} />
        <View style={{ marginTop: 20 }}>
          <Text style={styles.contactText}>Still stuck? Help is just a mail away</Text>
          <TouchableOpacity style={styles.contactButton} onPress={() => navigation.navigate("chatwithus")}>
            <Text style={styles.contactButtonText}>Send a message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 14,
    color: '#606060',
    marginBottom: 16,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  faqList: {
    paddingBottom: 16,
  },
  faqItem: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
  },
  faqQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  toggleIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  contactText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    textAlign: 'center',
  },
  contactButton: {
    backgroundColor: '#005AA7',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  contactButtonText: {
    color: '#fff',
  },
  answerText: {
    marginTop: 8,
    fontSize: 14,
    color: '#606060',
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FAQScreen;