// 快捷清单
import { View, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Card, Text, Button, Icon, Input, Dialog, ListItem, CheckBox, ButtonGroup, FAB } from "@rneui/themed";
import { useState } from 'react';

export default function CrassCollector () {
  const [visible, setVisible] = useState(true)
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {
          taskList.map((l, i) => (

            <ListItem.Swipeable
              key={i} bottomDivider
              leftContent={(reset) => (
                <Button
                  title="快捷清单"
                  onPress={() => reset()}
                  icon={{ name: 'play', color: 'white', type: "font-awesome" }}
                  buttonStyle={{ minHeight: '100%' }}
                />
              )}
              rightContent={(reset) => (
                <Button
                  title="移到回收站"
                  onPress={() => reset()}
                  icon={{ name: 'delete', color: 'white' }}
                  buttonStyle={{ minHeight: '100%', backgroundColor: '#DC2626' }}
                />
              )}
            >
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem.Swipeable>
          ))
        }
      </ScrollView>
      <FAB
        visible={visible}
        placement="right"
        icon={{ name: 'add', color: 'white' }}
        color="#3B82F6"
      ></FAB>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 0,
  },
})

let taskList = [
  {
    name: "这是任务一",
    subtitle: "这是任务一",
  },
  {
    name: "任务一",
    subtitle: "这是任务一",
  },
]