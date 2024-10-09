import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
}

app.post('/login', (req: Request<{}, {}, LoginRequest>, res: Response<LoginResponse>) => {
  const { username, password } = req.body;
  if (username === 'testuser' && password === 'password123') {
    res.json({ success: true, message: 'ログイン成功' });
  } else {
    res.status(401).json({ success: false, message: '認証失敗' });
  }
});

const server = app.listen(3001, () => {
  console.log('Test server running on http://localhost:3001');
});

export { server, app };