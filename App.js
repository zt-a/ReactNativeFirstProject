import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (text) {
      setItems([...items, { id: Date.now().toString(), key: text }]);
      setText('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список дел</Text>
      <TextInput
        style={styles.input}
        placeholder="Введите задачу"
        value={text}
        onChangeText={setText}
      />
      <Button title="Добавить" onPress={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => removeItem(item.id)}>
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item.key}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  item: {
    fontSize: 18,
  },
});
