import React from 'react';

function Header() {
  return (
    <header className='header'>
      <strong>Header</strong>
      <ul>
        <li>
          <button>홈</button>
        </li>
        <li>
          <a href=''>프로필</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;