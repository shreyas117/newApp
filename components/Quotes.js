import React , {useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";


export default function Quotes() {
  const [QuoteItems, initQuote] = useState([])
  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/quotes?limit=3');
    if (!response.ok) {
      throw new Error('Data could not be fetched!')
    } else {
      return response.json()
    }
  }

  useEffect(() => {
    fetchData()
      .then((res) => {
        initQuote(res)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])

return(
    <View>
            <Text style={{fontSize: 20}}> React Native Fetch Requests </Text>
            {QuoteItems.quotes.map((item,index) => {
                return (
                    <View key={index}>
                    <Text >{item.id}</Text>
                    <Text >{item.quote}</Text>
                    <Text >{item.author}</Text>
                    </View>
                )
            }) }

        <Text>{QuoteItems.total}</Text>

        <Text>{QuoteItems.skip}</Text>

        <Text>{QuoteItems.limit}</Text>

        {/* {QuoteItems.quotes.map((item,idx) => {
            return(
                    <Text>
            )
        }) */}
    </View>
)
}