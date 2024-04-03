# Jaime's - FactotyFour Status Page

Status page for the FactoryFour APIs.

## Installation

1. Clone the repository: `git clone https://github.com/jaimedaza/factory-four-status.git`

2. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm start`

2. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Configuration

- To modify the interval of the API calls, open the `App.tsx` file located inside `src` folder. Look for the following text: `Modify interval for the API health status.`

- `fetchDataIntervalSeconds`: Change the interval for fetching data in seconds. Ensure that the value is positive and greater than 0.

## Customization

You can customize the following aspects of the app:

- **UI:** Modify the styles and layout in the `src` directory.
- **Endpoints:** Update the `endpointNames` array in `src/App.js` to include your desired endpoints.

## Dependencies

- [React](https://reactjs.org/)
- [Axios](https://github.com/axios/axios): for making HTTP requests

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add feature'`)
5. Push to the branch (`git push origin feature`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
