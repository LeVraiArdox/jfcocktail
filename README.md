# JFCocktails

JFCocktails is a simple application built using React Native and Expo that i made for my school project. It displays a list of beverages and allows the user to login.

## Prerequisites

- Node.js installed
- Expo CLI installed
- A mobile device or emulator for testing (web emulation is possible)

## Getting Started

1. Clone this repository
2. Install the dependencies: `npm install`
3. Start the app: `npx expo start`

## Code Overview

The main components of the app are:

- `Header`: displays the hour and the name of the user
- `LoginModal`: a popup window for user login
- `Button`: a custom button component

The app uses the `useState` hook to manage the state of the application. The `isConnected` variable determines whether the "Favorite" button is displayed or not. The `isModalVisible` variable controls the visibility of the `LoginModal`.

## Functions

- `onLogin`: sets the `isModalVisible` state to `true`
- `onModalClose`: sets the `isModalVisible` state to `false`
- `toggleShowFav`: toggles the `isConnected` state

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
