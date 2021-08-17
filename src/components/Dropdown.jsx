import react, { useState } from 'react';

export const Dropdown = ({title, options, onSelect}) => {

  const [isOpen, setOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setOpen(false);
  };

  return (
    <>
      <div className="c-dropdown">
        <button onClick={() => setOpen(true)}>{title}</button>

        {isOpen && (
          // role indica a função do componente na página; facilita para acessibilidade. a ul tem uma role de menu, e cada li é um menuitem
          <ul role="menu">
            {options.map(option => <li key={option} role="menuitem" onClick={() => handleSelect(option)}>{option}</li>)}
          </ul>
        )}
      </div>
    </>
  );
}