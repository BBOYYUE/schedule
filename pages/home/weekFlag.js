// 本周目标页面
// 集草器
import { useState } from 'react'
import { View, Image, StyleSheet, TextInput } from 'react-native';
import { Card, Text, Button, Icon, Input } from "@rneui/themed";
import * as DateNumber from "../../util/datetime/getYearMonthWeek"

function CardInfo(props) {
    if (props.status == 'form') {
        return (
            <View>
                <View style={style.infoInput}>
                    <TextInput underlineColorAndroid='transparent' multiline={true} numberOfLines={6} placeholder="请输入"></TextInput>
                </View>
                <View >
                    <Text style={style.dataTime}>{DateNumber.YEAR_NUMBER} 年 第 {DateNumber.WEEK_NUMBER} 周</Text>
                </View>
                <Card.Divider />
                <Button
                    icon={
                        <Icon
                            name="save"
                            color="#ffffff"
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                    }}
                    title="点击保存"
                    onPress={() => props.setStatus('text')}
                />
            </View>
        )
    } else {
        return (
            <View>
                <View style={style.infoText}>
                    <Text style={style.text}>千里之行始于足下, 人生的大目标就从本周的小目标开始吧!</Text>
                </View>
                <View >
                    <Text style={style.dataTime}>{DateNumber.YEAR_NUMBER} 年 第 {DateNumber.WEEK_NUMBER} 周</Text>
                </View>
                <Card.Divider />
                <Button
                    icon={
                        <Icon
                            name="edit"
                            color="#ffffff"
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                    }}
                    title="点击编辑"
                    onPress={() => props.setStatus('form')}
                />
            </View>
        )
    }
}


export default function WeekFlag() {
    const [status, setStatus] = useState('text')
    return <View style={style.container}>
        <Card>
            <Card.Title h3>本周目标</Card.Title>
            <Card.Divider />
            <CardInfo status={status} setStatus={setStatus}></CardInfo>

        </Card>
    </View>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
    },
    dataTime: {
        fontSize: 10,
        textAlign: 'right'
    },
    infoText: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: 300,
        height: 250,
        padding: 20,
        position: 'relative'
    },
    text: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 8,
    },
    infoInput: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: 300,
        height: 250,
        position: 'relative'
    }

})