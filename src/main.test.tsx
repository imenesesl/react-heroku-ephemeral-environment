import ReactDOM from 'react-dom/client';

jest.mock('react-dom/client', () => {
  return {
    createRoot: jest.fn().mockImplementation(() => {
      return {
        render: jest.fn()
      };
    })
  };
});

jest.mock('@root/App', () => ({
  App: () => <div>App rendered</div>
}));

describe('index.js', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);

    require('./main');

    expect(ReactDOM.createRoot).toHaveBeenCalledWith(div);
  });
});
