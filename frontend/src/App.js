import React, { useEffect, useState } from 'react';

function App() {
    const [backendMessage, setBackendMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/example-api');
                if (!response.ok) {
                    console.error('请求失败，状态码:', response.status);
                    return;
                }
                try {
                    const data = await response.json();
                    setBackendMessage(data.message);
                } catch (jsonError) {
                    console.error('JSON解析错误:', jsonError);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Frontend - Backend Interaction Demo</h1>
            <p>Message from backend: {backendMessage}</p>
        </div>
    );
}

export default App;