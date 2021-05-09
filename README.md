# Work ticket real-time management tool

This project is designed to solve a real life problem for a catering service/restaurant.

### Problem

- Cashier staff handling take-away orders from Wolt & Foodora has no effective means to communicate to kitchen staff about new orders coming in.
- Current workflow: Wolt/Foodora order coming in -> Staff writes work tickets on paper and deliver them to kitchen staff, which is time-consuming.

### Requirements

- An application with simple UI that can be used by both kitchen staff and cashier staff
- Communication must be real time & fast
- Application is loaded with restaurant menus
- Orders can be created and sent from cashier staff and they are displayed on both client devices opening the application
- Notification sound upon new orders for kitchen staff
- Orders can be deleted once fulfilled

### Solution

- Restaurant menus are stored in PostgreSQL database for fetching
- SocketIO is configured on both client & server side for real time communication
- Create-react-app is used for fast spinup of the client code

## Tech stack used

- React
- NodeJs/Typescript + ExpressJs
- PostgreSQL
- SocketIO
- AWS + Docker for deployment

## Application demo

![demo](docs/demo.gif)
