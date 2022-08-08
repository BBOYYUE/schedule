// 当前时刻页面

import { useState } from 'react'
import { View, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Card, Text, Button, Icon, Input, Dialog, ListItem, CheckBox, ButtonGroup } from "@rneui/themed";

function DialogView (props) {
  return (
    <Dialog isVisible={props.showDialog}>
      <ScrollView style={{ height: 350 }}>
        {
          props.list.map((l, i) => (
            <ListItem key={i} bottomDivider >
              <ListItem.Content>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  title={l.name}
                />
              </ListItem.Content>
            </ListItem>
          ))
        }
      </ScrollView>
      <Button
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        onPress={() => {
          props.setShowDialog(false)
          props.setStatus('absorbed')
        }}
        title="确定"
      />
    </Dialog>
  )
}
function PrviewCard (props) {
  return (
    <View>
      <DialogView {...props}></DialogView>
      <Button
        icon={
          <Icon
            name="play"
            color="#ffffff"
            iconStyle={{ marginRight: 10 }}
            type="font-awesome"
          />
        }
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        onPress={() => {
          props.setShowDialog(true)
        }}
        title="开始一项任务"
      />
    </View>
  )
}

function AbsorbedCard (props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View>
      <ButtonGroup
        buttonStyle={{
          borderRadius: 0
        }}
        buttons={['完成', '取消']}
        selectMultiple
        selectedIndex={selectedIndex}
        onPress={(value) => {
          props.setStatus('prview')
          setSelectedIndex(value);
        }}
      ></ButtonGroup>
    </View>)
}

function CardInfo (props) {
  if (props.status === 'prview') {
    return <PrviewCard {...props}></PrviewCard>
  } else {
    return <AbsorbedCard {...props}></AbsorbedCard>
  }
}

export default function NowTime () {
  const [status, setStatus] = useState('prview')
  const [showDialog, setShowDialog] = useState(false)
  return <View style={style.container}>
    <Card>
      <Card.Title h3>{status == 'prview' ? '全景时间' : '专注时间'}</Card.Title>
      <Card.Divider />
      <CardInfo
        showDialog={showDialog}
        status={status}
        setStatus={setStatus}
        setShowDialog={setShowDialog}
        list={taskList}></CardInfo>
    </Card>
  </View>
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
  {
    name: "任务一",
    subtitle: "这是任务一",
  }
]