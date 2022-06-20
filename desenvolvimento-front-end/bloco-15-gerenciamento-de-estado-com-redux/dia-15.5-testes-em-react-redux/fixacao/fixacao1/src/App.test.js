import React from 'react'
import { cleanup, screen } from '@testing-library/react';
import App from './App';
import renderWithRedux from './renderWithRedux';
import userEvent from '@testing-library/user-event'

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('Crie um teste com o valor padrão do reducer e teste se um clique funciona.', () => {
    renderWithRedux(<App />);

    const buttonAdicionar = screen.queryByText('Clique aqui');
    userEvent.click(buttonAdicionar);

    expect(screen.getByText('1')).toBeInTheDocument();
  })

  test('Altere o valor inicial do counter para 10, faça um clique do botão e crie os testes para esses comportamentos.', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});

    const buttonAdicionar = screen.queryByText('Clique aqui');
    userEvent.click(buttonAdicionar);

    expect(screen.getByText('11')).toBeInTheDocument();
  })
});


