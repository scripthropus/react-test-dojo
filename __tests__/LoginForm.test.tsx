import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from '../src/components/LoginForm';

describe("LoginForm", () => {
    test("ログインと表示されているか", () => {
        render(<LoginForm/>);
        expect(screen.getByRole("heading", { name: "ログイン" })).toBeInTheDocument();
    });
    test("ユーザー名の入力欄があるか", () => {
        render(<LoginForm/>);
        const userNameFormField = screen.getByLabelText("ユーザー名");
        expect(userNameFormField).toBeInTheDocument();
        expect(userNameFormField).toHaveAttribute("type", "text");
    });
    test("パスワードの入力欄があるか", () => {
        render(<LoginForm/>);
        const passwardFormField = screen.getByLabelText("パスワード");
        expect(passwardFormField).toBeInTheDocument();
        expect(passwardFormField).toHaveAttribute("type", "password");
    });
});