import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const psychiatristsData = [
  {
    id: '1',
    name: 'Dr. John Doe',
    image: 'https://picsum.photos/id/1015/80/80',
    ratePerMinute: 2.5,
    experience: '10 years',
    availableMethods: ['Call', 'Video Call', 'Chat'],
  },
  {
    id: '2',
    name: 'Dr. Jane Smith',
    image: 'https://picsum.photos/id/1016/80/80',
    ratePerMinute: 3.0,
    experience: '8 years',
    availableMethods: ['Call', 'Chat'],
  },
  {
    id: '3',
    name: 'Dr. Emily White',
    image: 'https://picsum.photos/id/1017/80/80',
    ratePerMinute: 4.0,
    experience: '5 years',
    availableMethods: ['Video Call', 'Chat'],
  },
];

const HomeScreen = ({ navigation }) => {
  const [selectedPsychiatrist, setSelectedPsychiatrist] = useState(null);

  const handleSelectPsychiatrist = (psychiatrist) => {
    setSelectedPsychiatrist(psychiatrist);
    Alert.alert(
      'Select a Communication Method',
      `You have selected ${psychiatrist.name}. Rate: $${psychiatrist.ratePerMinute}/min`,
      [
        { text: 'Call', onPress: () => handleStartSession('Call') },
        { text: 'Video Call', onPress: () => handleStartSession('Video Call') },
        { text: 'Chat', onPress: () => handleStartSession('Chat') },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const handleStartSession = (method) => {
    if (selectedPsychiatrist) {
      Alert.alert(
        `Starting ${method}`,
        `You are now starting a ${method} session with ${selectedPsychiatrist.name}.`
      );
      // You can navigate to the specific screen for call, video call, or chat
      // navigation.navigate('CallScreen'); (example for Call)
    }
  };

  const renderPsychiatristItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.profileImage} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.experience}>Experience: {item.experience}</Text>
        <Text style={styles.rate}>Rate: ${item.ratePerMinute}/min</Text>
      </View>

      {/* Single Action Button for Communication Methods */}
      <TouchableOpacity 
        style={styles.iconButton} 
        onPress={() => handleSelectPsychiatrist(item)}
      >
        <Icon name="comments" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mental Care</Text>
      <FlatList
        data={psychiatristsData}
        renderItem={renderPsychiatristItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Solid background color
    paddingHorizontal: width * 0.02,
    paddingTop: height * 0.05,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.02,
    color: 'white',
  },
  listContainer: {
    paddingBottom: height * 0.02,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'black',
    marginBottom: height * 0.02,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  experience: {
    fontSize: 14,
    color: '#888',
  },
  rate: {
    fontSize: 16,
    color: '#4CAF50',
  },
  iconButton: {
    marginLeft: 15,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#3498db', // Button color
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default HomeScreen;