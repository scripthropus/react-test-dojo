import  React from 'react'
import { fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../src/App';

test("test", () => {
    render(<App/>);
    expect(screen.getByText("セットアップ中")).toBeInTheDocument();
});
