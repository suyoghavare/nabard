import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const LoansScreen = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [income, setIncome] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [panCardNumber, setPanCardNumber] = useState('');

  const handleApply = () => {
    // Implement your loan application logic here
    // For example, you can validate the fields and submit the application
    // You can also show a confirmation message to the user
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Apply for a Loan</Text>
      <Text style={styles.subtitle}>Loan Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Loan Amount ($)"
        value={loanAmount}
        onChangeText={setLoanAmount}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Annual Income ($)"
        value={income}
        onChangeText={setIncome}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Employment Type"
        value={employmentType}
        onChangeText={setEmploymentType}
      />
       <TextInput
        style={styles.input}
        placeholder="Aadhar Number"
        keyboardType="numeric"
        value={aadharNumber}
        onChangeText={setAadharNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Pan Card Number"
        value={panCardNumber}
        onChangeText={setPanCardNumber}
      />
      <Text style={styles.subtitle}>Loan Information</Text>
      <Text style={styles.infoText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lorem
        euismod, dignissim lectus eu, viverra velit.
      </Text>
      <Text style={styles.subtitle}>Disclaimer</Text>
      <Text style={styles.disclaimerText}>
        This information provided is for demonstration purposes only. The loan
        application is not real and will not result in an actual loan approval.
      </Text>
      <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 15,
  },
  disclaimerText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 30,
  },
  applyButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoansScreen;
