import React, { PureComponent } from 'react'

import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'

import {
  Card,
  CardItem,
  Button,
  Text as NBText
} from 'native-base'

import MoreCardItem from './MoreCardItem'
import { colors } from '../../config'
import { human } from 'react-native-typography'

class More extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>

          {/* General */}
          <Card>
            <CardItem>
              <Text style={styles.cardHeaderText}>General</Text>
            </CardItem>
            <CardItem>
              <MoreCardItem
                title="John Doe"
                description="user.email@host.net"
              />
            </CardItem>
            <CardItem>
              <MoreCardItem
                title="Upgrade Options"
              />
            </CardItem>
            <CardItem>
              <MoreCardItem
                title="Notifications"
              />
            </CardItem>
          </Card>

          {/* Wallet & Accounts */}
          <Card>
            <CardItem>
              <Text style={styles.cardHeaderText}>
                Wallet & Accounts
              </Text>
            </CardItem>
            <CardItem>
              <MoreCardItem
                title="Manual Wallets"
              />
            </CardItem>
            <CardItem>
              <MoreCardItem
                title="Bank accounts"
              />
            </CardItem>
            <CardItem>
              <MoreCardItem
                title="All Categories"
                description="17 Expenses, 8 Income"
              />
            </CardItem>
            <CardItem>
              <MoreCardItem
                title="Main Currency"
                description="United States Dollars(USD)"
              />
            </CardItem>
          </Card>

          {/* Others */}
          <Card>
            <CardItem>
              <Text style={styles.cardHeaderText}>
                Other
              </Text>
            </CardItem>
            <CardItem>
              <MoreCardItem
                title="Advanced"
              />
            </CardItem>
            <CardItem>
              <MoreCardItem
                title="Support"
              />
            </CardItem>
            <CardItem>
              <MoreCardItem
                title="Terms & Policies"
                description="17 Expenses, 8 Income"
              />
            </CardItem>
            <CardItem>
            </CardItem>
          </Card>
          <View style={{ paddingVertical: 10, paddingHorizontal: 5 }}>
            <Button block style={{ backgroundColor: colors.charcoal }}>
              <NBText style={{ color: colors.grey1, fontWeight: 'bold' }}>Log Out</NBText>
            </Button>
          </View>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flex: 1
  },
  cardHeaderText: {
    ...human.headline,
    color: colors.grey2
  }
})

export default More
