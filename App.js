import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import './App.css';
const App = ()=> {
	return (
		<ChatEngine
			height='100vh'
			userName='sam'
			userSecret='123123'
			projectID='1f826895-ae3b-41c1-bf7e-f62bfbb14d7e'
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps }/>}
            />
	);
}

export default App;
