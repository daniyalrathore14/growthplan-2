import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

type Weather = 'Sunny' | 'Cloudy' | 'Rainy' | 'Snowy';
type TimeTuple = [Weather, string]; // [weather, localTime]
interface Country {
  name: string;
  weatherTime: TimeTuple; 
  temperatureF: number; 
  utcOffset: number; 
}

const countries: Country[] = [
  { name: 'New York, USA', weatherTime: ['Sunny', '10:00 AM'], temperatureF: 75, utcOffset: -4 },
  { name: 'London, UK', weatherTime: ['Cloudy', '3:00 PM'], temperatureF: 60, utcOffset: 1 },
  { name: 'Paris, France', weatherTime: ['Rainy', '4:00 PM'], temperatureF: 65, utcOffset: 2 },
  { name: 'Berlin, Germany', weatherTime: ['Sunny', '4:00 PM'], temperatureF: 70, utcOffset: 2 },
  { name: 'Rome, Italy', weatherTime: ['Sunny', '4:00 PM'], temperatureF: 80, utcOffset: 2 },
  { name: 'Johannesburg, South Africa', weatherTime: ['Cloudy', '5:00 PM'], temperatureF: 68, utcOffset: 2 },
  { name: 'Nairobi, Kenya', weatherTime: ['Rainy', '6:00 PM'], temperatureF: 72, utcOffset: 3 },
  { name: 'Cairo, Egypt', weatherTime: ['Sunny', '4:00 PM'], temperatureF: 85, utcOffset: 2 },
  { name: 'Buenos Aires, Argentina', weatherTime: ['Sunny', '10:00 AM'], temperatureF: 78, utcOffset: -3 },
  { name: 'Lagos, Nigeria', weatherTime: ['Cloudy', '4:00 PM'], temperatureF: 82, utcOffset: 1 },
];


const CountryItem = ({ country }: { country: Country}) => {
  const [weather, localTime] = country.weatherTime;
  const weatherColor = {
    Sunny: '#FFD700',
    Cloudy: '#D3D3D3',
    Rainy: '#87CEEB',
    Snowy: '#FFFFFF',
  }[weather];

  return (
    <View style={[styles.item, { backgroundColor: weatherColor }]}>
      <Text style={styles.title}>{country.name}</Text>
      <Text style={styles.text}>Weather: {weather}</Text>
      <Text style={styles.text}>Local Time: {localTime}</Text>
      <Text style={styles.text}>Temperature: {country.temperatureF}°F</Text>
      <Text style={styles.text}>UTC Offset: {country.utcOffset} hours</Text>
    </View>
  );
};


const CountryList= () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={countries}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <CountryItem country={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default CountryList;
