// 快捷清单
import { useState } from "react"
import { View, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Card, Text, Button, Icon, Input, Dialog, ListItem, CheckBox, ButtonGroup, FAB } from "@rneui/themed";

export default function TaskLisk () {
  const [visible, setVisible] = useState(true)
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {
          taskList.map((l, i) => (
            // <ListItem key={i} bottomDivider >
            <ListItem.Swipeable
              key={i} bottomDivider
              leftContent={(reset) => (
                <Button
                  title="开始任务"
                  onPress={() => reset()}
                  icon={{ name: 'play', color: 'white', type: "font-awesome" }}
                  buttonStyle={{ minHeight: '100%' }}
                />
              )}
              rightContent={(reset) => (
                <Button
                  title="移回集草器"
                  onPress={() => reset()}
                  icon={{ name: 'delete', color: 'white' }}
                  buttonStyle={{ minHeight: '100%', backgroundColor: '#D97706' }}
                />
              )}
            >
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem.Swipeable>
            // </ListItem>

          ))
        }
      </ScrollView>
      <FAB
        visible={visible}
        placement="right"
        icon={{ name: 'add', color: 'white' }}
        color="#3B82F6"
      ></FAB>
    </View >
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
  {
    name: "任务一",
    subtitle: "这是任务一",
  },
  {
    name: "任务一",
    subtitle: "这是任务一",
  },
  {
    name: "任务一",
    subtitle: "这是任务一",
  },
]