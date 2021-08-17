import { Dropdown } from "./Dropdown";

import { screen, render, userEvents } from "../tests/index";
import userEvent from "@testing-library/user-event";

const title = 'Selecione o seu time';
const selectedTitle = 'Seu time: ';
const options = ['Real Madrid', 'Manchester United', 'Barcelona']

describe('Dropdown', () => {
  it('Should start closed', () => {
    render(<Dropdown 
      title={title}
      options={options}
      onSelect={() => {}}
    />);

    // get: se não encontra o elemento na tela, retorna um erro e trava os testes
    // query: se não encontra, somente retorna null e continua os testes (usar quando quiser testar que algo NÃO deve ser exibido)
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });

  it('Should show options when open', () => {
    // o componente dropdown será renderizado com as props definidas acima
    render(<Dropdown
        title={title}
        options={options}
        onSelect={() => {}}
      />);
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    
    const dropdownButton = screen.getByRole('button', { name: title });
    userEvent.click(dropdownButton);
    
    expect(screen.getByRole('menuitem', {name: options[0]})).toBeInTheDocument();
    expect(screen.getByRole('menuitem', {name: options[1]})).toBeInTheDocument();
    expect(screen.getByRole('menuitem', {name: options[2]})).toBeInTheDocument();
  });

  it('Should close dropdown and show option when select a team', () => {
    const onSelect = jest.fn();
    render(<Dropdown
      title={title}
      options={options}
      onSelect={() => {}}
      />);

      expect(screen.queryByText(options[0])).not.toBeInTheDocument();
      expect(screen.queryByText(options[1])).not.toBeInTheDocument();
      expect(screen.queryByText(options[2])).not.toBeInTheDocument();
      
      const dropdownButton = screen.getByRole('button', {name: title});
      userEvent.click(dropdownButton);

      expect(screen.getByRole('menuitem', {name: options[0]})).toBeInTheDocument();
      expect(screen.getByRole('menuitem', {name: options[1]})).toBeInTheDocument();
      expect(screen.getByRole('menuitem', {name: options[2]})).toBeInTheDocument();

      userEvent.click(expect(screen.getByRole('menuitem', {name: options[1]})));

      expect(onSelect).toHaveBeenCalledWith(options[1]);

  });
})