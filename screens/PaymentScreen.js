import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Communications from 'react-native-communications';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 



const PaymentScreen = () => {
        const [paymentInProgress, setPaymentInProgress] = useState(false);
        const [recipientName, setRecipientName] = useState('');
        const [amount, setAmount] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [hasPermission, setHasPermission] = useState(null);
        const [scanned, setScanned] = useState(false);
        const [qrScannerActive, setQrScannerActive] = useState(false);
        const [enteredAmount, setEnteredAmount] = useState(''); // New state for entered amount
        const [enteredPin, setEnteredPin] = useState(''); // New state for entered PIN


  const navigation = useNavigation(); 

  
      

  const handleScan = ({ data }) => {
    setScanned(true);
    setQrScannerActive(false); // Hide QR scanner
    // promptForAmountAndPin(data); // Prompt user for amount and PIN
  };
  
  const promptForAmountAndPin = (qrData) => {
    // Show a custom modal or dialog to prompt for amount and PIN
    // Once the user enters the amount and PIN, send the SMS
    // Example:
    // You can use a library like 'react-native-modal' to show a modal
  
    // Initialize state variables for amount and PIN
   
  
    // Construct the message


    const message = `Scanned QR code data: ${qrData}\nAmount: ${enteredAmount}\nPIN: ${enteredPin}`;
    const recipients = '9892731267'; // Replace with the recipient's phone number
    Communications.textWithoutEncoding(recipients, message);
    // Send SMS
    
  
    // Navigate back to the payment screen
    navigation.navigate('Payment');
  };
  
  const handleBackFromScanner = (navigation) => {
    setQrScannerActive(false);
    navigation.navigate('Payment'); // Navigate back to the previous screen
  };
  

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);



        const handlePayment = () => {
          // Simulate payment process
          setPaymentInProgress(true);
          sendPaymentDataViaSMS();
          setTimeout(() => {
            setPaymentInProgress(false);
          }, 3000); // Simulate payment process for 3 seconds
        }


       

          const sendPaymentDataViaSMS = () => {
            const message = `Recipient's Name: ${recipientName}, Amount: ${amount}, Phone Number: ${phoneNumber}`;
            const recipients = '9892731267'; // Replace with the recipient's phone number
          
            Communications.textWithoutEncoding(recipients, message);
          };
          
        
          
        

        return (
          <View style={styles.container}>
            <Text style={styles.title}>Payment</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Recipient's Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter recipient's name"
                value={recipientName}
                onChangeText={setRecipientName}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Amount</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter amount"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter phone number"
                keyboardType="numeric"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handlePayment}
              disabled={paymentInProgress} // Disable the button during payment process
            >
              <Text style={styles.buttonText}>
                {paymentInProgress ? 'Payment in Process...' : 'Make Payment'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.qrContainer}>
  {qrScannerActive ? (
    <TouchableOpacity style={styles.backButton} onPress={() => handleBackFromScanner(navigation)}>
      <Feather name="arrow-left" size={24} color="white" />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={styles.qrButton}
      onPress={() => {
        setScanned(false);
        setQrScannerActive(true);
      }}
      disabled={scanned}
    >
      <Feather name="camera" size={34} color="white" />
    </TouchableOpacity>
  )}
</TouchableOpacity>

{hasPermission && qrScannerActive && (
  <BarCodeScanner
    onBarCodeScanned={scanned ? undefined : handleScan}
    style={StyleSheet.absoluteFillObject}
  />
)}


      
          </View>
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
        inputContainer: {
          marginBottom: 20,
        },
        label: {
          fontSize: 16,
          marginBottom: 5,
          color: '#333',
        },
        input: {
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 8,
          fontSize: 16,
        },
        button: {
          backgroundColor: '#007BFF',
          borderRadius: 8,
          paddingVertical: 12,
          alignItems: 'center',
        },
        buttonText: {
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
        },
        qrContainer: {
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',
        },
        qrButton: {
          backgroundColor: '#007BFF',
          padding: 10,
          borderRadius: 30,
        },
        backButton: {
          backgroundColor: '#007BFF',
          padding: 10,
          borderRadius: 30,
        },
      });
      
      export default PaymentScreen;
