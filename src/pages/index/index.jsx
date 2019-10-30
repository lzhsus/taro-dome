import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
// Taro-Ui引入
import { AtButton } from 'taro-ui'
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
		<View className='index'>
			<view>11111</view>
			<AtButton>AtButton</AtButton>
		</View>
    )
  }
}
