import React from 'react'
import { Button, View } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { useAuthRequest } from 'expo-auth-session'

WebBrowser.maybeCompleteAuthSession()

const AuthExample = () => {
  const discovery = {
    authorizationEndpoint:
      'https://mako-kotare-ericmokuma.au.auth0.com/authorize',
    tokenEndpoint: 'https://mako-kotare-ericmokuma.au.auth0.com/oauth/token',
  }

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: 'RZ9KrXOZdVGrCcdIioCepgCpDcCvbU5Y',
      redirectUri: 'myapp://callback',
      scopes: ['openid', 'profile', 'email'],
    },
    discovery
  )

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params
      // Exchange code for tokens here
    }
  }, [response])

  return (
    <View>
      <Button
        disabled={!request}
        title="Login with Auth0"
        onPress={() => {
          promptAsync()
        }}
      />
    </View>
  )
}

export default AuthExample
