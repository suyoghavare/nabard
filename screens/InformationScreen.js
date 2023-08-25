import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InformationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Information</Text>
      <Text style={styles.infoText}>
        Welcome to our Banking App Information section. Here, you will find valuable information about banking and how to perform transactions.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac quam nec nunc varius tempus. Nulla facilisi.
        {/* Add more informative text here */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'left',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'justify',
    paddingHorizontal: 20,
  },
});

export default InformationScreen;
