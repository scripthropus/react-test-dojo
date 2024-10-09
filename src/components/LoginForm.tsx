import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(false);
    
        try {
          const response = await fetch('http://localhost:3001/login', {  // URLを更新
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
    
          const result = await response.json();
    
          if (!response.ok) {
            throw new Error(result.message || 'ログインに失敗しました');
          }
    
          setSuccess(true);
        } catch (error) {
            if(error instanceof Error) {
                setError(error.message);
            }else{
                setError("不明なエラー");
            }
        } finally {
          setIsLoading(false);
        }
      };

    return (
        <form onSubmit={handleSubmit}>
        <h1>ログイン</h1>
        <label>
            ユーザー名
            <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ユーザー名"
            disabled={isLoading}
            />
        </label>
        <label>
            パスワード
            <input
            type="password"
            value={password}
            data-testid="password-input"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワード"
            disabled={isLoading}
            />
        </label>
        <button
        type="submit"
        disabled={isLoading}
        >
        {isLoading ? 'ログイン中...' : 'ログイン'}
        </button>
        {error && <p style={{ color: 'red' }}>エラー: {error}</p>}
        {success && <p style={{ color: 'green' }}>ログイン成功!</p>}
        </form>
    );
}

export default LoginForm;