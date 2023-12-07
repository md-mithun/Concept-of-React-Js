const RenderingElements = () => {
	return (
		<div>
			<h1 className='header'>Hello, World!</h1>
			<h3 className='time'>
				Current time: {new Date().toLocaleTimeString()}
			</h3>
			<h1 className='header'>Hello, World!</h1>
		</div>
	);
};
// Export the 'RenderingElements' component as the default export
export default RenderingElements;

// Import the 'RenderingElements' component in the 'App.jsx' file
// import RenderingElements from './Main_Concept/Lesson-2/RenderingElements';

// Use the setInterval function to call the render method of the React root element every second in Main.jsx
//   setInterval(() => {
// 	root.render(<App />);
//   }, 1000);
